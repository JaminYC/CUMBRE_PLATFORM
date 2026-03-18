import { randomUUID } from "node:crypto";
import type { Prisma, PrismaClient } from "../generated/prisma/index.js";
import { toDomainTeachingMaterial } from "../models/content-mappers.js";

export class TeachingMaterialRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: {
    teacherId: string;
    fileName: string;
    mimeType: string;
    materialKind: string;
    status: string;
    parsedText: string;
    parsedStructure: unknown;
  }) {
    const record = await this.prisma.teachingMaterialRecord.create({
      data: {
        id: randomUUID(),
        teacherId: input.teacherId,
        fileName: input.fileName,
        mimeType: input.mimeType,
        materialKind: input.materialKind,
        status: input.status,
        parsedText: input.parsedText,
        parsedStructure: input.parsedStructure as Prisma.InputJsonValue
      }
    });

    return toDomainTeachingMaterial(record);
  }

  async findById(id: string) {
    const record = await this.prisma.teachingMaterialRecord.findUnique({
      where: { id }
    });

    return record ? toDomainTeachingMaterial(record) : null;
  }

  async listByTeacher(teacherId: string) {
    const records = await this.prisma.teachingMaterialRecord.findMany({
      where: { teacherId },
      orderBy: { createdAt: "desc" }
    });

    return records.map(toDomainTeachingMaterial);
  }
}
