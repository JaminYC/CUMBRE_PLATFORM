import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import { toDomainLesson } from "../models/content-mappers.js";

export class LessonRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string) {
    const record = await this.prisma.lessonRecord.findUnique({
      where: { id }
    });

    return record ? toDomainLesson(record) : null;
  }

  async list(filters: { topicId?: string; skillId?: string }) {
    const records = await this.prisma.lessonRecord.findMany({
      where: {
        topicId: filters.topicId ?? undefined,
        skillIds: filters.skillId ? { has: filters.skillId } : undefined
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainLesson);
  }

  async create(input: {
    title: string;
    summary?: string;
    lessonType: string;
    topicId: string;
    skillIds?: string[];
    learningObjectiveIds?: string[];
    prerequisiteLessonIds?: string[];
    estimatedDurationMinutes?: number;
    difficultyLevel?: string;
    resourceUrls?: string[];
  }) {
    const record = await this.prisma.lessonRecord.create({
      data: {
        id: randomUUID(),
        title: input.title,
        summary: input.summary,
        lessonType: input.lessonType,
        topicId: input.topicId,
        skillIds: input.skillIds ?? [],
        learningObjectiveIds: input.learningObjectiveIds ?? [],
        prerequisiteLessonIds: input.prerequisiteLessonIds ?? [],
        estimatedDurationMinutes: input.estimatedDurationMinutes,
        difficultyLevel: input.difficultyLevel,
        resourceUrls: input.resourceUrls ?? []
      }
    });

    return toDomainLesson(record);
  }

  async update(
    id: string,
    input: {
      title: string;
      summary?: string;
      lessonType: string;
      topicId: string;
      skillIds?: string[];
      learningObjectiveIds?: string[];
      prerequisiteLessonIds?: string[];
      estimatedDurationMinutes?: number;
      difficultyLevel?: string;
      resourceUrls?: string[];
    }
  ) {
    const record = await this.prisma.lessonRecord.update({
      where: { id },
      data: {
        title: input.title,
        summary: input.summary,
        lessonType: input.lessonType,
        topicId: input.topicId,
        skillIds: input.skillIds ?? [],
        learningObjectiveIds: input.learningObjectiveIds ?? [],
        prerequisiteLessonIds: input.prerequisiteLessonIds ?? [],
        estimatedDurationMinutes: input.estimatedDurationMinutes,
        difficultyLevel: input.difficultyLevel,
        resourceUrls: input.resourceUrls ?? []
      }
    });

    return toDomainLesson(record);
  }
}
