// services/content_generator_service/src/repositories/generation-job-repository.ts
import type { PrismaClient } from "../generated/prisma/index.js";

export type JobDepth = "summary" | "deep";
export type JobStatus = "pending" | "processing" | "done" | "error";
export type JobSource = { type: "text" | "pdf" | "cumbre_content"; data: string };
export type JobResults = {
  pdfUrl?: string;
  podcastUrl?: string;
  infographicUrl?: string;
};

export interface CreateJobInput {
  userId: string;
  role: string;
  topic: string;
  depth: JobDepth;
  sources: JobSource[];
  outputs: string[];
}

export class GenerationJobRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createJob(input: CreateJobInput) {
    return this.prisma.generationJobRecord.create({
      data: {
        userId: input.userId,
        role: input.role,
        topic: input.topic,
        depth: input.depth,
        sources: input.sources as any,
        outputs: input.outputs,
        status: "pending",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.generationJobRecord.findUnique({ where: { id } });
  }

  async listByUser(userId: string) {
    return this.prisma.generationJobRecord.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  async updateStatus(id: string, status: JobStatus, errorMsg?: string) {
    return this.prisma.generationJobRecord.update({
      where: { id },
      data: { status, errorMsg },
    });
  }

  async setDone(id: string, results: JobResults) {
    return this.prisma.generationJobRecord.update({
      where: { id },
      data: { status: "done", results: results as any },
    });
  }

  async countTodayByUser(userId: string): Promise<number> {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    return this.prisma.generationJobRecord.count({
      where: { userId, createdAt: { gte: startOfDay } },
    });
  }
}
