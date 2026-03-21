import type { LogLevel } from "../utils/logger.js";

export interface AuthServiceConfig {
  serviceName: "auth_service";
  port: number;
  nodeEnv: string;
  logLevel: LogLevel;
  databaseUrl: string;
  requestTimeoutMs: number;
  authAccessTokenTtlMinutes: number;
  authRefreshTokenTtlDays: number;
  googleClientId: string;
  googleClientSecret: string;
  googleCallbackUrl: string;
  portalUrl: string;
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
    throw new Error("DATABASE_URL is required for auth_service.");
  }

  return raw;
}

function resolvePositiveInteger(raw: string | undefined, fallback: number) {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadAuthServiceConfig(
  env: NodeJS.ProcessEnv = process.env
): AuthServiceConfig {
  return {
    serviceName: "auth_service",
    port: resolvePort(env.AUTH_SERVICE_PORT ?? env.PORT, 3001),
    nodeEnv: env.NODE_ENV ?? "development",
    logLevel: resolveLogLevel(env.LOG_LEVEL),
    databaseUrl: resolveDatabaseUrl(env.DATABASE_URL),
    requestTimeoutMs: resolvePositiveInteger(env.REQUEST_TIMEOUT_MS, 10000),
    authAccessTokenTtlMinutes: resolvePositiveInteger(
      env.AUTH_ACCESS_TOKEN_TTL_MINUTES,
      30
    ),
    authRefreshTokenTtlDays: resolvePositiveInteger(
      env.AUTH_REFRESH_TOKEN_TTL_DAYS,
      14
    ),
    googleClientId: env.GOOGLE_CLIENT_ID ?? "",
    googleClientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
    googleCallbackUrl:
      env.GOOGLE_CALLBACK_URL ?? "http://localhost:3001/auth/google/callback",
    portalUrl: env.PORTAL_URL ?? "http://localhost:3000"
  };
}
