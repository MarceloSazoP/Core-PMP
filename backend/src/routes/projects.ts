import { Router } from "express";
import { pmpDb } from "../db.js";
import { requireSession, getOrCreateProfile } from "../auth.js";

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

projectsRouter.post("/", async (req, res) => {
  const { tenantId, userId } = req.session!;
  const { code, name, description, methodology, priority, plannedStart, plannedEnd, budget, currency } = req.body ?? {};

  if (!code || !name) {
    return res.status(400).json({ error: "code y name son obligatorios" });
  }

  const profile = await getOrCreateProfile(tenantId, userId);

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

    res.status(201).json({ project: rows[0] });
  } catch (err: unknown) {
    if (err && typeof err === "object" && "code" in err && err.code === "23505") {
      return res.status(409).json({ error: `Ya existe un proyecto con código ${code} en este tenant` });
    }
    throw err;
  }
});
