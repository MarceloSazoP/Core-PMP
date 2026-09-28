import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { Client } from "pg";
import { projectsRouter } from "./routes/projects.js";

const PORT = process.env.PORT ?? 3011;
const DEV_AUTOLOGIN = process.env.NODE_ENV !== "production";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-do-not-use-in-prod";
const DEV_EMAIL = process.env.DEV_USER_EMAIL ?? "admincorepmp@coretecnologias.cl";

const app = express();
app.use(cors({ origin: "http://localhost:3010", credentials: true }));
app.use(cookieParser());
app.use(express.json());

async function findDevUser(email: string) {
  const client = new Client({
    host: process.env.CE_DB_HOST ?? "localhost",
    user: process.env.CE_DB_USER ?? "postgres",
    password: process.env.CE_DB_PASSWORD,
    database: process.env.CE_DB_NAME ?? "core_enterprise",
  });
  await client.connect();
  try {
    const { rows } = await client.query(
      `SELECT u.id, u.email, t.id AS tenant_id, t.legal_name
       FROM users u
       JOIN tenant_memberships m ON m.user_id = u.id
       JOIN tenants t ON t.id = m.tenant_id
       WHERE u.email = $1
       LIMIT 1`,
      [email]
    );
    return rows[0] ?? null;
  } finally {
    await client.end();
  }
}

// ponytail: bypass de login solo para desarrollo local; nunca activo si NODE_ENV=production
app.get("/api/auth/session", async (req, res) => {
  const existing = req.cookies?.session;
  if (existing) {
    try {
      const payload = jwt.verify(existing, JWT_SECRET);
      return res.json({ user: payload, autologin: false });
    } catch {
      // token vencido o inválido, cae a autologin si aplica
    }
  }

  if (!DEV_AUTOLOGIN) {
    return res.status(401).json({ error: "No autenticado" });
  }

  const user = await findDevUser(DEV_EMAIL);
  if (!user) {
    return res.status(500).json({ error: `Usuario dev no encontrado: ${DEV_EMAIL}` });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, tenantId: user.tenant_id, tenantName: user.legal_name },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
  res.cookie("session", token, { httpOnly: true, sameSite: "lax", maxAge: 7 * 24 * 3600 * 1000 });
  return res.json({ user: { email: user.email, tenantId: user.tenant_id, tenantName: user.legal_name }, autologin: true });
});

app.post("/api/auth/logout", (_req, res) => {
  res.clearCookie("session");
  res.json({ ok: true });
});

app.use("/api/projects", projectsRouter);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Core-PMP backend en http://localhost:${PORT} (autologin dev: ${DEV_AUTOLOGIN})`);
});
