import type { RouteDefinition } from "@cumbre/api-runtime";
import type { PracticaController } from "./practica-controller.js";

/**
 * El alumno practica; el docente y direccion pueden entrar para verlo
 * funcionar antes de presentarlo. Se usa learning:read porque es lectura del
 * propio avance: quien responde sale del token, no de la peticion.
 */
function quienPuede() {
  return {
    required: true,
    roles: ["student", "teacher", "administrator"],
    scopes: ["learning:read" as const]
  };
}

export function registerPracticaRoutes(
  controller: PracticaController
): RouteDefinition[] {
  return [
    {
      method: "GET",
      path: "/practica/asignaturas",
      handler: controller.asignaturas,
      authorization: quienPuede()
    },
    {
      method: "GET",
      path: "/practica/siguiente",
      handler: controller.siguiente,
      authorization: quienPuede()
    },
    {
      method: "POST",
      path: "/practica/responder",
      handler: controller.responder,
      authorization: quienPuede()
    }
  ];
}
