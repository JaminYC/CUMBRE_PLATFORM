import { randomUUID } from "node:crypto";
import type {
  TutorContextSnippet,
  TutorReference,
  TutorReply,
  TutorSession,
  TutorTurn
} from "@cumbre/types";
import type { PrismaClient } from "../generated/prisma/index.js";
import {
  toDomainTutorSession,
  toDomainTutorTurn,
  toReplyFromTurn
} from "../models/tutor-mappers";

interface CreateTutorSessionInput {
  learnerUserId: string;
  status: string;
  tutorMode: string;
  learningPathId?: string;
  lessonId?: string;
  topicIds: string[];
  goalSummary?: string;
  metadata?: TutorSession["metadata"];
}

interface PersistInteractionInput {
  tutorSessionId: string;
  learnerTurn: Omit<TutorTurn, "id" | "createdAt" | "updatedAt">;
  tutorTurn: Omit<TutorTurn, "id" | "createdAt" | "updatedAt">;
}

export class TutorSessionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createSession(input: CreateTutorSessionInput) {
    const record = await this.prisma.tutorSessionRecord.create({
      data: {
        id: randomUUID(),
        learnerUserId: input.learnerUserId,
        status: input.status,
        tutorMode: input.tutorMode,
        startedAt: new Date(),
        lastInteractionAt: new Date(),
        learningPathId: input.learningPathId,
        lessonId: input.lessonId,
        topicIds: input.topicIds,
        goalSummary: input.goalSummary,
        metadata: toJsonValue(input.metadata),
        turnCount: 0
      }
    });

    return toDomainTutorSession(record);
  }

  async findConversation(input: {
    learnerUserId: string;
    lessonId: string;
    topicId: string;
    tutorSessionId?: string;
  }): Promise<{ tutorSession: TutorSession | null; turns: TutorTurn[] }> {
    const sessionRecord = input.tutorSessionId
      ? await this.prisma.tutorSessionRecord.findUnique({
          where: { id: input.tutorSessionId }
        })
      : await this.prisma.tutorSessionRecord.findFirst({
          where: {
            learnerUserId: input.learnerUserId,
            lessonId: input.lessonId,
            topicIds: {
              has: input.topicId
            },
            status: {
              in: ["active", "waiting"]
            }
          },
          orderBy: {
            lastInteractionAt: "desc"
          }
        });

    if (!sessionRecord) {
      return {
        tutorSession: null,
        turns: []
      };
    }

    const turnRecords = await this.prisma.tutorTurnRecord.findMany({
      where: {
        tutorSessionId: sessionRecord.id
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return {
      tutorSession: toDomainTutorSession(sessionRecord),
      turns: turnRecords.map(toDomainTutorTurn)
    };
  }

  async persistInteraction(input: PersistInteractionInput) {
    const learnerTurnId = randomUUID();
    const tutorTurnId = randomUUID();
    const learnerTurnCreatedAt = new Date();
    const tutorTurnCreatedAt = new Date();

    const [updatedSession, learnerTurnRecord, tutorTurnRecord] = await this.prisma.$transaction([
      this.prisma.tutorSessionRecord.update({
        where: {
          id: input.tutorSessionId
        },
        data: {
          lastInteractionAt: tutorTurnCreatedAt,
          turnCount: {
            increment: 2
          },
          status: "active"
        }
      }),
      this.prisma.tutorTurnRecord.create({
        data: {
          id: learnerTurnId,
          tutorSessionId: input.tutorSessionId,
          actor: input.learnerTurn.actor,
          action: input.learnerTurn.action,
          responseType: input.learnerTurn.responseType,
          title: input.learnerTurn.title,
          summary: input.learnerTurn.summary,
          content: input.learnerTurn.content,
          lessonId: input.learnerTurn.lessonId,
          topicId: input.learnerTurn.topicId,
          suggestedPrompts: input.learnerTurn.suggestedPrompts ?? [],
          nextSteps: input.learnerTurn.nextSteps ?? [],
          references: (input.learnerTurn.references ?? []) as unknown as object,
          contextSnippets: (input.learnerTurn.contextSnippets ?? []) as unknown as object,
          retrievalContext: toJsonValue(input.learnerTurn.retrievalContext),
          metadata: toJsonValue(input.learnerTurn.metadata),
          createdAt: learnerTurnCreatedAt,
          updatedAt: learnerTurnCreatedAt
        }
      }),
      this.prisma.tutorTurnRecord.create({
        data: {
          id: tutorTurnId,
          tutorSessionId: input.tutorSessionId,
          actor: input.tutorTurn.actor,
          action: input.tutorTurn.action,
          responseType: input.tutorTurn.responseType,
          title: input.tutorTurn.title,
          summary: input.tutorTurn.summary,
          content: input.tutorTurn.content,
          lessonId: input.tutorTurn.lessonId,
          topicId: input.tutorTurn.topicId,
          suggestedPrompts: input.tutorTurn.suggestedPrompts ?? [],
          nextSteps: input.tutorTurn.nextSteps ?? [],
          references: (input.tutorTurn.references ?? []) as unknown as object,
          contextSnippets: (input.tutorTurn.contextSnippets ?? []) as unknown as object,
          retrievalContext: toJsonValue(input.tutorTurn.retrievalContext),
          metadata: toJsonValue(input.tutorTurn.metadata),
          createdAt: tutorTurnCreatedAt,
          updatedAt: tutorTurnCreatedAt
        }
      })
    ]);

    const learnerTurn = toDomainTutorTurn(learnerTurnRecord);
    const tutorTurn = toDomainTutorTurn(tutorTurnRecord);

    return {
      tutorSession: toDomainTutorSession(updatedSession),
      learnerTurn,
      tutorTurn,
      reply: toReplyFromTurn(tutorTurn)
    };
  }

  async streamInteraction(input: PersistInteractionInput) {
    return this.persistInteraction(input);
  }

  async listRecentTurns(input: {
    learnerUserId: string;
    learningPathId?: string;
    lessonId?: string;
    topicId?: string;
    limit?: number;
  }): Promise<TutorTurn[]> {
    const records = await this.prisma.tutorTurnRecord.findMany({
      where: {
        lessonId: input.lessonId ?? undefined,
        topicId: input.topicId ?? undefined,
        tutorSession: {
          learnerUserId: input.learnerUserId,
          learningPathId: input.learningPathId ?? undefined
        }
      },
      orderBy: {
        createdAt: "desc"
      },
      take: input.limit ?? 8
    });

    return records.map(toDomainTutorTurn);
  }
}

function toJsonValue<T>(value: T | undefined) {
  return value ? (JSON.parse(JSON.stringify(value)) as object) : undefined;
}
