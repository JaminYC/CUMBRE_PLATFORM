import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import { toChallengeDTO, type ChallengeDTO } from "../models/yarinet-mappers.js";

export class ChallengeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createChallenge(input: {
    teacherId: string;
    classroomId?: string;
    title: string;
    problemStatement: string;
    context?: string;
    category: string;
    gradeLevel?: string;
    guidingQuestions: string[];
    rubric?: unknown;
    opensAt?: string;
    closesAt?: string;
  }): Promise<ChallengeDTO> {
    const record = await this.prisma.civicChallenge.create({
      data: {
        id: randomUUID(),
        status: "DRAFT" as never,
        teacherId: input.teacherId,
        classroomId: input.classroomId,
        title: input.title,
        problemStatement: input.problemStatement,
        context: input.context,
        category: input.category,
        gradeLevel: input.gradeLevel,
        guidingQuestions: input.guidingQuestions,
        rubric: input.rubric as never,
        opensAt: input.opensAt ? new Date(input.opensAt) : undefined,
        closesAt: input.closesAt ? new Date(input.closesAt) : undefined
      }
    });
    return toChallengeDTO(record);
  }

  async findChallengeById(challengeId: string): Promise<ChallengeDTO | null> {
    const record = await this.prisma.civicChallenge.findUnique({
      where: { id: challengeId }
    });
    return record ? toChallengeDTO(record) : null;
  }

  async listChallenges(filter: {
    teacherId?: string;
    classroomId?: string;
    status?: string;
  }): Promise<ChallengeDTO[]> {
    const records = await this.prisma.civicChallenge.findMany({
      where: {
        teacherId: filter.teacherId,
        classroomId: filter.classroomId,
        status: filter.status as never
      }
    });
    return records.map(toChallengeDTO);
  }

  async updateChallengeStatus(
    challengeId: string,
    status: string
  ): Promise<ChallengeDTO | null> {
    const existing = await this.prisma.civicChallenge.findUnique({
      where: { id: challengeId }
    });
    if (!existing) {
      return null;
    }
    const record = await this.prisma.civicChallenge.update({
      where: { id: challengeId },
      data: { status: status as never }
    });
    return toChallengeDTO(record);
  }
}
