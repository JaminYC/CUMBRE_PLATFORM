import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import { toDomainContentItem } from "../models/content-mappers.js";

export class ContentItemRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async search(query: string, topicId?: string, contentType?: string) {
    const records = await this.prisma.contentItemRecord.findMany({
      where: {
        topicIds: topicId ? { has: topicId } : undefined,
        contentType: contentType ?? undefined,
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive"
            }
          },
          {
            summary: {
              contains: query,
              mode: "insensitive"
            }
          }
        ]
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainContentItem);
  }

  async list(filters: { topicId?: string; lessonId?: string }) {
    const records = await this.prisma.contentItemRecord.findMany({
      where: {
        topicIds: filters.topicId ? { has: filters.topicId } : undefined,
        lessonId: filters.lessonId ?? undefined
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainContentItem);
  }

  async create(input: {
    title: string;
    summary?: string;
    contentType: string;
    topicIds?: string[];
    skillIds?: string[];
    lessonId?: string;
    sourceUrl?: string;
    language?: string;
    versionLabel?: string;
    relatedLearningPathId?: string;
  }) {
    const record = await this.prisma.contentItemRecord.create({
      data: {
        id: randomUUID(),
        title: input.title,
        summary: input.summary,
        contentType: input.contentType,
        status: "published",
        topicIds: input.topicIds ?? [],
        skillIds: input.skillIds ?? [],
        lessonId: input.lessonId,
        sourceUrl: input.sourceUrl,
        language: input.language,
        versionLabel: input.versionLabel,
        metadata: input.relatedLearningPathId
          ? {
              attributes: {
                relatedLearningPathId: input.relatedLearningPathId
              }
            }
          : undefined
      }
    });

    return toDomainContentItem(record);
  }
}
