import type { LogLevel } from "../utils/logger.js";

export interface LearningServiceConfig {
  serviceName: "learning_service";
  port: number;
  nodeEnv: string;
  logLevel: LogLevel;
  databaseUrl: string;
  contentServiceUrl: string;
  authServiceUrl: string;
  requestTimeoutMs: number;
}

function resolvePort(raw: string | undefined, fallback: number): number {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function resolveLogLevel(raw: string | undefined): LogLevel {
  const normalized = raw?.toLowerCase();
  if (
    normalized === "debug" ||
    normalized === "info" ||
    normalized === "warn" ||
    normalized === "error"
  ) {
    return normalized;
  }

  return "info";
}

function resolveDatabaseUrl(raw: string | undefined): string {
  if (!raw) {
    throw new Error("DATABASE_URL is required for learning_service.");
  }

  return raw;
}

function resolveContentServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3003";
}

function resolveAuthServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3001";
}

function resolvePositiveInteger(raw: string | undefined, fallback: number) {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadLearningServiceConfig(
  env: NodeJS.ProcessEnv = process.env
): LearningServiceConfig {
  return {
    serviceName: "learning_service",
    port: resolvePort(env.LEARNING_SERVICE_PORT ?? env.PORT, 3002),
    nodeEnv: env.NODE_ENV ?? "development",
    logLevel: resolveLogLevel(env.LOG_LEVEL),
    databaseUrl: resolveDatabaseUrl(env.DATABASE_URL),
    contentServiceUrl: resolveContentServiceUrl(env.CONTENT_SERVICE_URL),
    authServiceUrl: resolveAuthServiceUrl(env.AUTH_SERVICE_URL),
    requestTimeoutMs: resolvePositiveInteger(env.REQUEST_TIMEOUT_MS, 10000)
  };
}
