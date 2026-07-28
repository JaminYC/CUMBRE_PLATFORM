import type { RouteDefinition } from "@cumbre/api-runtime";
import { tutorSessionSchemas } from "@cumbre/schemas";
import type { TutorController } from "../controllers/tutor-controller.js";

/**
 * Los tres roles pueden usar el tutor: el docente y direccion, para verlo.
 *
 * Es una funcion y no una constante porque el enrutador espera arreglos
 * modificables, y compartir el mismo entre cuatro rutas invita a que un dia
 * alguien lo altere en una y se lo cambie a las otras tres sin querer.
 */
function quienPuede() {
  return {
    required: true,
    roles: ["student", "teacher", "administrator"],
    scopes: ["tutor:use" as const]
  };
}

export function registerTutorRoutes(
  controller: TutorController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/tutor/session/start",
      handler: controller.startSession,
      validation: {
        body: tutorSessionSchemas.startTutorSessionRequest
      },
      authorization: quienPuede(),
      successStatusCode: 201
    },
    {
      method: "GET",
      path: "/tutor/session",
      handler: controller.getSession,
      validation: {
        query: tutorSessionSchemas.getTutorSessionRequest
      },
      authorization: quienPuede()
    },
    {
      method: "POST",
      path: "/tutor/interaction",
      handler: controller.respond,
      validation: {
        body: tutorSessionSchemas.createTutorInteractionRequest
      },
      authorization: quienPuede(),
      // Generar una respuesta completa tarda mas que leer de la base. Sin
      // esto se corta a los 10 segundos, que es el limite del servicio.
      requestTimeoutMs: 60_000
    },
    {
      method: "POST",
      path: "/tutor/interaction/stream",
      handler: controller.respondStream,
      validation: {
        body: tutorSessionSchemas.createTutorInteractionRequest
      },
      authorization: quienPuede(),
      // Aqui la conexion sigue abierta mientras el modelo escribe, asi que el
      // margen es mayor todavia.
      requestTimeoutMs: 120_000
    }
  ];
}
