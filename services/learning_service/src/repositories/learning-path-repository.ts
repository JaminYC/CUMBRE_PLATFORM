import type { PrismaClient } from "../generated/prisma/index.js";
import { toDomainLearningPath } from "../models/learning-mappers.js";

export class LearningPathRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string) {
    const record = await this.prisma.learningPathRecord.findUnique({
      where: { id }
    });

    return record ? toDomainLearningPath(record) : null;
  }

  async list() {
    const records = await this.prisma.learningPathRecord.findMany({
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainLearningPath);
  }
}
