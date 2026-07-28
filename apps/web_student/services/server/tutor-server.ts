import type {
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  GetTutorSessionRequest,
  GetTutorSessionResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse
} from "@cumbre/schemas";
import { BackendRequestError, fetchBackendData } from "@/lib/backend-http";
import { serverServiceEndpoints } from "@/lib/env";
import { getServerSession } from "@/lib/server-session";

/**
 * El tutor vive en learning_service, no aqui.
 *
 * Antes este archivo armaba el contexto y llamaba al motor dentro del mismo
 * proceso de Next. Funcionaba en local y era imposible en Vercel: el motor
 * abre su propia conexion a la base, y desde Vercel no se llega a Cloud SQL
 * sin dejar la base expuesta a internet. En produccion las tres rutas del
 * tutor devolvian 500.
 *
 * Ahora esto es un intermediario y nada mas: recibe del navegador y reenvia
 * al servicio, que si tiene la conexion y ademas ya conoce el progreso del
 * estudiante, que era la mitad del contexto que habia que reunir.
 */

export function startLessonTutorSession(
  request: StartTutorSessionRequest
): Promise<StartTutorSessionResponse> {
  return fetchBackendData<StartTutorSessionResponse>(
    "learning",
    "/tutor/session/start",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    }
  );
}

export function createLessonTutorInteraction(
  request: CreateTutorInteractionRequest
): Promise<CreateTutorInteractionResponse> {
  return fetchBackendData<CreateTutorInteractionResponse>(
    "learning",
    "/tutor/interaction",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    }
  );
}

export function getLessonTutorSession(
  request: GetTutorSessionRequest
): Promise<GetTutorSessionResponse> {
  const query = new URLSearchParams({
    learnerUserId: request.learnerUserId,
    lessonId: request.lessonId ?? "",
    topicId: request.topicId ?? ""
  });

  return fetchBackendData<GetTutorSessionResponse>(
    "learning",
    `/tutor/session?${query.toString()}`
  );
}

/**
 * La respuesta por partes.
 *
 * Va aparte de las otras tres porque `fetchBackendData` convierte la
 * respuesta a JSON, y eso obligaria a esperar el texto completo antes de
 * mostrar nada: justo lo que el streaming existe para evitar. Aqui el cuerpo
 * se devuelve tal como llega, para reenviarlo al navegador sin tocarlo.
 *
 * El precio es que se pierde el reintento automatico cuando vence el token.
 * Se comprueba la sesion antes de empezar; si vence a mitad de una respuesta,
 * el flujo se corta y el panel lo muestra como error.
 */
export async function streamLessonTutorInteraction(
  request: CreateTutorInteractionRequest
): Promise<ReadableStream<Uint8Array>> {
  const session = await getServerSession();

  if (!session) {
    throw new BackendRequestError(
      "Se requiere una sesión activa para hablar con el tutor.",
      401,
      "UNAUTHORIZED"
    );
  }

  const response = await fetch(
    `${serverServiceEndpoints.learningServiceUrl}/tutor/interaction/stream`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessToken}`
      },
      body: JSON.stringify(request)
    }
  );

  if (!response.ok || !response.body) {
    let mensaje = `El tutor respondió ${response.status}.`;

    try {
      const cuerpo = (await response.json()) as {
        error?: { message?: string };
      };
      mensaje = cuerpo.error?.message ?? mensaje;
    } catch {
      /* La respuesta no era JSON; se queda el mensaje generico. */
    }

    throw new BackendRequestError(
      mensaje,
      response.status,
      "TUTOR_STREAM_FAILED"
    );
  }

  return response.body;
}
