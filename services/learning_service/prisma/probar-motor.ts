/**
 * Ejercita el motor de practica contra la base real.
 *
 * No pasa por HTTP a proposito: lo que interesa comprobar aqui es la logica de
 * avance —racha, umbrales, islas— no el enrutado ni la autenticacion.
 *
 * Cada escenario dice que espera y se compara con lo que ocurre. Si algo no
 * cuadra, sale marcado y el proceso termina en error.
 */
import "dotenv/config";
import { randomUUID } from "node:crypto";

import { PrismaClient } from "../src/generated/prisma/index.js";
import { PracticaService } from "../src/practica/practica-service.js";

const prisma = new PrismaClient();
const motor = new PracticaService(prisma);

const ALUMNO = `test-${randomUUID()}`;
const PERFIL = "ingenierias";

let fallos = 0;

function comprobar(titulo: string, esperado: unknown, obtenido: unknown) {
  const ok = JSON.stringify(esperado) === JSON.stringify(obtenido);
  if (!ok) fallos += 1;
  console.log(
    `  ${ok ? "ok  " : "FALLA"} ${titulo}` +
      (ok ? "" : `\n        esperado: ${JSON.stringify(esperado)}` +
                 `\n        obtenido: ${JSON.stringify(obtenido)}`)
  );
}

/** Responde la pregunta que toque, acertando o fallando a voluntad. */
async function responder(asignaturaId: string, acertar: boolean, modo = "secuencial" as const) {
  const s = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId, modo
  });
  if (s.estado !== "ok") return { estado: s.estado } as const;

  const pregunta = await prisma.preguntaRecord.findUniqueOrThrow({
    where: { id: s.pregunta.id }
  });
  const otras = Object.keys(pregunta.alternativas as Record<string, string>)
    .filter((k) => k !== pregunta.claveCorrecta);

  const r = await motor.responder({
    alumnoId: ALUMNO,
    perfil: PERFIL,
    preguntaId: pregunta.id,
    respuesta: acertar ? pregunta.claveCorrecta : otras[0],
    tiempoMs: 4_200,
    modo
  });
  return { estado: "ok" as const, tema: s.tema, ...r };
}

async function main() {
  const asignatura = await prisma.asignaturaRecord.findFirstOrThrow({
    where: { nombre: "Aritmética" },
    include: { temas: { orderBy: { orden: "asc" } } }
  });
  console.log(`Asignatura: ${asignatura.nombre} (${asignatura.temas.length} temas)`);
  console.log(`Alumno de prueba: ${ALUMNO}\n`);

  console.log("1) Arranca en el primer tema del temario");
  const primera = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId: asignatura.id, modo: "secuencial"
  });
  if (primera.estado !== "ok") throw new Error(`estado inesperado: ${primera.estado}`);
  comprobar("tema I", asignatura.temas[0].romano, primera.tema.romano);
  comprobar("la clave no viaja al cliente", false, "claveCorrecta" in primera.pregunta);

  console.log("\n2) Tres correctas al hilo superan el tema");
  const temaInicial = primera.tema.id;
  for (let i = 1; i <= 3; i += 1) {
    const r = await responder(asignatura.id, true);
    if (r.estado !== "ok") throw new Error("sin preguntas");
    comprobar(`racha tras ${i} correcta(s)`, i, r.progreso.rachaActual);
    comprobar(
      `evento tras ${i}`,
      i === 3 ? "tema_superado" : "ninguno",
      r.evento
    );
  }

  console.log("\n3) Tras superarlo, pasa al siguiente tema que tenga preguntas");
  const siguiente = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId: asignatura.id, modo: "secuencial"
  });
  if (siguiente.estado !== "ok") throw new Error("sin siguiente tema");
  comprobar("cambio de tema", true, siguiente.tema.id !== temaInicial);
  comprobar("avanza en el temario", true, siguiente.tema.orden > primera.tema.orden);

  // El banco todavia no cubre los 206 temas. El motor debe saltarse los vacios
  // en vez de plantar al alumno en uno sin preguntas.
  const conBanco = await prisma.preguntaRecord.groupBy({
    by: ["temaId"],
    where: { temaId: { in: asignatura.temas.map((t) => t.id) }, activa: true, esAncla: false }
  });
  const conPreguntas = new Set(conBanco.map((c) => c.temaId));
  const esperado = asignatura.temas.find(
    (t) => t.orden > primera.tema.orden && conPreguntas.has(t.id)
  );
  comprobar("salta los temas vacios", esperado?.romano, siguiente.tema.romano);
  console.log(
    `  (temas de ${asignatura.nombre} con preguntas: ${conPreguntas.size} de ${asignatura.temas.length})`
  );

  console.log("\n4) Un fallo corta la racha");
  await responder(asignatura.id, true);
  const cortada = await responder(asignatura.id, false);
  if (cortada.estado !== "ok") throw new Error("sin preguntas");
  comprobar("racha a cero", 0, cortada.progreso.rachaActual);
  comprobar("sin isla todavia", "ninguno", cortada.evento);

  console.log("\n5) La respuesta en blanco se distingue de la incorrecta");
  const sBlanco = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId: asignatura.id, modo: "secuencial"
  });
  if (sBlanco.estado !== "ok") throw new Error("sin preguntas");
  const rBlanco = await motor.responder({
    alumnoId: ALUMNO, perfil: PERFIL, preguntaId: sBlanco.pregunta.id,
    respuesta: null, tiempoMs: 30_000, modo: "secuencial"
  });
  comprobar("resultado en blanco", "blanco", rBlanco.resultado);

  console.log("\n6) Pasadas 10 preguntas sin superar el tema, al fallar aparece la isla");
  let evento = "ninguno";
  let vueltas = 0;
  while (evento !== "atasco" && vueltas < 25) {
    const r = await responder(asignatura.id, false);
    if (r.estado !== "ok") break;
    evento = r.evento;
    vueltas += 1;
  }
  comprobar("aparece la isla de atasco", "atasco", evento);

  console.log("\n7) Queda registro completo de cada intento");
  const intentos = await prisma.intentoRecord.findMany({ where: { alumnoId: ALUMNO } });
  const conTiempo = intentos.filter((i) => i.tiempoMs > 0).length;
  const blancos = intentos.filter((i) => i.resultado === "blanco").length;
  comprobar("todos con tiempo", intentos.length, conTiempo);
  comprobar("un blanco registrado", 1, blancos);
  comprobar("todos con perfil", true, intentos.every((i) => i.perfil === PERFIL));
  console.log(`  (${intentos.length} intentos guardados)`);

  console.log("\n8) Modo foco: se queda en el tema elegido");
  const elegido = asignatura.temas[7];
  const f1 = await motor.siguiente({
    alumnoId: ALUMNO, perfil: PERFIL, asignaturaId: asignatura.id,
    modo: "foco", temaId: elegido.id
  });
  comprobar(
    "sirve el tema pedido",
    elegido.romano,
    f1.estado === "ok" ? f1.tema.romano : f1.estado
  );

  console.log("");
  if (fallos) {
    console.log(`RESULTADO: ${fallos} comprobacion(es) fallaron`);
    process.exitCode = 1;
  } else {
    console.log("RESULTADO: todas las comprobaciones pasaron");
  }

  await prisma.intentoRecord.deleteMany({ where: { alumnoId: ALUMNO } });
  await prisma.progresoTemaRecord.deleteMany({ where: { alumnoId: ALUMNO } });
  console.log("(datos de prueba borrados)");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
