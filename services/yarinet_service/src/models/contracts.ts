export interface ServiceHealthResponse {
  service: string;
  status: "ok";
  timestamp: string;
}

export interface ServiceReadinessResponse {
  service: string;
  status: "ready";
  timestamp: string;
  dependencies: {
    database: "ready";
  };
}
