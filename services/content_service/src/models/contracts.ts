export type { ContentItem, Lesson, Topic } from "@cumbre/types";
export type {
  GetTopicRequest,
  GetTopicResponse,
  ListLessonsRequest,
  ListLessonsResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  SearchContentRequest,
  SearchContentResponse
} from "@cumbre/schemas";

export interface ServiceHealthResponse {
  service: string;
  status: "ok";
  timestamp: string;
}

export interface ServiceReadinessResponse {
  service: string;
  status: "ready" | "degraded";
  timestamp: string;
  dependencies: {
    database: "ready" | "unavailable";
  };
}
