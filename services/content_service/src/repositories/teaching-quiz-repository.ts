import { randomUUID } from "node:crypto";
import type { Prisma, PrismaClient } from "../generated/prisma/index.js";
import { toDomainTeachingQuiz } from "../models/content-mappers.js";

export class TeachingQuizRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: {
    teacherId: string;
    moduleId?: string;
    lessonId?: string;
    title: string;
    summary?: string;
    questions: unknown;
  }) {
    const record = await this.prisma.teachingQuizRecord.create({
      data: {
        id: randomUUID(),
        teacherId: input.teacherId,
        moduleId: input.moduleId,
        lessonId: input.lessonId,
        title: input.title,
        summary: input.summary,
        questions: input.questions as Prisma.InputJsonValue
      }
    });

    return toDomainTeachingQuiz(record);
  }

  async list(filters: { teacherId?: string; moduleId?: string }) {
    const records = await this.prisma.teachingQuizRecord.findMany({
      where: {
        teacherId: filters.teacherId ?? undefined,
        moduleId: filters.moduleId ?? undefined
      },
      orderBy: { createdAt: "desc" }
    });

    return records.map(toDomainTeachingQuiz);
  }
}
