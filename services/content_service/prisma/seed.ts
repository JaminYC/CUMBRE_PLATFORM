import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.topicRecord.upsert({
    where: { id: "topic-prerequisite-thinking" },
    update: {
      title: "Pattern Recognition Basics",
      summary: "Prerequisite topic that supports systems-thinking concepts.",
      skillIds: ["skill-structured-observation"]
    },
    create: {
      id: "topic-prerequisite-thinking",
      title: "Pattern Recognition Basics",
      summary: "Prerequisite topic that supports systems-thinking concepts.",
      skillIds: ["skill-structured-observation"]
    }
  });

  await prisma.topicRecord.upsert({
    where: { id: "topic-placeholder" },
    update: {
      title: "Learning Foundations",
      summary: "Seed topic for local development.",
      skillIds: ["skill-critical-thinking"],
      prerequisiteTopicIds: ["topic-prerequisite-thinking"]
    },
    create: {
      id: "topic-placeholder",
      title: "Learning Foundations",
      summary: "Seed topic for local development.",
      skillIds: ["skill-critical-thinking"],
      prerequisiteTopicIds: ["topic-prerequisite-thinking"]
    }
  });

  await prisma.lessonRecord.upsert({
    where: { id: "lesson-prerequisite-patterns" },
    update: {
      title: "Recognizing Stable Patterns",
      summary: "Prerequisite lesson for systems-thinking work.",
      lessonType: "lesson",
      topicId: "topic-prerequisite-thinking",
      skillIds: ["skill-structured-observation"],
      learningObjectiveIds: ["objective-patterns-placeholder"],
      estimatedDurationMinutes: 25,
      difficultyLevel: "beginner",
      resourceUrls: ["https://example.com/content/lesson-prerequisite-patterns"]
    },
    create: {
      id: "lesson-prerequisite-patterns",
      title: "Recognizing Stable Patterns",
      summary: "Prerequisite lesson for systems-thinking work.",
      lessonType: "lesson",
      topicId: "topic-prerequisite-thinking",
      skillIds: ["skill-structured-observation"],
      learningObjectiveIds: ["objective-patterns-placeholder"],
      estimatedDurationMinutes: 25,
      difficultyLevel: "beginner",
      resourceUrls: ["https://example.com/content/lesson-prerequisite-patterns"]
    }
  });

  await prisma.lessonRecord.upsert({
    where: { id: "lesson-placeholder" },
    update: {
      title: "Thinking in Systems",
      summary: "Seed lesson for local development.",
      lessonType: "lesson",
      topicId: "topic-placeholder",
      skillIds: ["skill-critical-thinking"],
      learningObjectiveIds: ["objective-placeholder"],
      prerequisiteLessonIds: ["lesson-prerequisite-patterns"],
      estimatedDurationMinutes: 35,
      difficultyLevel: "intermediate",
      resourceUrls: ["https://example.com/content/lesson-placeholder"]
    },
    create: {
      id: "lesson-placeholder",
      title: "Thinking in Systems",
      summary: "Seed lesson for local development.",
      lessonType: "lesson",
      topicId: "topic-placeholder",
      skillIds: ["skill-critical-thinking"],
      learningObjectiveIds: ["objective-placeholder"],
      prerequisiteLessonIds: ["lesson-prerequisite-patterns"],
      estimatedDurationMinutes: 35,
      difficultyLevel: "intermediate",
      resourceUrls: ["https://example.com/content/lesson-placeholder"]
    }
  });

  await prisma.contentItemRecord.upsert({
    where: { id: "content-item-placeholder" },
    update: {
      title: "Systems Thinking Resource",
      summary: "Seed content item for local development.",
      contentType: "resource",
      status: "published",
      topicIds: ["topic-placeholder"],
      skillIds: ["skill-critical-thinking"],
      lessonId: "lesson-placeholder",
      sourceUrl: "https://example.com/content/resource-placeholder",
      language: "en"
    },
    create: {
      id: "content-item-placeholder",
      title: "Systems Thinking Resource",
      summary: "Seed content item for local development.",
      contentType: "resource",
      status: "published",
      topicIds: ["topic-placeholder"],
      skillIds: ["skill-critical-thinking"],
      lessonId: "lesson-placeholder",
      sourceUrl: "https://example.com/content/resource-placeholder",
      language: "en"
    }
  });

  const knowledgeNodes = [
    {
      id: "knowledge-topic-patterns",
      nodeType: "topic",
      title: "Pattern Recognition Basics",
      summary: "Topic node for prerequisite pattern-recognition work.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-prerequisite-thinking"
    },
    {
      id: "knowledge-topic-systems",
      nodeType: "topic",
      title: "Learning Foundations",
      summary: "Topic node for systems-thinking work.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-placeholder"
    },
    {
      id: "knowledge-lesson-patterns",
      nodeType: "lesson",
      title: "Recognizing Stable Patterns",
      summary: "Lesson node for prerequisite pattern-recognition work.",
      sourceEntityType: "lesson",
      sourceEntityId: "lesson-prerequisite-patterns"
    },
    {
      id: "knowledge-lesson-systems",
      nodeType: "lesson",
      title: "Thinking in Systems",
      summary: "Lesson node for systems-thinking work.",
      sourceEntityType: "lesson",
      sourceEntityId: "lesson-placeholder"
    },
    {
      id: "concept-pattern-recognition",
      nodeType: "concept",
      title: "Pattern recognition",
      summary: "Notice stable structures before reasoning about larger systems.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-prerequisite-thinking"
    },
    {
      id: "concept-causal-links",
      nodeType: "concept",
      title: "Causal links",
      summary: "Understand how one change influences another inside a system.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-prerequisite-thinking"
    },
    {
      id: "concept-systems-thinking",
      nodeType: "concept",
      title: "Systems thinking",
      summary: "Reason about interacting parts instead of isolated facts.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-placeholder"
    },
    {
      id: "concept-feedback-loops",
      nodeType: "concept",
      title: "Feedback loops",
      summary: "Track how outputs of a system feed back into future behavior.",
      sourceEntityType: "topic",
      sourceEntityId: "topic-placeholder"
    }
  ];

  for (const node of knowledgeNodes) {
    await prisma.knowledgeNodeRecord.upsert({
      where: { id: node.id },
      update: node,
      create: node
    });
  }

  const knowledgeEdges = [
    {
      id: "edge-patterns-part-of-topic",
      sourceNodeId: "concept-pattern-recognition",
      targetNodeId: "knowledge-topic-patterns",
      edgeType: "part_of",
      label: "belongs to prerequisite topic"
    },
    {
      id: "edge-causal-part-of-topic",
      sourceNodeId: "concept-causal-links",
      targetNodeId: "knowledge-topic-patterns",
      edgeType: "part_of",
      label: "belongs to prerequisite topic"
    },
    {
      id: "edge-systems-part-of-topic",
      sourceNodeId: "concept-systems-thinking",
      targetNodeId: "knowledge-topic-systems",
      edgeType: "part_of",
      label: "belongs to systems topic"
    },
    {
      id: "edge-feedback-part-of-topic",
      sourceNodeId: "concept-feedback-loops",
      targetNodeId: "knowledge-topic-systems",
      edgeType: "part_of",
      label: "belongs to systems topic"
    },
    {
      id: "edge-lesson-patterns-reinforces-patterns",
      sourceNodeId: "knowledge-lesson-patterns",
      targetNodeId: "concept-pattern-recognition",
      edgeType: "reinforces",
      label: "covers pattern recognition"
    },
    {
      id: "edge-lesson-patterns-reinforces-causal",
      sourceNodeId: "knowledge-lesson-patterns",
      targetNodeId: "concept-causal-links",
      edgeType: "reinforces",
      label: "covers causal links"
    },
    {
      id: "edge-lesson-systems-reinforces-systems",
      sourceNodeId: "knowledge-lesson-systems",
      targetNodeId: "concept-systems-thinking",
      edgeType: "reinforces",
      label: "covers systems thinking"
    },
    {
      id: "edge-lesson-systems-reinforces-feedback",
      sourceNodeId: "knowledge-lesson-systems",
      targetNodeId: "concept-feedback-loops",
      edgeType: "reinforces",
      label: "covers feedback loops"
    },
    {
      id: "edge-patterns-prerequisite-of-systems",
      sourceNodeId: "concept-pattern-recognition",
      targetNodeId: "concept-systems-thinking",
      edgeType: "prerequisite_of",
      label: "supports systems thinking"
    },
    {
      id: "edge-causal-prerequisite-of-feedback",
      sourceNodeId: "concept-causal-links",
      targetNodeId: "concept-feedback-loops",
      edgeType: "prerequisite_of",
      label: "supports feedback reasoning"
    },
    {
      id: "edge-systems-relates-feedback",
      sourceNodeId: "concept-systems-thinking",
      targetNodeId: "concept-feedback-loops",
      edgeType: "relates_to",
      label: "closely connected concept"
    }
  ];

  for (const edge of knowledgeEdges) {
    await prisma.knowledgeEdgeRecord.upsert({
      where: { id: edge.id },
      update: edge,
      create: edge
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
