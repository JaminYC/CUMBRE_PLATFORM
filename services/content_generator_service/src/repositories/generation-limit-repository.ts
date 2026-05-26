// services/content_generator_service/src/repositories/generation-limit-repository.ts
import type { PrismaClient } from "../generated/prisma/index.js";

export class GenerationLimitRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getLimitForRole(role: string) {
    return this.prisma.generationLimitRecord.findUnique({ where: { role } });
  }

  async upsertLimit(role: string, dailyLimit: number) {
    return this.prisma.generationLimitRecord.upsert({
      where: { role },
      update: { dailyLimit },
      create: { role, dailyLimit },
    });
  }

  async listAll() {
    return this.prisma.generationLimitRecord.findMany({ orderBy: { role: "asc" } });
  }
}
