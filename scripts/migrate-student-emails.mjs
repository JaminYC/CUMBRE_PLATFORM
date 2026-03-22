/**
 * migrate-student-emails.mjs
 *
 * Migra los correos de los 9 estudiantes ya creados en producción desde sus
 * emails reales / familiares hacia el formato interno {dni}@cumbre.local.
 *
 * Uso:
 *   DATABASE_URL="postgresql://..." node scripts/migrate-student-emails.mjs
 *
 * Obtén DATABASE_URL desde Railway → auth_service → Variables.
 * Usa la URL del pooler en modo transacción (puerto 6543):
 *   postgresql://<user>:<pass>@aws-0-<region>.pooler.supabase.com:6543/postgres
 */

if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL no está definida.");
  console.error(
    'Uso: DATABASE_URL="postgresql://..." node scripts/migrate-student-emails.mjs'
  );
  process.exit(1);
}

// ── Mapa de migración: dni → email_antiguo ────────────────────────────────────
// Favio (90536610) ya tiene 90536610@cumbre.local — se omite.
const MIGRATIONS = [
  { dni: "91683094", oldEmail: "giovannaTorresmatos@gmail.com" },
  { dni: "91359035", oldEmail: "joseluisvilcahuamanponce@gmail.com" },
  { dni: "90957275", oldEmail: "Veritopg2022@gmail.com" },
  { dni: "91236562", oldEmail: "Karencita080795@gmail.com" },
  { dni: "90412673", oldEmail: "kelys.zaratelizarraga@gmail.com" },
  { dni: "90680803", oldEmail: "castrogalarzaisabel72@gmail.com" },
  { dni: "90455263", oldEmail: "Abikcm92@gmail.com" },
  { dni: "79312735", oldEmail: "rossariollerenallerena@gmail.com" },
  { dni: "72371837", oldEmail: "72371837@continental.edu.pe" }
];

// ── Colores ───────────────────────────────────────────────────────────────────
const GREEN  = "\x1b[32m";
const RED    = "\x1b[31m";
const YELLOW = "\x1b[33m";
const RESET  = "\x1b[0m";
const DIM    = "\x1b[2m";

// ── Import Prisma client generado ─────────────────────────────────────────────
// El cliente generado resuelve el binario nativo relativo a su propio index.js.
const { PrismaClient } = await import(
  "../services/auth_service/src/generated/prisma/index.js"
);

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
});

// ── Main ──────────────────────────────────────────────────────────────────────
console.log("\nCUMBRE — Migración de emails de estudiantes");
console.log(`${DIM}${process.env.DATABASE_URL.replace(/:([^:@]+)@/, ":***@")}${RESET}\n`);

const results = [];

for (const { dni, oldEmail } of MIGRATIONS) {
  const newEmail = `${dni}@cumbre.local`;
  process.stdout.write(
    `  ${DIM}${oldEmail.padEnd(42)}${RESET} → ${newEmail.padEnd(28)} ... `
  );

  try {
    const updated = await prisma.authUser.updateMany({
      where: { email: oldEmail.toLowerCase() },
      data:  { email: newEmail }
    });

    if (updated.count === 1) {
      console.log(`${GREEN}✓${RESET}`);
      results.push({ dni, status: "ok" });
    } else if (updated.count === 0) {
      console.log(`${YELLOW}⚠ no encontrado${RESET}`);
      results.push({ dni, status: "not_found" });
    } else {
      console.log(`${RED}✗ actualizó ${updated.count} filas (inesperado)${RESET}`);
      results.push({ dni, status: "error", error: `${updated.count} rows` });
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`${RED}✗ ${msg}${RESET}`);
    results.push({ dni, status: "error", error: msg });
  }
}

await prisma.$disconnect();

// ── Resumen ───────────────────────────────────────────────────────────────────
const ok       = results.filter(r => r.status === "ok");
const notFound = results.filter(r => r.status === "not_found");
const errors   = results.filter(r => r.status === "error");

console.log(`\n─────────────────────────────────────────`);
console.log(
  `  ${GREEN}${ok.length} migrados${RESET}` +
  (notFound.length ? `  ${YELLOW}${notFound.length} no encontrados${RESET}` : "") +
  (errors.length   ? `  ${RED}${errors.length} errores${RESET}` : "")
);

if (notFound.length > 0) {
  console.log(`\n${YELLOW}No encontrados (¿ya migrados?):${RESET}`);
  for (const r of notFound) console.log(`  • DNI ${r.dni}`);
}

if (errors.length > 0) {
  console.log(`\n${RED}Errores:${RESET}`);
  for (const r of errors) console.log(`  • DNI ${r.dni}: ${r.error}`);
}

console.log();
