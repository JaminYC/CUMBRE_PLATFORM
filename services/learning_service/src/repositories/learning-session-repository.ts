import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import type {
  CreateLearningSessionRequest,
  UpdateLearningSessionRequest
} from "@cumbre/schemas";
import { toDomainLearningSession } from "../models/learning-mappers.js";

export class LearningSessionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(request: CreateLearningSessionRequest) {
    const record = await this.prisma.learningSessionRecord.create({
      data: {
        id: randomUUID(),
        learnerUserId: request.learnerUserId,
        learningPathId: request.learningPathId,
        lessonId: request.lessonId,
        topicId: request.topicId,
        status: "active",
        startedAt: new Date(),
        progressPercent: 0,
        difficultyLevel: request.difficultyLevel ?? "intermediate"
      }
    });

    return toDomainLearningSession(record);
  }

  async update(request: UpdateLearningSessionRequest) {
    const existing = await this.prisma.learningSessionRecord.findUnique({
      where: { id: request.sessionId }
    });

    if (!existing) {
      return null;
    }

    const record = await this.prisma.learningSessionRecord.update({
      where: { id: request.sessionId },
      data: {
        status: request.status ?? existing.status,
        progressPercent: request.progressPercent ?? existing.progressPercent,
        difficultyLevel: request.difficultyLevel ?? existing.difficultyLevel,
        masteryStateIds:
          request.masteryStates?.map((state) => state.id) ?? existing.masteryStateIds
      }
    });

    return toDomainLearningSession(record);
  }

  async complete(sessionId: string, completedAt?: string) {
    const existing = await this.prisma.learningSessionRecord.findUnique({
      where: { id: sessionId }
    });

    if (!existing) {
      return null;
    }

    const record = await this.prisma.learningSessionRecord.update({
      where: { id: sessionId },
      data: {
        status: "completed",
        progressPercent: 100,
        endedAt: completedAt ? new Date(completedAt) : new Date()
      }
    });

    return toDomainLearningSession(record);
  }

  async listByLearner(learnerUserId: string, learningPathId?: string) {
    const records = await this.prisma.learningSessionRecord.findMany({
      where: {
        learnerUserId,
        learningPathId: learningPathId ?? undefined
      },
      orderBy: {
        startedAt: "desc"
      }
    });

    return records.map(toDomainLearningSession);
  }

  async listLearnerIds(learningPathId?: string, limit?: number) {
    const records = await this.prisma.learningSessionRecord.findMany({
      where: {
        learningPathId: learningPathId ?? undefined
      },
      distinct: ["learnerUserId"],
      orderBy: {
        learnerUserId: "asc"
      },
      select: {
        learnerUserId: true
      },
      take: limit ?? undefined
    });

    return records.map((record) => record.learnerUserId);
  }
}
