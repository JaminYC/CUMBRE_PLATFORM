import type { RequestContext } from "@cumbre/api-runtime";
import type {
  CreateTutorInteractionRequest,
  GetTutorSessionRequest,
  StartTutorSessionRequest
} from "@cumbre/schemas";
import type { TutorService } from "../services/tutor-service.js";

export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  /* La cabecera Authorization se reenvia a content_service tal como llego.
     Sus rutas exigen token, y sin el devuelven 401: el tutor terminaba
     diciendo que no encontraba el tema. Reenviar el del estudiante, en vez
     de usar uno de servicio, mantiene el limite de lo que esa persona puede
     ver. */

  startSession = async ({ body, req }: RequestContext): Promise<unknown> => {
    return this.tutorService.startSession(
      body as StartTutorSessionRequest,
      req.headers.authorization
    );
  };

  getSession = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.tutorService.getSession(
      validatedQuery as unknown as GetTutorSessionRequest
    );
  };

  respond = async ({ body, req }: RequestContext): Promise<unknown> => {
    return this.tutorService.respond(
      body as CreateTutorInteractionRequest,
      req.headers.authorization
    );
  };

  /**
   * La respuesta por partes.
   *
   * Escribe directo sobre `res` y lo cierra; el enrutador ya contempla ese
   * caso y no vuelve a tocar la respuesta cuando el manejador la termino.
   *
   * El primer trozo se pide ANTES de mandar la cabecera. Suena raro, pero es
   * lo que permite que un error de validacion siga siendo un 400 de verdad:
   * una vez enviada la cabecera 200 ya no se puede cambiar el estado, y el
   * fallo llegaria disfrazado de exito con un error escondido en el cuerpo.
   * El generador tampoco ejecuta nada hasta que se le pide el primer valor,
   * asi que pedirlo es exactamente lo que dispara las comprobaciones.
   */
  respondStream = async ({ body, req, res }: RequestContext): Promise<void> => {
    const iterador = this.tutorService
      .respondStream(
        body as CreateTutorInteractionRequest,
        req.headers.authorization
      )
      [Symbol.asyncIterator]();

    const primero = await iterador.next();

    res.writeHead(200, {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      // Sin esto, un proxy intermedio puede guardar la respuesta entera y
      // entregarla de golpe al final, que es justo lo contrario del streaming.
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no"
    });

    try {
      if (!primero.done) {
        res.write(`${JSON.stringify(primero.value)}\n`);

        for (let siguiente = await iterador.next(); !siguiente.done; siguiente = await iterador.next()) {
          res.write(`${JSON.stringify(siguiente.value)}\n`);
        }
      }
    } catch (error) {
      // A estas alturas la cabecera ya salio y el estado no se puede cambiar,
      // asi que el fallo viaja como un evento mas del flujo. El cliente lo
      // reconoce por el tipo.
      res.write(
        `${JSON.stringify({
          type: "error",
          payload: {
            message:
              error instanceof Error
                ? error.message
                : "La respuesta del tutor se interrumpio."
          }
        })}\n`
      );
    }

    res.end();
  };
}
