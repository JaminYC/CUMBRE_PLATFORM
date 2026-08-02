/**
 * Siembra el temario oficial de admision de la UNSA.
 *
 * La fuente es docs/Temario de UNSA/temario-unsa-2027.json, digitalizado a mano
 * desde el PDF escaneado de la Resolucion de Consejo Universitario 0028-2026.
 *
 * Se ejecuta aparte del seed de demo porque esto es dato real de produccion,
 * no material de prueba: se puede correr en cualquier entorno sin ensuciar nada.
 */
import "dotenv/config";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

const RUTA_TEMARIO = resolve(
  process.cwd(),
  "../../docs/Temario de UNSA/temario-unsa-2027.json"
);

/**
 * UUID determinista a partir de una clave legible.
 *
 * Hace falta que sea estable: si se vuelve a sembrar, los temas tienen que
 * conservar su id o el progreso de los alumnos apunta al vacio.
 */
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

interface TemaFuente {
  orden: number;
  romano: string;
  nombre: string;
  bloque?: string;
}

interface AsignaturaFuente {
  nombre: string;
  temas: TemaFuente[];
}

interface EjeFuente {
  eje: string;
  asignaturas: AsignaturaFuente[];
}

async function main() {
  const fuente = JSON.parse(readFileSync(RUTA_TEMARIO, "utf-8")) as {
    temario: EjeFuente[];
  };

  let ordenAsignatura = 0;
  let totalTemas = 0;

  for (const eje of fuente.temario) {
    for (const asignatura of eje.asignaturas) {
      ordenAsignatura += 1;
      const asignaturaId = uuidDe(`asignatura:${eje.eje}:${asignatura.nombre}`);

      await prisma.asignaturaRecord.upsert({
        where: { id: asignaturaId },
        update: { eje: eje.eje, nombre: asignatura.nombre, orden: ordenAsignatura },
        create: {
          id: asignaturaId,
          eje: eje.eje,
          nombre: asignatura.nombre,
          orden: ordenAsignatura
        }
      });

      for (const tema of asignatura.temas) {
        const temaId = uuidDe(`tema:${eje.eje}:${asignatura.nombre}:${tema.romano}`);

        await prisma.temaRecord.upsert({
          where: { id: temaId },
          update: {
            asignaturaId,
            romano: tema.romano,
            nombre: tema.nombre,
            orden: tema.orden,
            bloque: tema.bloque ?? null
          },
          create: {
            id: temaId,
            asignaturaId,
            romano: tema.romano,
            nombre: tema.nombre,
            orden: tema.orden,
            bloque: tema.bloque ?? null
          }
        });
        totalTemas += 1;
      }

      console.log(
        `  ${eje.eje} / ${asignatura.nombre}: ${asignatura.temas.length} temas`
      );
    }
  }

  console.log("");
  console.log(`Sembrado: ${ordenAsignatura} asignaturas, ${totalTemas} temas.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
