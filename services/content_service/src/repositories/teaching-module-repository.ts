import { randomUUID } from "node:crypto";
import type { Prisma, PrismaClient } from "../generated/prisma/index.js";
import { toDomainTeachingModule } from "../models/content-mappers.js";

export class TeachingModuleRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: {
    teacherId: string;
    materialId?: string;
    title: string;
    summary?: string;
    status: string;
    conceptNodeIds: string[];
    lessonIds: string[];
    sections: unknown;
    suggestedTopicTitles?: string[];
  }) {
    const record = await this.prisma.teachingModuleRecord.create({
      data: {
        id: randomUUID(),
        teacherId: input.teacherId,
        materialId: input.materialId,
        title: input.title,
        summary: input.summary,
        status: input.status,
        conceptNodeIds: input.conceptNodeIds,
        lessonIds: input.lessonIds,
        sections: input.sections as Prisma.InputJsonValue,
        suggestedTopicTitles: input.suggestedTopicTitles ?? []
      }
    });

    return toDomainTeachingModule(record);
  }

  async list(teacherId?: string) {
    const records = await this.prisma.teachingModuleRecord.findMany({
      where: {
        teacherId: teacherId ?? undefined
      },
      orderBy: { createdAt: "desc" }
    });

    return records.map(toDomainTeachingModule);
  }

  async findById(id: string) {
    const record = await this.prisma.teachingModuleRecord.findUnique({
      where: { id }
    });

    return record ? toDomainTeachingModule(record) : null;
  }
}
