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

  async getLessonKnowledge(lessonId: string): Promise<KnowledgeGraphInsight | null> {
    const response = await this.request<GetLessonKnowledgeResponse>(
      `/content/knowledge/lesson/${encodeURIComponent(lessonId)}`
    );

    return response?.insight ?? null;
  }

  async getTopicKnowledge(topicId: string): Promise<KnowledgeGraphInsight | null> {
    const response = await this.request<GetTopicKnowledgeResponse>(
      `/content/knowledge/topic/${encodeURIComponent(topicId)}`
    );

    return response?.insight ?? null;
  }

  private async request<T>(path: string): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
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
