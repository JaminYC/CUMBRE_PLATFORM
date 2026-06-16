import type { LogLevel } from "../utils/logger.js";

export interface YariNetServiceConfig {
  serviceName: "yarinet_service";
  port: number;
  nodeEnv: string;
  logLevel: LogLevel;
  databaseUrl: string;
  authServiceUrl: string;
  learningServiceUrl: string;
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
    throw new Error("DATABASE_URL is required for yarinet_service.");
  }
  return raw;
}

function resolveAuthServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3001";
}

function resolveLearningServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3002";
}

function resolvePositiveInteger(raw: string | undefined, fallback: number) {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadYariNetServiceConfig(
  env: NodeJS.ProcessEnv = process.env
): YariNetServiceConfig {
  return {
    serviceName: "yarinet_service",
    port: resolvePort(env.YARINET_SERVICE_PORT ?? env.PORT, 3004),
    nodeEnv: env.NODE_ENV ?? "development",
    logLevel: resolveLogLevel(env.LOG_LEVEL),
    databaseUrl: resolveDatabaseUrl(env.DATABASE_URL),
    authServiceUrl: resolveAuthServiceUrl(env.AUTH_SERVICE_URL),
    learningServiceUrl: resolveLearningServiceUrl(env.LEARNING_SERVICE_URL),
    requestTimeoutMs: resolvePositiveInteger(env.REQUEST_TIMEOUT_MS, 10000)
  };
}
