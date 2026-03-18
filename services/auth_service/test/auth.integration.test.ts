import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {
  createJsonHeaders,
  createSilentLogger,
  createTestEnv,
  requestJson,
  startTestServer,
  type StartedTestServer
} from "@cumbre/test-utils";
import { createAuthApp } from "../src/app.js";
import { loadAuthServiceConfig } from "../src/config/env.js";
import { createPrismaClient } from "../src/repositories/prisma-client.js";
import { hashCredential } from "../src/utils/credentials.js";

const config = loadAuthServiceConfig(
  createTestEnv({
    AUTH_SERVICE_PORT: "0"
  })
);
const prisma = createPrismaClient(config);
const app = createAuthApp({
  config,
  logger: createSilentLogger()
});

let server: StartedTestServer;

describe("auth_service integration", () => {
  beforeAll(async () => {
    server = await startTestServer(app);
  });

  beforeEach(async () => {
    await prisma.authSession.deleteMany();
    await prisma.authUser.deleteMany();
  });

  afterAll(async () => {
    await prisma.authSession.deleteMany();
    await prisma.authUser.deleteMany();
    await prisma.$disconnect();
    await server.close();
    globalThis.__authPrismaClient = undefined;
  });

  it("serves the health endpoint after startup", async () => {
    const response = await requestJson<{
      success: true;
      data: { service: string; status: string; timestamp: string };
    }>(server, "/health");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      data: {
        service: "auth_service",
        status: "ok"
      }
    });
    expect(response.body.data.timestamp).toEqual(expect.any(String));
  });

  it("creates and persists a user through signup", async () => {
    const email = `student-${Date.now()}@example.com`;
    const response = await requestJson<{
      success: true;
      data: {
        user: { id: string; email: string; displayName: string };
        accessToken: string;
      };
    }>(server, "/auth/signup", {
      method: "POST",
      headers: createJsonHeaders(),
      body: JSON.stringify({
        email,
        credential: "placeholder",
        displayName: "Student Test",
        requestedRole: "student"
      })
    });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.user.email).toBe(email);
    expect(response.body.data.accessToken).toEqual(expect.any(String));

    const record = await prisma.authUser.findUnique({
      where: { email }
    });

    expect(record?.displayName).toBe("Student Test");
  });

  it("returns the current authenticated session from the bearer token", async () => {
    const signup = await requestJson<{
      success: true;
      data: {
        user: { id: string };
        accessToken: string;
      };
    }>(server, "/auth/signup", {
      method: "POST",
      headers: createJsonHeaders(),
      body: JSON.stringify({
        email: `session-${Date.now()}@example.com`,
        credential: "placeholder",
        displayName: "Session User",
        requestedRole: "student"
      })
    });

    const response = await requestJson<{
      success: true;
      data: {
        session: { userId: string };
        user: { id: string; primaryRole: string };
      };
    }>(server, "/auth/session", {
      headers: {
        authorization: `Bearer ${signup.body.data.accessToken}`
      }
    });

    expect(response.status).toBe(200);
    expect(response.body.data.session.userId).toBe(signup.body.data.user.id);
    expect(response.body.data.user.primaryRole).toBe("student");
  });

  it("returns 400 for invalid signup payloads", async () => {
    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/auth/signup", {
      method: "POST",
      headers: createJsonHeaders(),
      body: JSON.stringify({
        email: "student@example.com"
      })
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid body payload."
      }
    });
  });

  it("returns 404 when the requested auth user does not exist", async () => {
    const signup = await requestJson<{
      success: true;
      data: {
        accessToken: string;
      };
    }>(server, "/auth/signup", {
      method: "POST",
      headers: createJsonHeaders(),
      body: JSON.stringify({
        email: `me-${Date.now()}@example.com`,
        credential: "placeholder",
        displayName: "Me User",
        requestedRole: "student"
      })
    });

    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/auth/me?userId=missing-user", {
      headers: {
        authorization: `Bearer ${signup.body.data.accessToken}`
      }
    });

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "No auth user record was found."
      }
    });
  });

  it("returns 409 when trying to sign up with an existing email", async () => {
    await prisma.authUser.create({
      data: {
        id: "auth-conflict-user",
        displayName: "Existing User",
        email: "existing@example.com",
        primaryRole: "student",
        roles: ["student"],
        status: "active",
        locale: "en-US",
        preferredLanguage: "en",
        timezone: "America/Lima",
        credentialHash: hashCredential("placeholder")
      }
    });

    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/auth/signup", {
      method: "POST",
      headers: createJsonHeaders(),
      body: JSON.stringify({
        email: "existing@example.com",
        credential: "placeholder",
        displayName: "Duplicate User"
      })
    });

    expect(response.status).toBe(409);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "CONFLICT",
        message: "A user with this email already exists."
      }
    });
  });
});
