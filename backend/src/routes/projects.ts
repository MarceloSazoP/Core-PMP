import { Router } from "express";
import { pmpDb, enterpriseDb } from "../db.js";
import { requireSession, getOrCreateProfile } from "../auth.js";

const PROJECT_ROLES = [
  "PROJECT_MANAGER", "PRODUCT_OWNER", "SCRUM_MASTER", "TEAM_MEMBER",
  "BUSINESS_ANALYST", "STAKEHOLDER", "SPONSOR", "CLIENT", "OBSERVER",
];

export const projectsRouter = Router();

projectsRouter.use(requireSession);

projectsRouter.get("/", async (req, res) => {
  const { tenantId } = req.session!;
  const { rows } = await pmpDb.query(
    `SELECT p.id, p.code, p.name, p.methodology, p.status, p.priority, p.progress,
            p.budget, p.currency, p.planned_start, p.planned_end,
            pm.enterprise_user_id AS project_manager_enterprise_user_id
     FROM projects p
     LEFT JOIN pmp_user_profiles pm ON pm.id = p.project_manager_id
     WHERE p.tenant_id = $1
     ORDER BY p.created_at DESC`,
    [tenantId],
  );
  res.json({ projects: rows });
});

projectsRouter.get("/:id", async (req, res) => {
  const { tenantId } = req.session!;
  const { rows } = await pmpDb.query(
    `SELECT * FROM projects WHERE id = $1 AND tenant_id = $2`,
    [req.params.id, tenantId],
  );
  if (!rows[0]) return res.status(404).json({ error: "Proyecto no encontrado" });
  res.json({ project: rows[0] });
});

projectsRouter.get("/:id/members", async (req, res) => {
  const { tenantId } = req.session!;

  const project = await pmpDb.query(`SELECT id FROM projects WHERE id = $1 AND tenant_id = $2`, [req.params.id, tenantId]);
  if (!project.rows[0]) return res.status(404).json({ error: "Proyecto no encontrado" });

  const { rows: members } = await pmpDb.query(
    `SELECT m.id, m.role, up.id AS user_profile_id, up.enterprise_user_id, up.platform_profile
     FROM project_members m
     JOIN pmp_user_profiles up ON up.id = m.user_profile_id
     WHERE m.project_id = $1
     ORDER BY m.created_at ASC`,
    [req.params.id],
  );

  if (members.length === 0) return res.json({ members: [] });

  const enterpriseIds = members.map((m) => m.enterprise_user_id);
  const { rows: users } = await enterpriseDb.query(
    `SELECT id, email FROM users WHERE id = ANY($1::uuid[])`,
    [enterpriseIds],
  );
  const emailById = new Map(users.map((u) => [u.id, u.email]));

  res.json({
    members: members.map((m) => ({
      id: m.id,
      role: m.role,
      platformProfile: m.platform_profile,
      email: emailById.get(m.enterprise_user_id) ?? "(desconocido)",
    })),
  });
});

projectsRouter.post("/:id/members", async (req, res) => {
  const { tenantId } = req.session!;
  const { email, role } = req.body ?? {};

  if (!email || !role) return res.status(400).json({ error: "email y role son obligatorios" });
  if (!PROJECT_ROLES.includes(role)) return res.status(400).json({ error: `role inválido. Usa uno de: ${PROJECT_ROLES.join(", ")}` });

  const project = await pmpDb.query(`SELECT id FROM projects WHERE id = $1 AND tenant_id = $2`, [req.params.id, tenantId]);
  if (!project.rows[0]) return res.status(404).json({ error: "Proyecto no encontrado" });

  const enterpriseUser = await enterpriseDb.query(
    `SELECT u.id FROM users u
     JOIN tenant_memberships m ON m.user_id = u.id
     WHERE u.email = $1 AND m.tenant_id = $2`,
    [email, tenantId],
  );
  if (!enterpriseUser.rows[0]) {
    return res.status(404).json({ error: `No existe un usuario con email ${email} en este tenant (Core Enterprise)` });
  }

  const profile = await getOrCreateProfile(tenantId, enterpriseUser.rows[0].id);

  try {
    await pmpDb.query(
      `INSERT INTO project_members (project_id, user_profile_id, role) VALUES ($1, $2, $3)`,
      [req.params.id, profile.id, role],
    );
    res.status(201).json({ ok: true });
  } catch (err: unknown) {
    if (err && typeof err === "object" && "code" in err && err.code === "23505") {
      return res.status(409).json({ error: "Ese usuario ya tiene ese rol en el proyecto" });
    }
    throw err;
  }
});

// El código (PRJ-001, PRJ-002...) es correlativo por tenant y nunca lo escribe el usuario.
async function nextProjectCode(tenantId: string): Promise<string> {
  const { rows } = await pmpDb.query(
    `SELECT COALESCE(MAX((regexp_match(code, '^PRJ-(\\d+)$'))[1]::int), 0) + 1 AS next
     FROM projects WHERE tenant_id = $1`,
    [tenantId],
  );
  return `PRJ-${String(rows[0].next).padStart(3, "0")}`;
}

projectsRouter.post("/", async (req, res) => {
  const { tenantId, userId } = req.session!;
  const { name, description, methodology, priority, plannedStart, plannedEnd, budget, currency } = req.body ?? {};

  if (!name) {
    return res.status(400).json({ error: "name es obligatorio" });
  }

  const profile = await getOrCreateProfile(tenantId, userId);

  // Reintenta una vez si otra creación concurrente ya tomó el código calculado (carrera poco
  // probable en este volumen de uso; UNIQUE(tenant_id, code) es la garantía real).
  for (let attempt = 0; attempt < 2; attempt++) {
    const code = await nextProjectCode(tenantId);
    try {
      const { rows } = await pmpDb.query(
        `INSERT INTO projects (tenant_id, code, name, description, methodology, priority,
                                project_manager_id, created_by, planned_start, planned_end, budget, currency)
         VALUES ($1, $2, $3, $4, COALESCE($5::project_methodology, 'TRADITIONAL'), COALESCE($6, 'MEDIUM'), $7, $8, $9, $10, $11, COALESCE($12, 'CLP'))
         RETURNING *`,
        [tenantId, code, name, description ?? null, methodology, priority, profile.id, userId, plannedStart ?? null, plannedEnd ?? null, budget ?? null, currency],
      );

      await pmpDb.query(
        `INSERT INTO project_members (project_id, user_profile_id, role) VALUES ($1, $2, 'PROJECT_MANAGER')`,
        [rows[0].id, profile.id],
      );

      return res.status(201).json({ project: rows[0] });
    } catch (err: unknown) {
      const isConflict = err && typeof err === "object" && "code" in err && err.code === "23505";
      if (isConflict && attempt === 0) continue;
      if (isConflict) return res.status(409).json({ error: "No se pudo generar un código único, intenta de nuevo" });
      throw err;
    }
  }
});
