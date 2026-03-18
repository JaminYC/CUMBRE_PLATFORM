import type { PrismaClient } from "../generated/prisma/index.js";
import { toDomainMasteryState } from "../models/learning-mappers.js";

export class MasteryStateRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async listByLearner(learnerUserId: string, learningPathId?: string) {
    const records = await this.prisma.masteryStateRecord.findMany({
      where: {
        learnerUserId,
        learningPathId: learningPathId ?? undefined
      },
      orderBy: {
        updatedAt: "desc"
      }
    });

    return records.map(toDomainMasteryState);
  }
}
