import type { AuthResolver } from "@cumbre/api-runtime";
import { resolvePermissionScopes } from "@cumbre/types";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {
  createSilentLogger,
  createTestEnv,
  requestJson,
  startTestServer,
  type StartedTestServer
} from "@cumbre/test-utils";
import { createContentApp } from "../src/app.js";
import { loadContentServiceConfig } from "../src/config/env.js";
import { createPrismaClient } from "../src/repositories/prisma-client.js";

const config = loadContentServiceConfig(
  createTestEnv({
    CONTENT_SERVICE_PORT: "0"
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
      userId: "admin-placeholder",
      primaryRole: "administrator",
      roles: ["administrator", "teacher", "student"],
      scopes: resolvePermissionScopes(["administrator", "teacher", "student"])
    };
  }
};
const app = createContentApp({
  config,
  logger: createSilentLogger(),
  authResolver: testAuthResolver
});

const authHeaders = {
  authorization: "Bearer integration-test-token"
};

let server: StartedTestServer;

describe("content_service integration", () => {
  beforeAll(async () => {
    server = await startTestServer(app);
  });

  beforeEach(async () => {
    await prisma.studentAttemptRecord.deleteMany();
    await prisma.teachingQuizRecord.deleteMany();
    await prisma.teachingModuleRecord.deleteMany();
    await prisma.teachingMaterialRecord.deleteMany();
    await prisma.knowledgeEdgeRecord.deleteMany();
    await prisma.knowledgeNodeRecord.deleteMany();
    await prisma.lessonRecord.deleteMany();
    await prisma.topicRecord.deleteMany();
    await prisma.contentItemRecord.deleteMany();
  });

  afterAll(async () => {
    await prisma.studentAttemptRecord.deleteMany();
    await prisma.teachingQuizRecord.deleteMany();
    await prisma.teachingModuleRecord.deleteMany();
    await prisma.teachingMaterialRecord.deleteMany();
    await prisma.knowledgeEdgeRecord.deleteMany();
    await prisma.knowledgeNodeRecord.deleteMany();
    await prisma.lessonRecord.deleteMany();
    await prisma.topicRecord.deleteMany();
    await prisma.contentItemRecord.deleteMany();
    await prisma.$disconnect();
    await server.close();
    globalThis.__contentPrismaClient = undefined;
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
        service: "content_service",
        status: "ok"
      }
    });
    expect(response.body.data.timestamp).toEqual(expect.any(String));
  });

  it("loads a persisted topic by id", async () => {
    await prisma.topicRecord.create({
      data: {
        id: "topic-integration",
        title: "Integration Topic",
        summary: "Topic loaded from PostgreSQL during integration tests.",
        skillIds: ["skill-critical-thinking"]
      }
    });

    const response = await requestJson<{
      success: true;
      data: { topic: { id: string; title: string } };
    }>(server, "/content/topic/topic-integration", {
      headers: authHeaders
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      data: {
        topic: {
          id: "topic-integration",
          title: "Integration Topic"
        }
      }
    });
  });

  it("returns graph-aware lesson insight for a persisted lesson", async () => {
    await prisma.topicRecord.create({
      data: {
        id: "topic-systems",
        title: "Systems",
        summary: "Topic under graph test.",
        skillIds: ["skill-systems"]
      }
    });
    await prisma.lessonRecord.create({
      data: {
        id: "lesson-systems",
        title: "Systems lesson",
        summary: "Lesson under graph test.",
        lessonType: "lesson",
        topicId: "topic-systems",
        skillIds: ["skill-systems"],
        learningObjectiveIds: ["objective-systems"]
      }
    });
    await prisma.knowledgeNodeRecord.createMany({
      data: [
        {
          id: "knowledge-topic-systems",
          nodeType: "topic",
          title: "Systems",
          sourceEntityType: "topic",
          sourceEntityId: "topic-systems"
        },
        {
          id: "knowledge-lesson-systems",
          nodeType: "lesson",
          title: "Systems lesson",
          sourceEntityType: "lesson",
          sourceEntityId: "lesson-systems"
        },
        {
          id: "concept-observation",
          nodeType: "concept",
          title: "Observation",
          sourceEntityType: "topic",
          sourceEntityId: "topic-systems"
        },
        {
          id: "concept-feedback",
          nodeType: "concept",
          title: "Feedback",
          sourceEntityType: "topic",
          sourceEntityId: "topic-systems"
        }
      ]
    });
    await prisma.knowledgeEdgeRecord.createMany({
      data: [
        {
          id: "edge-observation-prerequisite",
          sourceNodeId: "concept-observation",
          targetNodeId: "concept-feedback",
          edgeType: "prerequisite_of",
          directed: true
        },
        {
          id: "edge-lesson-feedback",
          sourceNodeId: "knowledge-lesson-systems",
          targetNodeId: "concept-feedback",
          edgeType: "reinforces",
          directed: true
        }
      ]
    });

    const response = await requestJson<{
      success: true;
      data: {
        insight: {
          anchorEntityType: string;
          prerequisiteConcepts: Array<{ title: string }>;
          recommendedReviewConcept?: { title: string };
        };
      };
    }>(server, "/content/knowledge/lesson/lesson-systems", {
      headers: authHeaders
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      data: {
        insight: {
          anchorEntityType: "lesson",
          prerequisiteConcepts: [{ title: "Observation" }],
          recommendedReviewConcept: { title: "Observation" }
        }
      }
    });
  });

  it("returns 400 for invalid content search requests", async () => {
    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/content/search", {
      headers: authHeaders
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid query payload."
      }
    });
  });

  it("returns 404 when the requested topic does not exist", async () => {
    const response = await requestJson<{
      success: false;
      error: { code: string; message: string };
    }>(server, "/content/topic/missing-topic", {
      headers: authHeaders
    });

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Topic was not found."
      }
    });
  });

  it("returns an admin overview with graph and content counts", async () => {
    await prisma.topicRecord.create({
      data: {
        id: "topic-admin",
        title: "Admin Topic",
        summary: "Operational topic for admin overview.",
        skillIds: ["skill-admin"]
      }
    });
    await prisma.lessonRecord.create({
      data: {
        id: "lesson-admin",
        title: "Admin Lesson",
        summary: "Operational lesson for admin overview.",
        lessonType: "lesson",
        topicId: "topic-admin",
        skillIds: ["skill-admin"],
        learningObjectiveIds: ["objective-admin"]
      }
    });
    await prisma.knowledgeNodeRecord.createMany({
      data: [
        {
          id: "knowledge-topic-admin",
          nodeType: "topic",
          title: "Admin Topic",
          sourceEntityType: "topic",
          sourceEntityId: "topic-admin"
        },
        {
          id: "knowledge-lesson-admin",
          nodeType: "lesson",
          title: "Admin Lesson",
          sourceEntityType: "lesson",
          sourceEntityId: "lesson-admin"
        },
        {
          id: "concept-admin",
          nodeType: "concept",
          title: "Admin Concept",
          sourceEntityType: "topic",
          sourceEntityId: "topic-admin"
        }
      ]
    });
    await prisma.knowledgeEdgeRecord.create({
      data: {
        id: "edge-admin-coverage",
        sourceNodeId: "knowledge-lesson-admin",
        targetNodeId: "concept-admin",
        edgeType: "reinforces",
        directed: true
      }
    });

    const response = await requestJson<{
      success: true;
      data: {
        overview: {
          totalTopics: number;
          totalLessons: number;
          totalConcepts: number;
        };
      };
    }>(server, "/content/admin/overview", {
      headers: authHeaders
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      data: {
        overview: {
          totalTopics: 1,
          totalLessons: 1,
          totalConcepts: 1
        }
      }
    });
  });

  it("uploads material, generates a module, generates a quiz, and stores an exam scan attempt", async () => {
    await prisma.topicRecord.create({
      data: {
        id: "topic-material",
        title: "Systems Thinking",
        summary: "Topic for material ingestion tests.",
        skillIds: ["skill-systems"]
      }
    });
    await prisma.lessonRecord.create({
      data: {
        id: "lesson-material",
        title: "Systems foundations",
        summary: "Lesson for module generation tests.",
        lessonType: "lesson",
        topicId: "topic-material",
        skillIds: ["skill-systems"],
        learningObjectiveIds: ["objective-systems"]
      }
    });
    await prisma.knowledgeNodeRecord.create({
      data: {
        id: "concept-systems-thinking",
        nodeType: "concept",
        title: "systems thinking",
        summary: "Concept used for matching.",
        sourceEntityType: "topic",
        sourceEntityId: "topic-material"
      }
    });

    const uploadResponse = await requestJson<{
      success: true;
      data: {
        material: { id: string; status: string };
        proposal: { conceptMatches: Array<{ id: string }> };
      };
    }>(server, "/teacher/materials/upload", {
      method: "POST",
      headers: {
        ...authHeaders,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        teacherId: "admin-placeholder",
        fileName: "systems.txt",
        mimeType: "text/plain",
        textContent: "Systems thinking foundations with practice exercises."
      })
    });

    expect(uploadResponse.status).toBe(201);
    expect(uploadResponse.body.data.material.status).toBe("parsed");

    const moduleResponse = await requestJson<{
      success: true;
      data: {
        proposal: { module: { id: string; title: string } };
      };
    }>(server, "/ai/modules/generate", {
      method: "POST",
      headers: {
        ...authHeaders,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        teacherId: "admin-placeholder",
        materialId: uploadResponse.body.data.material.id,
        approve: true
      })
    });

    expect(moduleResponse.status).toBe(200);
    expect(moduleResponse.body.data.proposal.module.title).toContain("module");

    const quizResponse = await requestJson<{
      success: true;
      data: {
        proposal: { quiz: { id: string; questions: unknown[] } };
      };
    }>(server, "/ai/quiz/generate", {
      method: "POST",
      headers: {
        ...authHeaders,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        teacherId: "admin-placeholder",
        moduleId: moduleResponse.body.data.proposal.module.id,
        title: "Systems checkpoint"
      })
    });

    expect(quizResponse.status).toBe(200);
    expect(quizResponse.body.data.proposal.quiz.questions).toHaveLength(10);

    const attemptResponse = await requestJson<{
      success: true;
      data: {
        attempt: { id: string; answers: Array<{ questionId: string }> };
      };
    }>(server, "/teacher/exams/upload-scan", {
      method: "POST",
      headers: {
        ...authHeaders,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        teacherId: "admin-placeholder",
        studentId: "student-scan",
        quizId: quizResponse.body.data.proposal.quiz.id,
        fileName: "scan.txt",
        mimeType: "text/plain",
        answerText: "q1: answer A\nq2: answer B"
      })
    });

    expect(attemptResponse.status).toBe(200);
    expect(attemptResponse.body.data.attempt.answers).toHaveLength(2);
  });
});
