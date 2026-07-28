import type {
  GetLessonKnowledgeResponse,
  GetTopicKnowledgeResponse
} from "@cumbre/schemas";
import type { KnowledgeGraphInsight } from "@cumbre/types";
import type { Logger } from "../utils/logger.js";

interface Envelope<T> {
  success: boolean;
  data?: T;
  error?: {
    code?: string;
    message?: string;
  };
}

export class ContentKnowledgeClient {
  constructor(
    private readonly baseUrl: string,
    private readonly logger: Logger
  ) {}

  async getLessonKnowledge(
    lessonId: string,
    autorizacion?: string
  ): Promise<KnowledgeGraphInsight | null> {
    const response = await this.request<GetLessonKnowledgeResponse>(
      `/content/knowledge/lesson/${encodeURIComponent(lessonId)}`,
      autorizacion
    );

    return response?.insight ?? null;
  }

  async getTopicKnowledge(
    topicId: string,
    autorizacion?: string
  ): Promise<KnowledgeGraphInsight | null> {
    const response = await this.request<GetTopicKnowledgeResponse>(
      `/content/knowledge/topic/${encodeURIComponent(topicId)}`,
      autorizacion
    );

    return response?.insight ?? null;
  }

  /**
   * `autorizacion` es opcional para no romper a quien ya llamaba sin token,
   * pero sin ella content_service responde 401 y esto devuelve null.
   *
   * Conviene saberlo: las tres llamadas desde learning-service.ts —las de la
   * guia adaptativa— todavia van sin token, asi que hoy reciben null siempre
   * y el enriquecimiento del grafo no llega. Se descubrio al montar el tutor
   * y esta pendiente aparte, porque arreglarlo obliga a llevar el token por
   * dentro del calculo de progreso.
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
        const fallbackMessage = `content_service returned ${response.status} for ${path}`;
        let message = fallbackMessage;

        try {
          const body = (await response.json()) as Envelope<never>;
          message = body.error?.message ?? fallbackMessage;
        } catch {
          message = fallbackMessage;
        }

        this.logger.warn("Knowledge graph request failed", {
          path,
          status: response.status,
          message
        });
        return null;
      }

      const body = (await response.json()) as Envelope<T>;

      if (!body.success || !body.data) {
        this.logger.warn("Knowledge graph request returned empty envelope", {
          path
        });
        return null;
      }

      return body.data;
    } catch (error) {
      this.logger.warn("Knowledge graph request could not reach content_service", {
        path,
        message: error instanceof Error ? error.message : "unknown error"
      });
      return null;
    }
  }
}
