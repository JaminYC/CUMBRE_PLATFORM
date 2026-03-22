/**
 * seed-students.mjs
 *
 * Crea cuentas de estudiante en CUMBRE llamando directamente al auth_service.
 * La contraseña inicial de cada estudiante es su DNI.
 *
 * Convención de correos:
 *   Todos los estudiantes usan {dni}@cumbre.local como identificador interno.
 *   No se requiere acceso a ningún inbox — el estudiante inicia sesión con su
 *   DNI como contraseña y el correo @cumbre.local solo sirve como identificador.
 *
 * Uso:
 *   node scripts/seed-students.mjs
 *   AUTH_API_URL=http://localhost:3001 node scripts/seed-students.mjs
 */

const AUTH_API_URL =
  process.env.AUTH_API_URL ?? "https://auth-api.cumbre.teamvastoria.com";

// ── Lista de estudiantes ──────────────────────────────────────────────────────
// Todos los estudiantes usan {dni}@cumbre.local como identificador de correo.
// El DNI es la contraseña inicial — el docente la comparte con los padres.
const STUDENTS = [
  { dni: "91683094", displayName: "Gia Hanna Delgadillo Cristobal",        grado: "1°" },
  { dni: "91359035", displayName: "Juan Alejandro López Vilcahuaman",       grado: "1°" },
  { dni: "90957275", displayName: "Aymar Eithan Avendaño Ponce",            grado: "2°" },
  { dni: "91236562", displayName: "Sebastián Wilson Blancas Maximiliano",   grado: "2°" },
  { dni: "90412673", displayName: "Valentina Maravi Zarate",                grado: "3°" },
  { dni: "90680803", displayName: "Schneider Sebastián Alvaro Castro",      grado: "3°" },
  { dni: "90455263", displayName: "André Fabrizio Chipana Calderon",        grado: "3°" },
  { dni: "90536610", displayName: "Favio López Vilcahuaman",                grado: "3°" },
  { dni: "79312735", displayName: "Ainhona Mariangel Cruz Llerena",         grado: "5°" },
  { dni: "72371837", displayName: "Alexis Vicent Vilca Baltazar",           grado: "5°" }
].map(s => ({ ...s, email: `${s.dni}@cumbre.local` }));

// ── Helpers ───────────────────────────────────────────────────────────────────
const GREEN  = "\x1b[32m";
const RED    = "\x1b[31m";
const YELLOW = "\x1b[33m";
const RESET  = "\x1b[0m";
const DIM    = "\x1b[2m";

async function createStudent(student) {
  const res = await fetch(`${AUTH_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      displayName: student.displayName,
      email: student.email.toLowerCase(),
      credential: student.dni,
      requestedRole: "student"
    })
  });

  const body = await res.json().catch(() => ({}));

  if (res.ok || res.status === 201) {
    return { ok: true, userId: body?.user?.id ?? "–" };
  }

  return {
    ok: false,
    error: body?.message ?? body?.error ?? `HTTP ${res.status}`
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log(`\nCUMBRE — Seed de estudiantes`);
console.log(`Auth API: ${AUTH_API_URL}\n`);

const results = [];

for (const student of STUDENTS) {
  process.stdout.write(`  ${DIM}${student.grado}${RESET}  ${student.displayName.padEnd(38)} ... `);

  try {
    const result = await createStudent(student);

    if (result.ok) {
      console.log(`${GREEN}✓${RESET} ${DIM}${result.userId}${RESET}`);
      results.push({ student, status: "ok" });
    } else {
      console.log(`${RED}✗${RESET} ${result.error}`);
      results.push({ student, status: "error", error: result.error });
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`${RED}✗${RESET} ${msg}`);
    results.push({ student, status: "error", error: msg });
  }
}

// ── Resumen ───────────────────────────────────────────────────────────────────
const ok    = results.filter(r => r.status === "ok");
const error = results.filter(r => r.status === "error");

console.log(`\n─────────────────────────────────────────`);
console.log(`  ${GREEN}${ok.length} creados${RESET}  /  ${error.length > 0 ? RED : ""}${error.length} con error${RESET}`);

if (error.length > 0) {
  console.log(`\n${YELLOW}Errores:${RESET}`);
  for (const r of error) {
    console.log(`  • ${r.student.displayName} (${r.student.email})`);
    console.log(`    ${DIM}${r.error}${RESET}`);
  }
}

if (ok.length > 0) {
  console.log(`\n${DIM}Contraseña inicial de cada estudiante = su DNI.`);
  console.log(`Comunicala a los padres para que puedan ingresar en:`);
  console.log(`https://cumbre.teamvastoria.com${RESET}`);
}

console.log();
