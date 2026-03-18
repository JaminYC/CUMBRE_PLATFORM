import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import { toDomainTopic } from "../models/content-mappers.js";

export class TopicRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string) {
    const record = await this.prisma.topicRecord.findUnique({
      where: { id }
    });

    return record ? toDomainTopic(record) : null;
  }

  async list(parentTopicId?: string) {
    const records = await this.prisma.topicRecord.findMany({
      where: {
        parentTopicId: parentTopicId ?? undefined
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainTopic);
  }

  async create(input: {
    title: string;
    summary?: string;
    slug?: string;
    parentTopicId?: string;
    skillIds?: string[];
    prerequisiteTopicIds?: string[];
  }) {
    const record = await this.prisma.topicRecord.create({
      data: {
        id: randomUUID(),
        title: input.title,
        summary: input.summary,
        slug: input.slug,
        parentTopicId: input.parentTopicId,
        skillIds: input.skillIds ?? [],
        prerequisiteTopicIds: input.prerequisiteTopicIds ?? []
      }
    });

    return toDomainTopic(record);
  }

  async update(
    id: string,
    input: {
      title: string;
      summary?: string;
      slug?: string;
      parentTopicId?: string;
      skillIds?: string[];
      prerequisiteTopicIds?: string[];
    }
  ) {
    const record = await this.prisma.topicRecord.update({
      where: { id },
      data: {
        title: input.title,
        summary: input.summary,
        slug: input.slug,
        parentTopicId: input.parentTopicId,
        skillIds: input.skillIds ?? [],
        prerequisiteTopicIds: input.prerequisiteTopicIds ?? []
      }
    });

    return toDomainTopic(record);
  }
}
