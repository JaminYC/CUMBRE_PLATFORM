import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import {
  toDomainKnowledgeEdge,
  toDomainKnowledgeNode
} from "../models/content-mappers.js";

export class KnowledgeGraphRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async listNodes(filters: {
    nodeType?: string;
    sourceEntityType?: string;
    sourceEntityId?: string;
  } = {}) {
    const records = await this.prisma.knowledgeNodeRecord.findMany({
      where: {
        nodeType: filters.nodeType ?? undefined,
        sourceEntityType: filters.sourceEntityType ?? undefined,
        sourceEntityId: filters.sourceEntityId ?? undefined
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainKnowledgeNode);
  }

  async findNodeById(id: string) {
    const record = await this.prisma.knowledgeNodeRecord.findUnique({
      where: { id }
    });

    return record ? toDomainKnowledgeNode(record) : null;
  }

  async findNodeBySource(sourceEntityType: string, sourceEntityId: string) {
    const record = await this.prisma.knowledgeNodeRecord.findFirst({
      where: {
        sourceEntityType,
        sourceEntityId
      }
    });

    return record ? toDomainKnowledgeNode(record) : null;
  }

  async createNode(input: {
    nodeType: string;
    title: string;
    summary?: string;
    sourceEntityType?: string;
    sourceEntityId?: string;
  }) {
    const record = await this.prisma.knowledgeNodeRecord.create({
      data: {
        id: randomUUID(),
        nodeType: input.nodeType,
        title: input.title,
        summary: input.summary,
        sourceEntityType: input.sourceEntityType,
        sourceEntityId: input.sourceEntityId
      }
    });

    return toDomainKnowledgeNode(record);
  }

  async updateNode(
    id: string,
    input: {
      nodeType: string;
      title: string;
      summary?: string;
      sourceEntityType?: string;
      sourceEntityId?: string;
    }
  ) {
    const record = await this.prisma.knowledgeNodeRecord.update({
      where: { id },
      data: {
        nodeType: input.nodeType,
        title: input.title,
        summary: input.summary,
        sourceEntityType: input.sourceEntityType,
        sourceEntityId: input.sourceEntityId
      }
    });

    return toDomainKnowledgeNode(record);
  }

  async listEdges(filters: {
    sourceNodeId?: string;
    targetNodeId?: string;
    edgeType?: string;
  } = {}) {
    const records = await this.prisma.knowledgeEdgeRecord.findMany({
      where: {
        sourceNodeId: filters.sourceNodeId ?? undefined,
        targetNodeId: filters.targetNodeId ?? undefined,
        edgeType: filters.edgeType ?? undefined
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map(toDomainKnowledgeEdge);
  }

  async createEdge(input: {
    sourceNodeId: string;
    targetNodeId: string;
    edgeType: string;
    label?: string;
    weight?: number;
    directed?: boolean;
  }) {
    const record = await this.prisma.knowledgeEdgeRecord.create({
      data: {
        id: randomUUID(),
        sourceNodeId: input.sourceNodeId,
        targetNodeId: input.targetNodeId,
        edgeType: input.edgeType,
        label: input.label,
        weight: input.weight,
        directed: input.directed ?? true
      }
    });

    return toDomainKnowledgeEdge(record);
  }

  async ensureNodeForSource(input: {
    nodeType: string;
    title: string;
    summary?: string;
    sourceEntityType: string;
    sourceEntityId: string;
  }) {
    const existingNode = await this.findNodeBySource(
      input.sourceEntityType,
      input.sourceEntityId
    );

    if (existingNode) {
      return existingNode;
    }

    return this.createNode(input);
  }

  async replaceLessonConceptMappings(lessonNodeId: string, conceptNodeIds: string[]) {
    await this.prisma.knowledgeEdgeRecord.deleteMany({
      where: {
        sourceNodeId: lessonNodeId,
        edgeType: "reinforces"
      }
    });

    for (const conceptNodeId of conceptNodeIds) {
      await this.prisma.knowledgeEdgeRecord.create({
        data: {
          id: randomUUID(),
          sourceNodeId: lessonNodeId,
          targetNodeId: conceptNodeId,
          edgeType: "reinforces",
          label: "covers mapped concept",
          directed: true
        }
      });
    }
  }
}
