/**
 * Carga el banco de preguntas de examenes UNSA ya etiquetadas.
 *
 * La fuente es docs/Temario de UNSA/Examenes de Admision Pasados/examen-con-clave.json.
 * Solo entran las que estan completas: las que traian el enunciado o alguna
 * alternativa como imagen se dejan fuera, porque servirlas al alumno seria
 * mostrarle "Reduzca la expresion:" y nada mas.
 */
import "dotenv/config";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

const RUTA = resolve(
  process.cwd(),
  "../../docs/Temario de UNSA/Examenes de Admisión Pasados/examen-con-clave.json"
);

/** Mismo derivador que seed-temario.ts: los ids tienen que coincidir. */
function uuidDe(clave: string): string {
  const h = createHash("sha1").update(`unsa:${clave}`).digest("hex");
  return [
    h.slice(0, 8),
    h.slice(8, 12),
    `5${h.slice(13, 16)}`,
    ((parseInt(h.slice(16, 18), 16) & 0x3f) | 0x80).toString(16) + h.slice(18, 20),
    h.slice(20, 32)
  ].join("-");
}

interface PreguntaFuente {
  numero: number;
  enunciado: string;
  alternativas: Record<string, string>;
  claveCorrecta: string;
  solucion?: string | null;
  completa: boolean;
  asignatura: string | null;
  tema: { eje: string; romano: string; nombre: string } | null;
  perfil: string;
  fuenteExamen: string;
}

/**
 * Limpia la resolucion y descarta la que no dice nada.
 *
 * En el material de origen muchas resoluciones son una imagen: al extraer el
 * texto queda solo la puntuacion, un ":" suelto. Guardar eso haria que la
 * pantalla ofreciera "Ver solucion" para no mostrar nada.
 */
function solucionUtil(bruta: string | null | undefined): string | null {
  if (!bruta) return null;
  const limpia = bruta.replace(/^[\s:.;–-]+/, "").trim();
  return limpia.length >= 40 ? limpia : null;
}

async function main() {
  const fuente = JSON.parse(readFileSync(RUTA, "utf-8")) as {
    examenes: { area: string; perfil: string; preguntas: PreguntaFuente[] }[];
  };

  const descartes = { incompleta: 0, sinTema: 0, temaDesconocido: 0 };
  let cargadas = 0;

  for (const examen of fuente.examenes) {
    for (const p of examen.preguntas) {
      if (!p.completa) {
        descartes.incompleta += 1;
        continue;
      }
      if (!p.tema || !p.asignatura) {
        descartes.sinTema += 1;
        continue;
      }

      const temaId = uuidDe(
        `tema:${p.tema.eje}:${p.asignatura}:${p.tema.romano}`
      );
      const existe = await prisma.temaRecord.findUnique({ where: { id: temaId } });
      if (!existe) {
        descartes.temaDesconocido += 1;
        continue;
      }

      // El id sale del enunciado y no del numero de pregunta: las paginas por
      // curso empiezan cada una en "PREGUNTA 1", asi que numerar por examen
      // hacia chocar unas con otras.
      const preguntaId = uuidDe(`pregunta:${p.enunciado.slice(0, 180)}`);

      await prisma.preguntaRecord.upsert({
        where: { id: preguntaId },
        update: {
          temaId,
          enunciado: p.enunciado,
          alternativas: p.alternativas,
          claveCorrecta: p.claveCorrecta,
          solucion: solucionUtil(p.solucion),
          fuente: `UNSA ${examen.area} #${p.numero} — ${p.fuenteExamen}`,
          activa: true
        },
        create: {
          id: preguntaId,
          temaId,
          enunciado: p.enunciado,
          alternativas: p.alternativas,
          claveCorrecta: p.claveCorrecta,
          solucion: solucionUtil(p.solucion),
          fuente: `UNSA ${examen.area} #${p.numero} — ${p.fuenteExamen}`,
          // Son de examen real, pero hasta confirmar el anio se usan como
          // banco de practica. Las ancla deben estar fechadas.
          esAncla: false,
          activa: true
        }
      });
      cargadas += 1;
    }
  }

  console.log(`Cargadas: ${cargadas} preguntas`);
  console.log(
    `Descartadas: ${descartes.incompleta} incompletas, ` +
      `${descartes.sinTema} sin tema, ${descartes.temaDesconocido} con tema inexistente`
  );

  const porAsignatura = await prisma.$queryRaw<{ nombre: string; n: bigint }[]>`
    SELECT a.nombre, count(*) AS n
    FROM practica_preguntas p
    JOIN practica_temas t ON t.id = p."temaId"
    JOIN practica_asignaturas a ON a.id = t."asignaturaId"
    GROUP BY a.nombre ORDER BY n DESC
  `;
  console.log("");
  for (const fila of porAsignatura) {
    console.log(`  ${fila.nombre.padEnd(26)} ${fila.n}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
