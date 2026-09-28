import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { pmpDb } from "./db.js";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-do-not-use-in-prod";

export interface SessionPayload {
  userId: string;
  email: string;
  tenantId: string;
  tenantName: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      session?: SessionPayload;
    }
  }
}

export function requireSession(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.session;
  if (!token) return res.status(401).json({ error: "No autenticado" });
  try {
    req.session = jwt.verify(token, JWT_SECRET) as SessionPayload;
    next();
  } catch {
    return res.status(401).json({ error: "Sesión inválida o vencida" });
  }
}

// arq.md §79: el perfil PMP es dominio propio (skills, availability, preferences), separado de
// la identidad de Enterprise. Se auto-provisiona en el primer acceso de un usuario al tenant.
export async function getOrCreateProfile(tenantId: string, enterpriseUserId: string) {
  const existing = await pmpDb.query(
    `SELECT id, tenant_id, enterprise_user_id, platform_profile FROM pmp_user_profiles
     WHERE tenant_id = $1 AND enterprise_user_id = $2`,
    [tenantId, enterpriseUserId],
  );
  if (existing.rows[0]) return existing.rows[0];

  // ponytail: todo auto-provisioning parte como PMP_ADMIN — no hay UI de invitación/roles
  // todavía, así que no existe un "primer admin vs. resto". Ajustar cuando exista esa UI.
  const created = await pmpDb.query(
    `INSERT INTO pmp_user_profiles (tenant_id, enterprise_user_id, platform_profile)
     VALUES ($1, $2, 'PMP_ADMIN')
     RETURNING id, tenant_id, enterprise_user_id, platform_profile`,
    [tenantId, enterpriseUserId],
  );
  return created.rows[0];
}
