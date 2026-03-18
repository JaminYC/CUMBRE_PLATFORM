import type { AuthResolver } from "@cumbre/api-runtime";
import { resolvePermissionScopes } from "@cumbre/types";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {
  createJsonHeaders,
  createSilentLogger,
  createTestEnv,
  requestJson,
  startTestServer,
  type StartedTestServer
} from "@cumbre/test-utils";
import { createLearningApp } from "../src/app.js";
import { loadLearningServiceConfig } from "../src/config/env.js";
import { createPrismaClient } from "../src/repositories/prisma-client.js";

const config = loadLearningServiceConfig(
  createTestEnv({
    LEARNING_SERVICE_PORT: "0"
  })
);
const prisma = createPrismaClient(config);
const testAuthResolver: AuthResolver = {
  async resolveAccess(req) {
    if (req.headers.authorization !== "Bearer integration-test-token") {
      return null;
    }

    return {
      sessionId: "session-integration-test",
      userId: "teacher-placeholder",
      primaryRole: "teacher",
      roles: ["teacher", "administrator", "student"],
      scopes: resolvePermissionScopes(["teacher", "administrator", "student"])
    };
  }
};
const app = createLearningApp({
  config,
  logger: createSilentLogger(),
  authResolver: testAuthResolver
});

const authHeaders = {
  ...createJsonHeaders(),
  authorization: "Bearer integration-test-token"
};

let server: StartedTestServer;

describe("learning_service integration", () => {
  beforeAll(async () => {
    server = await startTestServer(app);
  });

  beforeEach(async () => {
    await prisma.classroomMeetingRecord.deleteMany();
    await prisma.studentEnrollmentRecord.deleteMany();
    await prisma.classroomStudentProfileRecord.deleteMany();
    await prisma.classroomRecord.deleteMany();
    await prisma.learningSessionRecord.deleteMany();
    await prisma.masteryStateRecord.deleteMany();
    await prisma.learningPathRecord.deleteMany();
  });

  afterAll(async () => {
    await prisma.classroomMeetingRecord.deleteMany();
    await prisma.studentEnrollmentRecord.deleteMany();
    await prisma.classroomStudentProfileRecord.deleteMany();
    await prisma.classroomRecord.deleteMany();
    await prisma.learningSessionRecord.deleteMany();
    await prisma.masteryStateRecord.deleteMany();
    await prisma.learningPathRecord.deleteMany();
    await prisma.$disconnect();
    await server.close();
    globalThis.__learningPrismaClient = undefined;
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
        service: "learning_service",
        status: "ok"
      }
    });
    expect(response.body.data.timestamp).toEqual(expect.any(String));
  });

  it("creates and persists a learning session", async () => {
    await prisma.learningPathRecord.create({
      data: {
        id: "learning-path-test",
        title: "Integration Learning Path",
        summary: "Learning path fixture for integration tests.",
        status: "active",
        audienceRoles: ["student"],
        topicIds: ["topic-test"],
        skillIds: ["skill-critical-thinking"],
        lessonIds: ["lesson-test"],
        sequencingStrategy: "adaptive"
      }
    });

    const response = await requestJson<{
      success: true;
      data: {
        session: { id: string; learnerUserId: string; status: string };
      };
    }>(server, "/learning/session/start", {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        learnerUserId: "learner-test-user",
        learningPathId: "learning-path-test",
        lessonId: "lesson-test",
        topicId: "topic-test",
        difficultyLevel: "intermediate"
      })
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      success: true,
      data: {
        session: {
          learnerUserId: "learner-test-user",
          status: "active"
        }
      }
    });

    const record = await prisma.learningSessionRecord.findUnique({
      where: { id: response.body.data.session.id }
    });

    expect(record?.learnerUserId).toBe("learner-test-user");
    expect(record?.learningPathId).toBe("learning-path-test");
  });

  it("returns 400 for invalid learning session payloads", async () => {
    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/learning/session/start", {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({})
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

  it("returns 404 when the requested learning path does not exist", async () => {
    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/learning/path?learningPathId=missing-path", {
      headers: {
        authorization: "Bearer integration-test-token"
      }
    });

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Learning path was not found."
      }
    });
  });

  it("returns a teacher overview with learner summaries", async () => {
    await prisma.learningPathRecord.create({
      data: {
        id: "learning-path-teacher",
        title: "Teacher Path",
        summary: "Path used by teacher overview tests.",
        status: "active",
        audienceRoles: ["student"],
        topicIds: ["topic-teacher"],
        skillIds: ["skill-teacher"],
        lessonIds: ["lesson-teacher"],
        sequencingStrategy: "adaptive"
      }
    });
    await prisma.learningSessionRecord.createMany({
      data: [
        {
          id: "session-teacher-1",
          learnerUserId: "learner-alpha",
          learningPathId: "learning-path-teacher",
          lessonId: "lesson-teacher",
          topicId: "topic-teacher",
          status: "active",
          startedAt: new Date(),
          progressPercent: 48,
          difficultyLevel: "intermediate",
          masteryStateIds: []
        },
        {
          id: "session-teacher-2",
          learnerUserId: "learner-beta",
          learningPathId: "learning-path-teacher",
          lessonId: "lesson-teacher",
          topicId: "topic-teacher",
          status: "completed",
          startedAt: new Date(),
          endedAt: new Date(),
          progressPercent: 100,
          difficultyLevel: "intermediate",
          masteryStateIds: []
        }
      ]
    });

    const response = await requestJson<{
      success: true;
      data: {
        overview: {
          totalLearners: number;
          learnerSummaries: Array<{ learnerUserId: string }>;
        };
      };
    }>(server, "/learning/teacher/overview?learningPathId=learning-path-teacher", {
      headers: {
        authorization: "Bearer integration-test-token"
      }
    });

    expect(response.status).toBe(200);
    expect(response.body.data.overview.totalLearners).toBe(2);
    expect(response.body.data.overview.learnerSummaries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ learnerUserId: "learner-alpha" }),
        expect.objectContaining({ learnerUserId: "learner-beta" })
      ])
    );
  });

  it("creates a classroom and lets a student join with the class code", async () => {
    await prisma.learningPathRecord.create({
      data: {
        id: "learning-path-placeholder",
        title: "Placeholder Path",
        summary: "Used for classroom creation.",
        status: "active",
        audienceRoles: ["student"],
        topicIds: ["topic-placeholder"],
        skillIds: ["skill-placeholder"],
        lessonIds: ["lesson-placeholder"]
      }
    });

    const createResponse = await requestJson<{
      success: true;
      data: {
        classroom: { id: string; name: string; classCode: string };
      };
    }>(server, "/classrooms/create", {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        name: "8A Systems",
        gradeLevel: "8",
        subject: "Science",
        teacherId: "teacher-placeholder"
      })
    });

    expect(createResponse.status).toBe(201);
    expect(createResponse.body.data.classroom.classCode).toEqual(expect.any(String));

    const joinResponse = await requestJson<{
      success: true;
      data: {
        classroom: { id: string };
        enrollment: { status: string; classroomId: string };
      };
    }>(server, "/classrooms/join", {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        classCode: createResponse.body.data.classroom.classCode,
        studentId: "student-join-test"
      })
    });

    expect(joinResponse.status).toBe(200);
    expect(joinResponse.body).toMatchObject({
      success: true,
      data: {
        classroom: {
          id: createResponse.body.data.classroom.id
        },
        enrollment: {
          status: "joined",
          classroomId: createResponse.body.data.classroom.id
        }
      }
    });
  });
});
