import { NotFoundError, ValidationError } from "@cumbre/api-runtime";
import type { PrismaClient } from "../generated/prisma/index.js";

/**
 * Motor de practica secuencial para la admision a la UNSA.
 *
 * Las reglas salen de la reunion del 28 de julio y de la evidencia publicada
 * (ver docs/motor-practica-adaptativa.pdf):
 *
 *   - Tres correctas al hilo desbloquean el siguiente tema. Con ese umbral,
 *     el 80% de los alumnos acierta tambien las dos siguientes.
 *   - Cinco al hilo marcan el tema como consolidado. Para una pregunta nueva
 *     —que es lo que hay en el examen— tres se queda en el azar.
 *   - A las diez preguntas sin superar el tema, al siguiente fallo aparece la
 *     isla: ver solucionario, seguir intentando o saltar. Siempre lo decide
 *     el alumno; el sistema nunca salta solo.
 */

export type Modo = "secuencial" | "foco" | "quiz" | "simulacro";
export type Resultado = "correcta" | "incorrecta" | "blanco";

const AL_HILO_PRACTICADO = 3;
const AL_HILO_CONSOLIDADO = 5;
const UMBRAL_ISLA = 10;

interface SiguienteParams {
  alumnoId: string;
  perfil: string;
  asignaturaId: string;
  modo: Modo;
  temaId?: string;
}

interface ResponderParams {
  alumnoId: string;
  perfil: string;
  preguntaId: string;
  respuesta: string | null;
  tiempoMs: number;
  modo: Modo;
}

export class PracticaService {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Cursos disponibles, con cuantas preguntas tiene cargadas cada uno.
   *
   * El conteo va al cliente a proposito: mientras el banco no cubra el
   * temario, la pantalla tiene que poder avisar de que un curso esta vacio en
   * vez de dejar al alumno entrar y encontrarse con nada.
   */
  async asignaturas(alumnoId: string) {
    const asignaturas = await this.prisma.asignaturaRecord.findMany({
      orderBy: { orden: "asc" },
      include: { temas: { select: { id: true } } }
    });

    const banco = await this.prisma.preguntaRecord.groupBy({
      by: ["temaId"],
      where: { activa: true, esAncla: false },
      _count: { _all: true }
    });
    const porTema = new Map(banco.map((b) => [b.temaId, b._count._all]));

    const superados = await this.prisma.progresoTemaRecord.findMany({
      where: { alumnoId, practicado: true },
      select: { temaId: true }
    });
    const hechos = new Set(superados.map((s) => s.temaId));

    return asignaturas.map((a) => {
      const conBanco = a.temas.filter((t) => porTema.has(t.id));
      return {
        id: a.id,
        eje: a.eje,
        nombre: a.nombre,
        temas: a.temas.length,
        temasConPreguntas: conBanco.length,
        preguntas: a.temas.reduce((n, t) => n + (porTema.get(t.id) ?? 0), 0),
        temasSuperados: conBanco.filter((t) => hechos.has(t.id)).length
      };
    });
  }

  /**
   * Devuelve la siguiente pregunta.
   *
   * En modo secuencial el tema lo decide el avance del alumno: el primero que
   * aun no tenga marcado como practicado. En modo foco lo elige el.
   */
  async siguiente({
    alumnoId,
    perfil,
    asignaturaId,
    modo,
    temaId
  }: SiguienteParams) {
    const asignatura = await this.prisma.asignaturaRecord.findUnique({
      where: { id: asignaturaId },
      include: { temas: { orderBy: { orden: "asc" } } }
    });
    if (!asignatura) {
      throw new NotFoundError("La asignatura no existe.");
    }

    const tema =
      modo === "foco"
        ? asignatura.temas.find((t) => t.id === temaId)
        : await this.temaEnCurso(alumnoId, asignatura.temas);

    if (!tema) {
      if (modo === "foco") {
        throw new ValidationError("El tema no pertenece a esta asignatura.");
      }
      // Sin temas pendientes el curso esta terminado; no es un error.
      return { estado: "asignatura_completa" as const, asignatura: asignatura.nombre };
    }

    const pregunta = await this.preguntaNoVista(alumnoId, tema.id);
    if (!pregunta) {
      return {
        estado: "sin_preguntas" as const,
        tema: { id: tema.id, nombre: tema.nombre, romano: tema.romano }
      };
    }

    const progreso = await this.progresoDe(alumnoId, tema.id);

    return {
      estado: "ok" as const,
      asignatura: { id: asignatura.id, nombre: asignatura.nombre, eje: asignatura.eje },
      tema: { id: tema.id, nombre: tema.nombre, romano: tema.romano, orden: tema.orden },
      pregunta: {
        id: pregunta.id,
        enunciado: pregunta.enunciado,
        // La clave no viaja al cliente: el navegador no debe poder leerla
        // antes de responder.
        alternativas: pregunta.alternativas
      },
      progreso: {
        rachaActual: progreso.rachaActual,
        intentosEnTema: progreso.intentosEnTema,
        practicado: progreso.practicado,
        consolidado: progreso.consolidado
      },
      modo,
      perfil
    };
  }

  /**
   * Registra la respuesta y decide que pasa despues.
   *
   * Todo el estado que hace falta para reconstruir el historico queda en
   * practica_intentos: sin esa fila no hay estadisticas, ni Elo, ni indice de
   * admision posibles mas adelante.
   */
  async responder({
    alumnoId,
    perfil,
    preguntaId,
    respuesta,
    tiempoMs,
    modo
  }: ResponderParams) {
    const pregunta = await this.prisma.preguntaRecord.findUnique({
      where: { id: preguntaId },
      include: { tema: true }
    });
    if (!pregunta) {
      throw new NotFoundError("La pregunta no existe.");
    }

    const resultado: Resultado =
      respuesta === null || respuesta === ""
        ? "blanco"
        : respuesta.toUpperCase() === pregunta.claveCorrecta.toUpperCase()
          ? "correcta"
          : "incorrecta";

    const progreso = await this.progresoDe(alumnoId, pregunta.temaId);

    // Solo la respuesta correcta continua la racha. En blanco la corta igual
    // que un fallo: no saber y no arriesgar no es lo mismo en el examen, pero
    // para dar por superado un tema tampoco cuenta.
    const racha = resultado === "correcta" ? progreso.rachaActual + 1 : 0;
    const intentos = progreso.intentosEnTema + 1;
    const practicado = progreso.practicado || racha >= AL_HILO_PRACTICADO;
    const consolidado = progreso.consolidado || racha >= AL_HILO_CONSOLIDADO;

    await this.prisma.$transaction([
      this.prisma.intentoRecord.create({
        data: {
          id: crypto.randomUUID(),
          alumnoId,
          preguntaId,
          temaId: pregunta.temaId,
          asignaturaId: pregunta.tema.asignaturaId,
          resultado,
          tiempoMs,
          modo,
          perfil
        }
      }),
      this.prisma.progresoTemaRecord.update({
        where: { id: progreso.id },
        data: {
          rachaActual: racha,
          mejorRacha: Math.max(progreso.mejorRacha, racha),
          intentosEnTema: intentos,
          practicado,
          consolidado,
          ultimoIntentoEn: new Date()
        }
      }),
      this.prisma.preguntaRecord.update({
        where: { id: preguntaId },
        data: { vecesServida: { increment: 1 } }
      })
    ]);

    return {
      resultado,
      claveCorrecta: pregunta.claveCorrecta,
      solucion: pregunta.solucion,
      progreso: { rachaActual: racha, intentosEnTema: intentos, practicado, consolidado },
      evento: this.evento({
        resultado,
        racha,
        intentos,
        yaEstabaPracticado: progreso.practicado
      })
    };
  }

  /**
   * Que pantalla toca despues de responder.
   *
   * "tema_superado" y "atasco" son las dos islas. La de atasco solo aparece
   * tras fallar habiendo pasado el umbral: si saltara al primer error, el
   * alumno que se equivoca una vez por descuido recibiria una oferta de
   * rendirse. El 90% de los que dominan un tema llegan sin fallar ninguna.
   */
  private evento({
    resultado,
    racha,
    intentos,
    yaEstabaPracticado
  }: {
    resultado: Resultado;
    racha: number;
    intentos: number;
    yaEstabaPracticado: boolean;
  }) {
    if (!yaEstabaPracticado && racha >= AL_HILO_PRACTICADO) {
      return "tema_superado" as const;
    }
    if (
      !yaEstabaPracticado &&
      resultado !== "correcta" &&
      intentos > UMBRAL_ISLA
    ) {
      return "atasco" as const;
    }
    return "ninguno" as const;
  }

  /**
   * Primer tema pendiente que ademas tenga preguntas cargadas.
   *
   * Lo segundo no es un detalle: el temario tiene 206 temas y el banco no los
   * cubre todos todavia. Sin este filtro, el alumno que supera un tema cae en
   * el siguiente, que esta vacio, y se queda ahi sin nada que responder por
   * mucho que el temario siga.
   *
   * Los temas sin preguntas se saltan, no se marcan como superados: cuando
   * lleguen sus preguntas volveran a aparecer en su sitio.
   */
  private async temaEnCurso(
    alumnoId: string,
    temas: { id: string; nombre: string; romano: string; orden: number }[]
  ) {
    const ids = temas.map((t) => t.id);

    const superados = await this.prisma.progresoTemaRecord.findMany({
      where: { alumnoId, temaId: { in: ids }, practicado: true },
      select: { temaId: true }
    });
    const hechos = new Set(superados.map((s) => s.temaId));

    const conBanco = await this.prisma.preguntaRecord.groupBy({
      by: ["temaId"],
      where: { temaId: { in: ids }, activa: true, esAncla: false },
      _count: { _all: true }
    });
    const tienenPreguntas = new Set(conBanco.map((c) => c.temaId));

    return temas.find((t) => !hechos.has(t.id) && tienenPreguntas.has(t.id));
  }

  /**
   * Una pregunta del tema que este alumno no haya visto todavia.
   *
   * Cuando se agotan, se vuelve a empezar: es preferible repetir a dejarlo sin
   * nada que hacer. Que un tema llegue a esto es la senal operativa de que
   * hace falta meterle preguntas frescas.
   */
  private async preguntaNoVista(alumnoId: string, temaId: string) {
    const vistas = await this.prisma.intentoRecord.findMany({
      where: { alumnoId, temaId },
      select: { preguntaId: true },
      distinct: ["preguntaId"]
    });
    const excluir = vistas.map((v) => v.preguntaId);

    const disponibles = await this.prisma.preguntaRecord.findMany({
      where: {
        temaId,
        activa: true,
        esAncla: false,
        ...(excluir.length ? { id: { notIn: excluir } } : {})
      }
    });

    const bolsa = disponibles.length
      ? disponibles
      : await this.prisma.preguntaRecord.findMany({
          where: { temaId, activa: true, esAncla: false }
        });

    if (!bolsa.length) {
      return null;
    }
    return bolsa[Math.floor(Math.random() * bolsa.length)];
  }

  /** Lee el progreso del tema, creandolo la primera vez. */
  private async progresoDe(alumnoId: string, temaId: string) {
    const existente = await this.prisma.progresoTemaRecord.findUnique({
      where: { alumnoId_temaId: { alumnoId, temaId } }
    });
    if (existente) {
      return existente;
    }
    return this.prisma.progresoTemaRecord.create({
      data: { id: crypto.randomUUID(), alumnoId, temaId }
    });
  }
}
