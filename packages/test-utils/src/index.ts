import { once } from "node:events";
import { createServer, type RequestListener } from "node:http";
import type { AddressInfo } from "node:net";

export interface StartedTestServer {
  baseUrl: string;
  close(): Promise<void>;
}

export interface JsonResponse<T> {
  status: number;
  body: T;
}

export function createSilentLogger() {
  return {
    debug: () => undefined,
    info: () => undefined,
    warn: () => undefined,
    error: () => undefined
  };
}

export async function startTestServer(
  handler: RequestListener
): Promise<StartedTestServer> {
  const server = createServer(handler);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to resolve integration test server address.");
  }

  return {
    baseUrl: `http://127.0.0.1:${(address as AddressInfo).port}`,
    close: async () => {
      if (!server.listening) {
        return;
      }

      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    }
  };
}

export async function requestJson<T>(
  server: StartedTestServer,
  path: string,
  init?: RequestInit
): Promise<JsonResponse<T>> {
  const response = await fetch(`${server.baseUrl}${path}`, init);
  const raw = await response.text();
  const body = raw ? (JSON.parse(raw) as T) : (undefined as T);

  return {
    status: response.status,
    body
  };
}

export function createJsonHeaders(
  headers?: HeadersInit
): Record<string, string> {
  const resolvedHeaders: Record<string, string> = {
    "content-type": "application/json"
  };

  if (headers) {
    const normalizedHeaders = new Headers(headers);
    normalizedHeaders.forEach((value, key) => {
      resolvedHeaders[key] = value;
    });
  }

  return {
    ...resolvedHeaders
  };
}

export function createTestEnv(
  overrides: Partial<NodeJS.ProcessEnv> = {}
): NodeJS.ProcessEnv {
  return {
    ...process.env,
    NODE_ENV: "test",
    LOG_LEVEL: "error",
    DATABASE_URL: resolveIntegrationDatabaseUrl(process.env),
    ...overrides
  };
}

export function resolveIntegrationDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env
): string {
  const databaseUrl =
    env.DATABASE_URL ?? "postgres://cumbre:cumbrepass@localhost:5432/cumbre";

  assertSafeIntegrationDatabaseUrl(databaseUrl);
  return databaseUrl;
}

export function assertSafeIntegrationDatabaseUrl(databaseUrl: string): void {
  const parsed = new URL(databaseUrl);
  const isLocalHost =
    parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  const isLocalDatabase = parsed.pathname === "/cumbre";

  if (!isLocalHost || !isLocalDatabase) {
    throw new Error(
      "Integration tests only run against the local cumbre PostgreSQL database."
    );
  }
}
