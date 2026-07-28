import { NotFoundError } from "@cumbre/api-runtime";
import type {
  ContentItem,
  Lesson,
  Topic
} from "@cumbre/types";
import type {
  GetTopicResponse,
  ListLessonsResponse,
  SearchContentResponse
} from "@cumbre/schemas";
import type { Logger } from "../utils/logger.js";

interface Envelope<T> {
  success: boolean;
  data?: T;
  error?: {
    code?: string;
    message?: string;
  };
}

/**
 * Lo que el tutor necesita de content_service.
 *
 * Va aparte de ContentKnowledgeClient a proposito, porque no se comportan
 * igual ante un fallo. Aquel devuelve null y sigue: el grafo de conocimiento
 * es un extra, y sin el la respuesta sale igual, solo que menos rica.
 *
 * Aqui no. El tema y la leccion son el suelo sobre el que se apoya todo lo
 * que el tutor dice. Si fallan y devolvemos null, el tutor no se calla: sigue
 * hablando sin saber de que. Vale mil veces mas un error visible que una
 * respuesta segura de si misma y sin fundamento.
 *
 * Los que si admiten quedarse vacios —lecciones relacionadas y busqueda— son
 * material de apoyo, y estan marcados como tales.
 */
export class ContentClient {
  constructor(
    private readonly baseUrl: string,
    private readonly logger: Logger
  ) {}

  /** Obligatorio: sin tema no hay contexto. */
  async getTopic(topicId: string, autorizacion?: string): Promise<Topic> {
    const data = await this.request<GetTopicResponse>(
      `/content/topic/${encodeURIComponent(topicId)}`,
      autorizacion
    );

    if (!data?.topic) {
      throw new NotFoundError("El tema del tutor no fue encontrado.");
    }

    return data.topic;
  }

  /**
   * Obligatorio.
   *
   * content_service no expone una ruta por leccion suelta, asi que se listan
   * las del tema y se busca dentro. Es lo mismo que hacia el portal del
   * alumno antes de mover esto aqui.
   */
  async getLesson(
    topicId: string,
    lessonId: string,
    autorizacion?: string
  ): Promise<Lesson> {
    const lecciones = await this.listLessons(topicId, autorizacion);
    const lesson = lecciones.find((item) => item.id === lessonId);

    if (!lesson) {
      throw new NotFoundError("La leccion del tutor no fue encontrada.");
    }

    return lesson;
  }

  /** De apoyo: si falla, el tutor responde sin las lecciones vecinas. */
  async listLessons(topicId: string, autorizacion?: string): Promise<Lesson[]> {
    const data = await this.request<ListLessonsResponse>(
      `/content/lessons?topicId=${encodeURIComponent(topicId)}`,
      autorizacion
    );

    return data?.items ?? [];
  }

  /** De apoyo: si falla, el tutor responde sin fragmentos recuperados. */
  async search(
    input: {
      query: string;
      topicId?: string;
      limit?: number;
    },
    autorizacion?: string
  ): Promise<ContentItem[]> {
    const query = new URLSearchParams({ query: input.query });

    if (input.topicId) {
      query.set("topicId", input.topicId);
    }

    if (input.limit !== undefined) {
      query.set("limit", String(input.limit));
    }

    const data = await this.request<SearchContentResponse>(
      `/content/search?${query.toString()}`,
      autorizacion
    );

    return data?.items ?? [];
  }

  /**
   * Reenvia el token de quien pregunta.
   *
   * Las rutas de content_service exigen autenticacion. Sin esta cabecera
   * responden 401, el cliente devuelve null y el tutor termina diciendo que
   * no encuentra el tema —que fue exactamente el sintoma la primera vez que
   * se probo esto.
   *
   * Se reenvia el token del estudiante y no uno de servicio a proposito: asi
   * el tutor solo alcanza el contenido que esa persona ya podia ver.
   */
  private async request<T>(
    path: string,
    autorizacion?: string
  ): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(autorizacion ? { Authorization: autorizacion } : {})
        }
      });

      if (!response.ok) {
        let message = `content_service respondio ${response.status} en ${path}`;

        try {
          const body = (await response.json()) as Envelope<never>;
          message = body.error?.message ?? message;
        } catch {
          /* El cuerpo no era JSON; se queda el mensaje generico. */
        }

        this.logger.warn("Peticion a content_service fallida", {
          path,
          status: response.status,
          message
        });
        return null;
      }

      const body = (await response.json()) as Envelope<T>;

      if (!body.success || !body.data) {
        this.logger.warn("content_service devolvio un sobre vacio", { path });
        return null;
      }

      return body.data;
    } catch (error) {
      this.logger.warn("No se pudo alcanzar content_service", {
        path,
        message: error instanceof Error ? error.message : "error desconocido"
      });
      return null;
    }
  }
}
