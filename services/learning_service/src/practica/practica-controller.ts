import { UnauthorizedError, ValidationError } from "@cumbre/api-runtime";
import type { RequestContext } from "@cumbre/api-runtime";
import type { Modo, PracticaService } from "./practica-service.js";

const MODOS: Modo[] = ["secuencial", "foco", "quiz", "simulacro"];
const PERFILES = ["ingenierias", "biomedicas", "sociales"];

/**
 * El alumno sale siempre del token, nunca del cuerpo de la peticion.
 *
 * Si el identificador viajara en el body, cualquiera con una sesion valida
 * podria responder en nombre de otro y ensuciarle el avance.
 */
function alumnoDe(auth: RequestContext["auth"]) {
  if (!auth?.userId) {
    throw new UnauthorizedError("Se requiere sesion para practicar.");
  }
  return auth.userId;
}

function modoDe(valor: unknown): Modo {
  const modo = typeof valor === "string" ? valor : "secuencial";
  if (!MODOS.includes(modo as Modo)) {
    throw new ValidationError(`Modo no valido: ${modo}`);
  }
  return modo as Modo;
}

function perfilDe(valor: unknown): string {
  const perfil = typeof valor === "string" ? valor : "";
  if (!PERFILES.includes(perfil)) {
    throw new ValidationError(
      `Perfil no valido. Debe ser uno de: ${PERFILES.join(", ")}`
    );
  }
  return perfil;
}

export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}

  asignaturas = async ({ auth }: RequestContext): Promise<unknown> => {
    return this.practicaService.asignaturas(alumnoDe(auth));
  };

  siguiente = async ({ auth, query }: RequestContext): Promise<unknown> => {
    const asignaturaId = query.get("asignaturaId");
    if (!asignaturaId) {
      throw new ValidationError("Falta asignaturaId.");
    }
    return this.practicaService.siguiente({
      alumnoId: alumnoDe(auth),
      perfil: perfilDe(query.get("perfil")),
      asignaturaId,
      modo: modoDe(query.get("modo")),
      temaId: query.get("temaId") ?? undefined
    });
  };

  responder = async ({ auth, body }: RequestContext): Promise<unknown> => {
    const datos = (body ?? {}) as Record<string, unknown>;
    if (typeof datos.preguntaId !== "string") {
      throw new ValidationError("Falta preguntaId.");
    }
    if (typeof datos.tiempoMs !== "number" || datos.tiempoMs < 0) {
      throw new ValidationError("tiempoMs debe ser un numero de milisegundos.");
    }
    // null es una respuesta legitima: significa que la dejo en blanco, que en
    // el examen real no penaliza igual que fallar.
    const respuesta =
      datos.respuesta === null || datos.respuesta === undefined
        ? null
        : String(datos.respuesta);

    return this.practicaService.responder({
      alumnoId: alumnoDe(auth),
      perfil: perfilDe(datos.perfil),
      preguntaId: datos.preguntaId,
      respuesta,
      tiempoMs: datos.tiempoMs,
      modo: modoDe(datos.modo)
    });
  };
}
