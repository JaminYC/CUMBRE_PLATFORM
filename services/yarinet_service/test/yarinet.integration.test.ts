import { createServer, type Server } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createYariNetApp } from "../src/app.js";
import { loadYariNetServiceConfig } from "../src/config/env.js";
import type { Logger } from "../src/utils/logger.js";

let server: Server;
let baseUrl: string;

const teacherActor = {
  userId: "teacher-1",
  primaryRole: "teacher" as const,
  roles: ["teacher" as const],
  scopes: ["challenge:manage", "deliberation:read"] as const
};

beforeAll(async () => {
  const config = loadYariNetServiceConfig({
    DATABASE_URL: "postgres://localhost:5432/test",
    NODE_ENV: "test"
  } as NodeJS.ProcessEnv);
  const logger: Logger = { debug() {}, info() {}, warn() {}, error() {} };
  const app = createYariNetApp({
    config,
    logger,
    authResolver: { resolveAccess: async () => teacherActor as never }
  });
  server = createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  baseUrl = `http://127.0.0.1:${port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

describe("yarinet_service health", () => {
  it("responds to GET /health", async () => {
    const res = await fetch(`${baseUrl}/health`);
    expect(res.status).toBe(200);
    const json = (await res.json()) as { data: { status: string } };
    expect(json.data.status).toBe("ok");
  });
});

describe("yarinet_service challenge validation", () => {
  it("returns 400 when POST /challenges body fails validation", async () => {
    // The stubbed actor HAS challenge:manage scope, so auth passes.
    // An empty/invalid body is rejected by AJV validation before any handler or DB access → 400.
    const res = await fetch(`${baseUrl}/challenges`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: "x" })
    });
    expect(res.status).toBe(400);
  });
});
