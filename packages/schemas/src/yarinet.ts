import { z } from "zod";

export const challengeStatusValues = [
  "DRAFT",
  "OPEN",
  "DELIBERATING",
  "SYNTHESIZING",
  "CLOSED",
  "ARCHIVED"
] as const;

const createChallengeRequest = z.object({
  teacherId: z.string().min(1),
  classroomId: z.string().min(1).optional(),
  title: z.string().min(3).max(200),
  problemStatement: z.string().min(10),
  context: z.string().optional(),
  category: z.string().min(1),
  gradeLevel: z.string().optional(),
  guidingQuestions: z.array(z.string()).max(10).default([]),
  rubric: z.record(z.unknown()).optional(),
  opensAt: z.string().datetime().optional(),
  closesAt: z.string().datetime().optional()
});

const updateChallengeStatusRequest = z.object({
  challengeId: z.string().min(1),
  status: z.enum(challengeStatusValues)
});

const getChallengeRequest = z.object({
  challengeId: z.string().min(1)
});

const listChallengesRequest = z.object({
  teacherId: z.string().min(1).optional(),
  classroomId: z.string().min(1).optional(),
  status: z.enum(challengeStatusValues).optional()
});

export const yarinetSchemas = {
  createChallengeRequest,
  updateChallengeStatusRequest,
  getChallengeRequest,
  listChallengesRequest
};

export type CreateChallengeRequest = z.infer<typeof createChallengeRequest>;
export type UpdateChallengeStatusRequest = z.infer<typeof updateChallengeStatusRequest>;
export type GetChallengeRequest = z.infer<typeof getChallengeRequest>;
export type ListChallengesRequest = z.infer<typeof listChallengesRequest>;
