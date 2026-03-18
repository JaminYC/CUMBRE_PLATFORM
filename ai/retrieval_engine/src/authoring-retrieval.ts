import type {
  KnowledgeNode,
  Lesson,
  ParsedMaterialStructure,
  RetrievedContextBundle,
  TeachingModule
} from "@cumbre/types";
import { rankCandidates, truncateContent, type RetrievalCandidate } from "./ranking.js";

export function retrieveMaterialParsingContext(input: {
  fileName: string;
  mimeType: string;
  extractedText: string;
  knowledgeNodes?: KnowledgeNode[];
}): RetrievedContextBundle {
  const sectionCandidates = splitIntoSections(input.extractedText).slice(0, 4);
  const conceptMatches = (input.knowledgeNodes ?? [])
    .filter(
      (node) =>
        node.nodeType === "concept" &&
        input.extractedText.toLowerCase().includes(node.title.toLowerCase())
    )
    .slice(0, 5);
  const candidates: RetrievalCandidate[] = [
    {
      id: `${input.fileName}-overview`,
      sourceType: "content_item",
      title: `${input.fileName} overview`,
      content: truncateContent(input.extractedText, 320),
      rationale: "The extracted material text is the primary grounding source for parsing.",
      entityType: "content_item",
      sourceWeight: 0.92
    }
  ];

  for (const [index, section] of sectionCandidates.entries()) {
    candidates.push({
      id: `${input.fileName}-section-${index + 1}`,
      sourceType: "content_item",
      title: index === 0 ? "Opening section" : `Section ${index + 1}`,
      content: section,
      rationale: "Material sections help preserve structure during parsing.",
      entityType: "content_item",
      sourceWeight: 0.74
    });
  }

  for (const concept of conceptMatches) {
    candidates.push({
      id: `${concept.id}-material-concept`,
      sourceType: "concept",
      title: concept.title,
      content: concept.summary ?? concept.title,
      rationale: "Matched knowledge-graph concepts improve concept extraction fidelity.",
      entityType: "concept",
      entityId: concept.id,
      sourceWeight: 0.78
    });
  }

  return rankCandidates({
    query: `${input.fileName} ${input.mimeType} ${truncateContent(input.extractedText, 120)}`,
    strategy: "hybrid_semantic_baseline",
    explanation: [
      "Material parsing retrieval combined extracted text slices with matching concept nodes.",
      "The retrieval bundle keeps the parser grounded in the uploaded material before any LLM refinement."
    ],
    candidates,
    limit: 6
  });
}

export function retrieveModuleGenerationContext(input: {
  parsedStructure: ParsedMaterialStructure;
  conceptMatches: KnowledgeNode[];
  supportingLessons: Lesson[];
}): RetrievedContextBundle {
  const candidates: RetrievalCandidate[] = [];

  for (const section of input.parsedStructure.sections.slice(0, 5)) {
    candidates.push({
      id: section.id,
      sourceType: "content_item",
      title: section.heading,
      content: section.content,
      rationale: "Parsed material sections are the main evidence for module structure.",
      entityType: "content_item",
      sourceWeight: 0.82
    });
  }

  for (const concept of input.conceptMatches.slice(0, 5)) {
    candidates.push({
      id: concept.id,
      sourceType: "concept",
      title: concept.title,
      content: concept.summary ?? concept.title,
      rationale: "Concept matches keep module sections aligned with the knowledge graph.",
      entityType: "concept",
      entityId: concept.id,
      sourceWeight: 0.79
    });
  }

  for (const lesson of input.supportingLessons.slice(0, 4)) {
    candidates.push({
      id: lesson.id,
      sourceType: "related_lesson",
      title: lesson.title,
      content:
        lesson.summary ??
        `${lesson.title} is a related lesson that can support the generated module.`,
      rationale: "Existing lessons provide concrete scaffolding for module reuse and alignment.",
      entityType: "lesson",
      entityId: lesson.id,
      tags: lesson.skillIds,
      sourceWeight: 0.7
    });
  }

  return rankCandidates({
    query: [
      input.parsedStructure.title,
      ...input.parsedStructure.concepts.slice(0, 4),
      ...input.parsedStructure.suggestedLessonTitles.slice(0, 2)
    ].join(" "),
    strategy: "hybrid_semantic_baseline",
    explanation: [
      "Module generation retrieval combined parsed material structure, concept matches, and supporting lessons.",
      "The resulting context bundle keeps the module proposal grounded in both uploaded material and current platform content."
    ],
    candidates,
    limit: 7
  });
}

export function retrieveAssessmentGenerationContext(input: {
  title: string;
  module?: TeachingModule;
  lessonId?: string;
  conceptMatches: KnowledgeNode[];
}): RetrievedContextBundle {
  const candidates: RetrievalCandidate[] = [];

  if (input.module) {
    candidates.push({
      id: `${input.module.id}-overview`,
      sourceType: "content_item",
      title: input.module.title,
      content:
        input.module.summary ??
        `${input.module.title} is the instructional module grounding this quiz.`,
      rationale: "Module summary keeps quiz generation aligned with the teacher-approved instructional sequence.",
      entityType: "content_item",
      sourceWeight: 0.84
    });

    for (const section of input.module.sections.slice(0, 4)) {
      candidates.push({
        id: section.id,
        sourceType: "content_item",
        title: section.title,
        content: `${section.summary} ${section.activityPrompt ?? ""}`.trim(),
        rationale: "Module sections anchor question variety and pedagogical progression.",
        entityType: "content_item",
        sourceWeight: 0.75
      });
    }
  }

  if (input.lessonId) {
    candidates.push({
      id: `${input.lessonId}-lesson-anchor`,
      sourceType: "lesson",
      title: `Lesson ${input.lessonId}`,
      content: `The quiz should stay aligned with lesson ${input.lessonId}.`,
      rationale: "Lesson identity preserves a stable anchor when a full module is not available.",
      entityType: "lesson",
      entityId: input.lessonId,
      sourceWeight: 0.62
    });
  }

  for (const concept of input.conceptMatches.slice(0, 6)) {
    candidates.push({
      id: concept.id,
      sourceType: "concept",
      title: concept.title,
      content: concept.summary ?? concept.title,
      rationale: "Concept matches provide the knowledge targets for quiz questions.",
      entityType: "concept",
      entityId: concept.id,
      sourceWeight: 0.8
    });
  }

  return rankCandidates({
    query: [input.title, ...input.conceptMatches.slice(0, 4).map((concept) => concept.title)].join(
      " "
    ),
    strategy: "hybrid_semantic_baseline",
    explanation: [
      "Assessment retrieval assembled module sections, lesson anchors, and concept nodes.",
      "The bundle keeps generated questions tied to the current instructional plan and concept coverage."
    ],
    candidates,
    limit: 7
  });
}

function splitIntoSections(text: string) {
  return text
    .split(/\n{2,}/)
    .map((section) => truncateContent(section, 240))
    .filter(Boolean);
}
