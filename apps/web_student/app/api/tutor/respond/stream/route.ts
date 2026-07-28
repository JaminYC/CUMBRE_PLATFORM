import { BackendRequestError } from "@/lib/backend-http";
import { streamLessonTutorInteraction } from "@/services/server/tutor-server";
import type { CreateTutorInteractionRequest } from "@cumbre/schemas";

/**
 * Reenvia al navegador el flujo que produce learning_service.
 *
 * Antes esta ruta recibia eventos sueltos del motor —que corria aqui mismo— y
 * los volvia a serializar uno a uno. Ahora el servicio ya manda NDJSON hecho,
 * asi que el cuerpo se devuelve tal cual: menos codigo y, sobre todo, sin
 * acumular la respuesta en memoria antes de soltarla.
 */
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateTutorInteractionRequest;
    const stream = await streamLessonTutorInteraction(payload);

    return new Response(stream, {
      headers: {
        "content-type": "application/x-ndjson; charset=utf-8",
        "cache-control": "no-cache, no-transform"
      }
    });
  } catch (error) {
    const status =
      error instanceof BackendRequestError ? error.statusCode : 500;
    const message =
      error instanceof Error
        ? error.message
        : "No se pudo hablar con el tutor.";

    return Response.json(
      {
        success: false,
        error: {
          code: "TUTOR_STREAM_ERROR",
          message
        }
      },
      { status }
    );
  }
}
