import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

// Stable demo UUIDs — consistent across all services
const DEMO_TOPIC_PREREQ_ID    = "30000000-0000-0000-0000-000000000001";
const DEMO_TOPIC_MAIN_ID      = "30000000-0000-0000-0000-000000000002";
const DEMO_LESSON_PREREQ_ID   = "40000000-0000-0000-0000-000000000001";
const DEMO_LESSON_MAIN_ID     = "40000000-0000-0000-0000-000000000002";
const DEMO_CONTENT_ITEM_ID    = "50000000-0000-0000-0000-000000000001";

// Knowledge nodes
const KN_TOPIC_PATTERNS       = "70000000-0000-0000-0000-000000000001";
const KN_TOPIC_SYSTEMS        = "70000000-0000-0000-0000-000000000002";
const KN_LESSON_PATTERNS      = "70000000-0000-0000-0000-000000000003";
const KN_LESSON_SYSTEMS       = "70000000-0000-0000-0000-000000000004";
const KN_CONCEPT_PATTERN_REC  = "70000000-0000-0000-0000-000000000005";
const KN_CONCEPT_CAUSAL       = "70000000-0000-0000-0000-000000000006";
const KN_CONCEPT_SYSTEMS      = "70000000-0000-0000-0000-000000000007";
const KN_CONCEPT_FEEDBACK     = "70000000-0000-0000-0000-000000000008";

// Knowledge edges
const KE_PATTERNS_PART_OF     = "80000000-0000-0000-0000-000000000001";
const KE_CAUSAL_PART_OF       = "80000000-0000-0000-0000-000000000002";
const KE_SYSTEMS_PART_OF      = "80000000-0000-0000-0000-000000000003";
const KE_FEEDBACK_PART_OF     = "80000000-0000-0000-0000-000000000004";
const KE_L_PATTERNS_REINFORCES_PATTERNS = "80000000-0000-0000-0000-000000000005";
const KE_L_PATTERNS_REINFORCES_CAUSAL   = "80000000-0000-0000-0000-000000000006";
const KE_L_SYSTEMS_REINFORCES_SYSTEMS   = "80000000-0000-0000-0000-000000000007";
const KE_L_SYSTEMS_REINFORCES_FEEDBACK  = "80000000-0000-0000-0000-000000000008";
const KE_PATTERNS_PREREQ_SYSTEMS        = "80000000-0000-0000-0000-000000000009";
const KE_CAUSAL_PREREQ_FEEDBACK         = "80000000-0000-0000-0000-000000000010";
const KE_SYSTEMS_RELATES_FEEDBACK       = "80000000-0000-0000-0000-000000000011";

async function main() {
  // Clean up old string-ID placeholder records
  await prisma.knowledgeEdgeRecord.deleteMany({
    where: {
      id: {
        in: [
          "edge-patterns-part-of-topic", "edge-causal-part-of-topic",
          "edge-systems-part-of-topic", "edge-feedback-part-of-topic",
          "edge-lesson-patterns-reinforces-patterns", "edge-lesson-patterns-reinforces-causal",
          "edge-lesson-systems-reinforces-systems", "edge-lesson-systems-reinforces-feedback",
          "edge-patterns-prerequisite-of-systems", "edge-causal-prerequisite-of-feedback",
          "edge-systems-relates-feedback"
        ]
      }
    }
  });
  await prisma.knowledgeNodeRecord.deleteMany({
    where: {
      id: {
        in: [
          "knowledge-topic-patterns", "knowledge-topic-systems",
          "knowledge-lesson-patterns", "knowledge-lesson-systems",
          "concept-pattern-recognition", "concept-causal-links",
          "concept-systems-thinking", "concept-feedback-loops"
        ]
      }
    }
  });
  await prisma.contentItemRecord.deleteMany({
    where: { id: { in: ["content-item-placeholder"] } }
  });
  await prisma.lessonRecord.deleteMany({
    where: { id: { in: ["lesson-placeholder", "lesson-prerequisite-patterns"] } }
  });
  await prisma.topicRecord.deleteMany({
    where: { id: { in: ["topic-placeholder", "topic-prerequisite-thinking"] } }
  });

  // Topics
  await prisma.topicRecord.upsert({
    where: { id: DEMO_TOPIC_PREREQ_ID },
    update: {
      title: "Pattern Recognition Basics",
      summary: "Prerequisite topic that supports systems-thinking concepts.",
      skillIds: ["skill-structured-observation"]
    },
    create: {
      id: DEMO_TOPIC_PREREQ_ID,
      title: "Pattern Recognition Basics",
      summary: "Prerequisite topic that supports systems-thinking concepts.",
      skillIds: ["skill-structured-observation"]
    }
  });

  await prisma.topicRecord.upsert({
    where: { id: DEMO_TOPIC_MAIN_ID },
    update: {
      title: "Learning Foundations",
      summary: "Ruta de aprendizaje demo para la plataforma CUMBRE.",
      skillIds: ["skill-critical-thinking"],
      prerequisiteTopicIds: [DEMO_TOPIC_PREREQ_ID]
    },
    create: {
      id: DEMO_TOPIC_MAIN_ID,
      title: "Learning Foundations",
      summary: "Ruta de aprendizaje demo para la plataforma CUMBRE.",
      skillIds: ["skill-critical-thinking"],
      prerequisiteTopicIds: [DEMO_TOPIC_PREREQ_ID]
    }
  });

  // Lessons
  await prisma.lessonRecord.upsert({
    where: { id: DEMO_LESSON_PREREQ_ID },
    update: {
      title: "Recognizing Stable Patterns",
      summary: "Prerequisite lesson for systems-thinking work.",
      lessonType: "lesson",
      topicId: DEMO_TOPIC_PREREQ_ID,
      skillIds: ["skill-structured-observation"],
      learningObjectiveIds: ["objective-patterns-prereq"],
      estimatedDurationMinutes: 25,
      difficultyLevel: "beginner",
      resourceUrls: ["https://example.com/content/recognizing-stable-patterns"]
    },
    create: {
      id: DEMO_LESSON_PREREQ_ID,
      title: "Recognizing Stable Patterns",
      summary: "Prerequisite lesson for systems-thinking work.",
      lessonType: "lesson",
      topicId: DEMO_TOPIC_PREREQ_ID,
      skillIds: ["skill-structured-observation"],
      learningObjectiveIds: ["objective-patterns-prereq"],
      estimatedDurationMinutes: 25,
      difficultyLevel: "beginner",
      resourceUrls: ["https://example.com/content/recognizing-stable-patterns"]
    }
  });

  await prisma.lessonRecord.upsert({
    where: { id: DEMO_LESSON_MAIN_ID },
    update: {
      title: "Thinking in Systems",
      summary: "Lección principal del demo CUMBRE.",
      lessonType: "lesson",
      topicId: DEMO_TOPIC_MAIN_ID,
      skillIds: ["skill-critical-thinking"],
      learningObjectiveIds: ["objective-systems-main"],
      prerequisiteLessonIds: [DEMO_LESSON_PREREQ_ID],
      estimatedDurationMinutes: 35,
      difficultyLevel: "intermediate",
      resourceUrls: ["https://example.com/content/thinking-in-systems"]
    },
    create: {
      id: DEMO_LESSON_MAIN_ID,
      title: "Thinking in Systems",
      summary: "Lección principal del demo CUMBRE.",
      lessonType: "lesson",
      topicId: DEMO_TOPIC_MAIN_ID,
      skillIds: ["skill-critical-thinking"],
      learningObjectiveIds: ["objective-systems-main"],
      prerequisiteLessonIds: [DEMO_LESSON_PREREQ_ID],
      estimatedDurationMinutes: 35,
      difficultyLevel: "intermediate",
      resourceUrls: ["https://example.com/content/thinking-in-systems"]
    }
  });

  // Content item
  await prisma.contentItemRecord.upsert({
    where: { id: DEMO_CONTENT_ITEM_ID },
    update: {
      title: "Systems Thinking Resource",
      summary: "Recurso principal del demo CUMBRE.",
      contentType: "resource",
      status: "published",
      topicIds: [DEMO_TOPIC_MAIN_ID],
      skillIds: ["skill-critical-thinking"],
      lessonId: DEMO_LESSON_MAIN_ID,
      sourceUrl: "https://example.com/content/systems-thinking-resource",
      language: "es"
    },
    create: {
      id: DEMO_CONTENT_ITEM_ID,
      title: "Systems Thinking Resource",
      summary: "Recurso principal del demo CUMBRE.",
      contentType: "resource",
      status: "published",
      topicIds: [DEMO_TOPIC_MAIN_ID],
      skillIds: ["skill-critical-thinking"],
      lessonId: DEMO_LESSON_MAIN_ID,
      sourceUrl: "https://example.com/content/systems-thinking-resource",
      language: "es"
    }
  });

  // Knowledge nodes
  const knowledgeNodes = [
    {
      id: KN_TOPIC_PATTERNS,
      nodeType: "topic",
      title: "Pattern Recognition Basics",
      summary: "Topic node for prerequisite pattern-recognition work.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_PREREQ_ID
    },
    {
      id: KN_TOPIC_SYSTEMS,
      nodeType: "topic",
      title: "Learning Foundations",
      summary: "Topic node for systems-thinking work.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_MAIN_ID
    },
    {
      id: KN_LESSON_PATTERNS,
      nodeType: "lesson",
      title: "Recognizing Stable Patterns",
      summary: "Lesson node for prerequisite pattern-recognition work.",
      sourceEntityType: "lesson",
      sourceEntityId: DEMO_LESSON_PREREQ_ID
    },
    {
      id: KN_LESSON_SYSTEMS,
      nodeType: "lesson",
      title: "Thinking in Systems",
      summary: "Lesson node for systems-thinking work.",
      sourceEntityType: "lesson",
      sourceEntityId: DEMO_LESSON_MAIN_ID
    },
    {
      id: KN_CONCEPT_PATTERN_REC,
      nodeType: "concept",
      title: "Pattern recognition",
      summary: "Notice stable structures before reasoning about larger systems.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_PREREQ_ID
    },
    {
      id: KN_CONCEPT_CAUSAL,
      nodeType: "concept",
      title: "Causal links",
      summary: "Understand how one change influences another inside a system.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_PREREQ_ID
    },
    {
      id: KN_CONCEPT_SYSTEMS,
      nodeType: "concept",
      title: "Systems thinking",
      summary: "Reason about interacting parts instead of isolated facts.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_MAIN_ID
    },
    {
      id: KN_CONCEPT_FEEDBACK,
      nodeType: "concept",
      title: "Feedback loops",
      summary: "Track how outputs of a system feed back into future behavior.",
      sourceEntityType: "topic",
      sourceEntityId: DEMO_TOPIC_MAIN_ID
    }
  ];

  for (const node of knowledgeNodes) {
    await prisma.knowledgeNodeRecord.upsert({
      where: { id: node.id },
      update: node,
      create: node
    });
  }

  // Knowledge edges
  const knowledgeEdges = [
    { id: KE_PATTERNS_PART_OF,   sourceNodeId: KN_CONCEPT_PATTERN_REC, targetNodeId: KN_TOPIC_PATTERNS,  edgeType: "part_of",        label: "belongs to prerequisite topic" },
    { id: KE_CAUSAL_PART_OF,     sourceNodeId: KN_CONCEPT_CAUSAL,      targetNodeId: KN_TOPIC_PATTERNS,  edgeType: "part_of",        label: "belongs to prerequisite topic" },
    { id: KE_SYSTEMS_PART_OF,    sourceNodeId: KN_CONCEPT_SYSTEMS,     targetNodeId: KN_TOPIC_SYSTEMS,   edgeType: "part_of",        label: "belongs to systems topic" },
    { id: KE_FEEDBACK_PART_OF,   sourceNodeId: KN_CONCEPT_FEEDBACK,    targetNodeId: KN_TOPIC_SYSTEMS,   edgeType: "part_of",        label: "belongs to systems topic" },
    { id: KE_L_PATTERNS_REINFORCES_PATTERNS, sourceNodeId: KN_LESSON_PATTERNS, targetNodeId: KN_CONCEPT_PATTERN_REC, edgeType: "reinforces", label: "covers pattern recognition" },
    { id: KE_L_PATTERNS_REINFORCES_CAUSAL,   sourceNodeId: KN_LESSON_PATTERNS, targetNodeId: KN_CONCEPT_CAUSAL,      edgeType: "reinforces", label: "covers causal links" },
    { id: KE_L_SYSTEMS_REINFORCES_SYSTEMS,   sourceNodeId: KN_LESSON_SYSTEMS,  targetNodeId: KN_CONCEPT_SYSTEMS,     edgeType: "reinforces", label: "covers systems thinking" },
    { id: KE_L_SYSTEMS_REINFORCES_FEEDBACK,  sourceNodeId: KN_LESSON_SYSTEMS,  targetNodeId: KN_CONCEPT_FEEDBACK,    edgeType: "reinforces", label: "covers feedback loops" },
    { id: KE_PATTERNS_PREREQ_SYSTEMS,        sourceNodeId: KN_CONCEPT_PATTERN_REC, targetNodeId: KN_CONCEPT_SYSTEMS,  edgeType: "prerequisite_of", label: "supports systems thinking" },
    { id: KE_CAUSAL_PREREQ_FEEDBACK,         sourceNodeId: KN_CONCEPT_CAUSAL,      targetNodeId: KN_CONCEPT_FEEDBACK, edgeType: "prerequisite_of", label: "supports feedback reasoning" },
    { id: KE_SYSTEMS_RELATES_FEEDBACK,       sourceNodeId: KN_CONCEPT_SYSTEMS,     targetNodeId: KN_CONCEPT_FEEDBACK, edgeType: "relates_to",      label: "closely connected concept" }
  ];

  for (const edge of knowledgeEdges) {
    await prisma.knowledgeEdgeRecord.upsert({
      where: { id: edge.id },
      update: edge,
      create: edge
    });
  }

  console.log("Content seed complete — topics, lessons, content items, and knowledge graph created with stable UUIDs");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
