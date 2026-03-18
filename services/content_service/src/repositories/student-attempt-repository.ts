import { randomUUID } from "node:crypto";
import type { Prisma, PrismaClient } from "../generated/prisma/index.js";
import { toDomainStudentAttempt } from "../models/content-mappers.js";

export class StudentAttemptRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: {
    studentId: string;
    classroomId?: string;
    quizId?: string;
    source: string;
    score?: number;
    answers: unknown;
    teacherVerified: boolean;
  }) {
    const record = await this.prisma.studentAttemptRecord.create({
      data: {
        id: randomUUID(),
        studentId: input.studentId,
        classroomId: input.classroomId,
        quizId: input.quizId,
        source: input.source,
        score: input.score,
        answers: input.answers as Prisma.InputJsonValue,
        teacherVerified: input.teacherVerified
      }
    });

    return toDomainStudentAttempt(record);
  }
}
