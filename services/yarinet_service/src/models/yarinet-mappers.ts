import type { CivicChallenge } from "../generated/prisma/index.js";

export interface ChallengeDTO {
  id: string;
  teacherId: string;
  classroomId: string | null;
  title: string;
  problemStatement: string;
  context: string | null;
  category: string;
  gradeLevel: string | null;
  status: string;
  guidingQuestions: string[];
  opensAt: string | null;
  closesAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export function toChallengeDTO(record: CivicChallenge): ChallengeDTO {
  return {
    id: record.id,
    teacherId: record.teacherId,
    classroomId: record.classroomId,
    title: record.title,
    problemStatement: record.problemStatement,
    context: record.context,
    category: record.category,
    gradeLevel: record.gradeLevel,
    status: record.status,
    guidingQuestions: record.guidingQuestions,
    opensAt: record.opensAt ? record.opensAt.toISOString() : null,
    closesAt: record.closesAt ? record.closesAt.toISOString() : null,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString()
  };
}
