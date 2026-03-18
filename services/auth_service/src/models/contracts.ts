export type {
  User,
  UserProfile,
  UserRole,
  StudentProfile
} from "@cumbre/types";
export type {
  ApiErrorResponse,
  AuthLoginRequest,
  AuthLoginResponse,
  AuthSignupRequest,
  AuthSignupResponse,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  RefreshSessionRequest,
  RefreshSessionResponse,
  RevokeSessionRequest,
  RevokeSessionResponse
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
