export type {
  LearningPath,
  LearningSession,
  MasteryState,
  Recommendation
} from "@cumbre/types";
export type {
  CreateLearningSessionRequest,
  CreateLearningSessionResponse,
  GetLearningPathRequest,
  GetLearningPathResponse,
  GetLearningProgressRequest,
  GetLearningProgressResponse,
  UpdateLearningSessionRequest,
  UpdateLearningSessionResponse
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
