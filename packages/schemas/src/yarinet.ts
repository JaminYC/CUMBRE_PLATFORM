import type { SchemaDefinition } from "./index.js";

export type ChallengeStatusValue =
  | "DRAFT"
  | "OPEN"
  | "DELIBERATING"
  | "SYNTHESIZING"
  | "CLOSED"
  | "ARCHIVED";

export const challengeStatusValues: readonly ChallengeStatusValue[] = [
  "DRAFT",
  "OPEN",
  "DELIBERATING",
  "SYNTHESIZING",
  "CLOSED",
  "ARCHIVED"
];

export interface CreateChallengeRequest {
  teacherId: string;
  classroomId?: string;
  title: string;
  problemStatement: string;
  context?: string;
  category: string;
  gradeLevel?: string;
  guidingQuestions: string[];
  rubric?: Record<string, unknown>;
  opensAt?: string;
  closesAt?: string;
}

export interface UpdateChallengeStatusRequest {
  challengeId: string;
  status: ChallengeStatusValue;
}

export interface GetChallengeRequest {
  challengeId: string;
}

export interface ListChallengesRequest {
  teacherId?: string;
  classroomId?: string;
  status?: ChallengeStatusValue;
}

export const yarinetSchemas = {
  createChallengeRequest: {
    $id: "schema://yarinet/CreateChallengeRequest",
    type: "object",
    required: [
      "teacherId",
      "title",
      "problemStatement",
      "category",
      "guidingQuestions"
    ],
    properties: {
      teacherId: { type: "string" },
      classroomId: { type: "string" },
      title: { type: "string" },
      problemStatement: { type: "string" },
      context: { type: "string" },
      category: { type: "string" },
      gradeLevel: { type: "string" },
      guidingQuestions: {
        type: "array",
        items: { type: "string" }
      },
      rubric: { type: "object", additionalProperties: true },
      opensAt: { type: "string", format: "date-time" },
      closesAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  updateChallengeStatusRequest: {
    $id: "schema://yarinet/UpdateChallengeStatusRequest",
    type: "object",
    required: ["challengeId", "status"],
    properties: {
      challengeId: { type: "string" },
      status: { type: "string", enum: challengeStatusValues }
    }
  } satisfies SchemaDefinition,
  getChallengeRequest: {
    $id: "schema://yarinet/GetChallengeRequest",
    type: "object",
    required: ["challengeId"],
    properties: {
      challengeId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listChallengesRequest: {
    $id: "schema://yarinet/ListChallengesRequest",
    type: "object",
    properties: {
      teacherId: { type: "string" },
      classroomId: { type: "string" },
      status: { type: "string", enum: challengeStatusValues }
    }
  } satisfies SchemaDefinition
};
