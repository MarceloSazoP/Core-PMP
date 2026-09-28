import { Pool } from "pg";

export const pmpDb = new Pool({
  host: process.env.PMP_DB_HOST ?? "localhost",
  user: process.env.PMP_DB_USER ?? "postgres",
  password: process.env.PMP_DB_PASSWORD,
  database: process.env.PMP_DB_NAME ?? "core-pmp",
});

export const enterpriseDb = new Pool({
  host: process.env.CE_DB_HOST ?? "localhost",
  user: process.env.CE_DB_USER ?? "postgres",
  password: process.env.CE_DB_PASSWORD,
  database: process.env.CE_DB_NAME ?? "core_enterprise",
});
