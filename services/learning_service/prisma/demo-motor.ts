/**
 * Demostracion del motor: juega una sesion completa y la imprime.
 *
 * Sirve para ver funcionando lo que todavia no tiene pantalla. Usa preguntas
 * reales del banco y no toca datos de nadie: crea un alumno de prueba y lo
 * borra al terminar.
 *
 *   pnpm --filter @cumbre/learning-service demo
 */
import "dotenv/config";
import { randomUUID } from "node:crypto";

import { PrismaClient } from "../src/generated/prisma/index.js";
import { PracticaService } from "../src/practica/practica-service.js";

const prisma = new PrismaClient();
const motor = new PracticaService(prisma);

const ALUMNO = `demo-${randomUUID()}`;
const PERFIL = "ingenierias";
const ASIGNATURA = process.argv[2] ?? "Aritmética";

const raya = (t = "") => console.log(t ? `\n${"─".repeat(72)}\n${t}` : "─".repeat(72));

async function jugar(asignaturaId: string, acertar: boolean) {
  const s = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId, modo: "secuencial"
  });
  if (s.estado !== "ok") {
    console.log(`\n(el motor dice: ${s.estado})`);
    return null;
  }

  const alternativas = s.pregunta.alternativas as Record<string, string>;
  console.log(`\n  Tema ${s.tema.romano} — ${s.tema.nombre}`);
  console.log(`  Racha actual: ${s.progreso.rachaActual} · intentos en el tema: ${s.progreso.intentosEnTema}`);
  console.log(`\n  ${s.pregunta.enunciado.slice(0, 300)}`);
  for (const [letra, texto] of Object.entries(alternativas)) {
    console.log(`     ${letra}) ${texto.slice(0, 66)}`);
  }

  const completa = await prisma.preguntaRecord.findUniqueOrThrow({
    where: { id: s.pregunta.id }
  });
  const elegida = acertar
    ? completa.claveCorrecta
    : Object.keys(alternativas).find((k) => k !== completa.claveCorrecta)!;

  const r = await motor.responder({
    alumnoId: ALUMNO, perfil: PERFIL, preguntaId: s.pregunta.id,
    respuesta: elegida, tiempoMs: 3_000 + Math.floor(Math.random() * 5_000),
    modo: "secuencial"
  });

  const simbolo = r.resultado === "correcta" ? "✓" : r.resultado === "blanco" ? "—" : "✗";
  console.log(`\n  El alumno responde ${elegida}  ${simbolo} ${r.resultado.toUpperCase()}` +
              (r.resultado === "correcta" ? "" : `  (la correcta era ${r.claveCorrecta})`));
  console.log(`  Racha: ${r.progreso.rachaActual}`);

  if (r.evento === "tema_superado") {
    raya();
    console.log("  ISLA — TEMA SUPERADO");
    console.log("  Tres correctas al hilo. Se desbloquea el siguiente tema.");
    console.log("  Botones: [Siguiente tema]  [Seguir practicando este]");
    raya();
  }
  if (r.evento === "atasco") {
    raya();
    console.log("  ISLA — ATASCO");
    console.log(`  Lleva ${r.progreso.intentosEnTema} preguntas sin superar el tema.`);
    console.log("  Botones: [Ver solucionario]  [Seguir intentando]  [Saltar y reforzar después]");
    console.log("  El salto lo decide el alumno. El sistema nunca salta solo.");
    raya();
  }
  return r;
}

async function main() {
  const asignatura = await prisma.asignaturaRecord.findFirstOrThrow({
    where: { nombre: ASIGNATURA },
    include: { temas: { orderBy: { orden: "asc" } } }
  });

  raya();
  console.log(`  ${asignatura.eje.toUpperCase()} · ${asignatura.nombre}`);
  console.log(`  ${asignatura.temas.length} temas · perfil: ${PERFIL}`);
  raya();

  console.log("\n\n### PARTE 1 — El alumno acierta tres seguidas y supera el tema\n");
  for (let i = 0; i < 3; i += 1) {
    if (!(await jugar(asignatura.id, true))) break;
  }

  console.log("\n\n### PARTE 2 — Ya en el tema siguiente, falla y la racha se corta\n");
  await jugar(asignatura.id, true);
  await jugar(asignatura.id, false);

  console.log("\n\n### PARTE 3 — Sigue fallando hasta que aparece la isla de atasco\n");
  for (let i = 0; i < 12; i += 1) {
    const r = await jugar(asignatura.id, false);
    if (!r || r.evento === "atasco") break;
  }

  raya("  LO QUE QUEDO GUARDADO");
  const intentos = await prisma.intentoRecord.findMany({
    where: { alumnoId: ALUMNO }, orderBy: { creadoEn: "asc" }
  });
  console.log(`  ${intentos.length} intentos, cada uno con:`);
  const m = intentos[0];
  if (m) {
    console.log(`    resultado=${m.resultado}  tiempoMs=${m.tiempoMs}  modo=${m.modo}  perfil=${m.perfil}`);
  }
  const correctas = intentos.filter((i) => i.resultado === "correcta").length;
  const media = Math.round(intentos.reduce((a, i) => a + i.tiempoMs, 0) / (intentos.length || 1));
  console.log(`  ${correctas} correctas · ${intentos.length - correctas} incorrectas`);
  console.log(`  tiempo medio por pregunta: ${(media / 1000).toFixed(1)} s`);
  console.log("\n  Con esto se calculan despues las estadisticas, el Elo y el indice");
  console.log("  de admision. Sin estas filas nada de eso es posible.");
  raya();

  await prisma.intentoRecord.deleteMany({ where: { alumnoId: ALUMNO } });
  await prisma.progresoTemaRecord.deleteMany({ where: { alumnoId: ALUMNO } });
  console.log("\n(alumno de prueba borrado — no queda rastro)\n");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
