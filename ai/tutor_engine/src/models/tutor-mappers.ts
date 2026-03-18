import type {
  RetrievedContextBundle,
  TutorContextSnippet,
  TutorReply,
  TutorReference,
  TutorResponseType,
  TutorSession,
  TutorTurn
} from "@cumbre/types";
import type {
  TutorSessionRecord,
  TutorTurnRecord
} from "../generated/prisma/index.js";

function toIsoDate(dateValue: Date) {
  return dateValue.toISOString();
}

function parseReferences(value: unknown): TutorReference[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  return value as TutorReference[];
}

function parseContextSnippets(value: unknown): TutorContextSnippet[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  return value as TutorContextSnippet[];
}

function parseRetrievalContext(value: unknown): RetrievedContextBundle | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }

  return value as RetrievedContextBundle;
}

export function toDomainTutorSession(record: TutorSessionRecord): TutorSession {
  return {
    id: record.id,
    createdAt: toIsoDate(record.createdAt),
    updatedAt: toIsoDate(record.updatedAt),
    metadata:
      record.metadata && typeof record.metadata === "object"
        ? (record.metadata as TutorSession["metadata"])
        : undefined,
    learnerUserId: record.learnerUserId,
    status: record.status,
    tutorMode: record.tutorMode,
    startedAt: toIsoDate(record.startedAt),
    lastInteractionAt: toIsoDate(record.lastInteractionAt),
    learningPathId: record.learningPathId ?? undefined,
    lessonId: record.lessonId ?? undefined,
    topicIds: record.topicIds,
    goalSummary: record.goalSummary ?? undefined,
    turnCount: record.turnCount
  };
}

export function toDomainTutorTurn(record: TutorTurnRecord): TutorTurn {
  return {
    id: record.id,
    createdAt: toIsoDate(record.createdAt),
    updatedAt: toIsoDate(record.updatedAt),
    metadata:
      record.metadata && typeof record.metadata === "object"
        ? (record.metadata as TutorTurn["metadata"])
        : undefined,
    tutorSessionId: record.tutorSessionId,
    actor: record.actor,
    action: record.action ?? undefined,
    responseType: (record.responseType as TutorResponseType | null) ?? undefined,
    title: record.title ?? undefined,
    summary: record.summary ?? undefined,
    content: record.content,
    lessonId: record.lessonId ?? undefined,
    topicId: record.topicId ?? undefined,
    suggestedPrompts: record.suggestedPrompts,
    nextSteps: record.nextSteps,
    references: parseReferences(record.references),
    contextSnippets: parseContextSnippets(record.contextSnippets),
    retrievalContext: parseRetrievalContext(record.retrievalContext)
  };
}

export function toReplyFromTurn(turn: TutorTurn): TutorReply {
  return {
    responseType: turn.responseType ?? "answer",
    title: turn.title ?? "Tutor response",
    answer: turn.content,
    summary: turn.summary,
    suggestedPrompts: turn.suggestedPrompts,
    nextSteps: turn.nextSteps,
    references: turn.references,
    contextSnippets: turn.contextSnippets,
    retrievalContext: turn.retrievalContext
  };
}
