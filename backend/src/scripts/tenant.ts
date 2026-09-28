// Rutina CLI para crear/eliminar empresas (tenants) en Core Enterprise.
// Uso:
//   npx tsx src/scripts/tenant.ts create --tax-id 7240020-8 --legal-name "Core-PMP" --trade-name "Core-PMP (TI)" --email admin@ejemplo.cl
//   npx tsx src/scripts/tenant.ts delete --tax-id 7240020-8
import "dotenv/config";
import { Client } from "pg";

const CE_CONNECTION = {
  host: process.env.CE_DB_HOST ?? "localhost",
  user: process.env.CE_DB_USER ?? "postgres",
  password: process.env.CE_DB_PASSWORD,
  database: process.env.CE_DB_NAME ?? "core_enterprise",
};

function parseArgs(argv: string[]) {
  const args: Record<string, string> = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    if (key) args[key] = argv[i + 1];
  }
  return args;
}

async function createTenant(args: Record<string, string>) {
  const { "tax-id": taxId, "legal-name": legalName, "trade-name": tradeName, email, country = "CL" } = args;
  if (!taxId || !legalName || !email) {
    throw new Error("Faltan argumentos: --tax-id --legal-name --email son obligatorios");
  }

  const client = new Client(CE_CONNECTION);
  await client.connect();
  try {
    await client.query("BEGIN");

    const tenant = await client.query(
      `INSERT INTO tenants (tax_id, legal_name, trade_name, country_code, status)
       VALUES ($1, $2, $3, $4, 'ACTIVE')
       RETURNING id`,
      [taxId, legalName, tradeName ?? legalName, country]
    );
    const tenantId = tenant.rows[0].id;

    const user = await client.query(
      `INSERT INTO users (email, password_hash, status)
       VALUES ($1, 'DEV_NO_PASSWORD_AUTOLOGIN', 'ACTIVE')
       ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
       RETURNING id`,
      [email]
    );
    const userId = user.rows[0].id;

    await client.query(
      `INSERT INTO tenant_memberships (tenant_id, user_id, status, is_owner)
       VALUES ($1, $2, 'ACTIVE', true)
       ON CONFLICT (tenant_id, user_id) DO NOTHING`,
      [tenantId, userId]
    );

    const app = await client.query(`SELECT id FROM applications WHERE code = 'core-pmp'`);
    if (app.rows[0]) {
      await client.query(
        `INSERT INTO tenant_applications (tenant_id, application_id, status, activated_at)
         VALUES ($1, $2, 'ACTIVE', now())
         ON CONFLICT (tenant_id, application_id) DO NOTHING`,
        [tenantId, app.rows[0].id]
      );
    }

    await client.query("COMMIT");
    console.log(`Tenant creado: ${tenantId} (${taxId} - ${legalName}), usuario owner: ${email}`);
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    await client.end();
  }
}

async function deleteTenant(args: Record<string, string>) {
  const { "tax-id": taxId } = args;
  if (!taxId) throw new Error("Falta argumento: --tax-id es obligatorio");

  const client = new Client(CE_CONNECTION);
  await client.connect();
  try {
    const tenant = await client.query(`SELECT id FROM tenants WHERE tax_id = $1`, [taxId]);
    if (!tenant.rows[0]) {
      console.log(`No existe tenant con tax_id ${taxId}`);
      return;
    }
    const tenantId = tenant.rows[0].id;

    await client.query("BEGIN");
    await client.query(`DELETE FROM tenant_applications WHERE tenant_id = $1`, [tenantId]);
    await client.query(`DELETE FROM tenant_memberships WHERE tenant_id = $1`, [tenantId]);
    await client.query(`DELETE FROM tenants WHERE id = $1`, [tenantId]);
    await client.query("COMMIT");
    console.log(`Tenant eliminado: ${tenantId} (${taxId})`);
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    await client.end();
  }
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);

  if (command === "create") return createTenant(args);
  if (command === "delete") return deleteTenant(args);

  console.error("Uso: tenant.ts <create|delete> --tax-id <rut> [--legal-name --trade-name --email]");
  process.exit(1);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
