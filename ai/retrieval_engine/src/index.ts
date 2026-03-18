import type {
  RetrievedContextBundle,
  TutorContextSnippet,
  TutorReference
} from "@cumbre/types";

export const moduleName = "retrieval_engine";

export function describeModule(): string {
  return "Provides hybrid retrieval, ranking, and prompt assembly for tutor grounding and adaptive reasoning.";
}

export { retrieveAdaptiveContext } from "./adaptive-retrieval.js";
export {
  retrieveAssessmentGenerationContext,
  retrieveMaterialParsingContext,
  retrieveModuleGenerationContext
} from "./authoring-retrieval.js";
export { assembleTutorPrompt } from "./prompt-assembly.js";
export { retrieveTutorContext } from "./tutor-retrieval.js";
export type { AdaptiveRetrievalInput } from "./adaptive-retrieval.js";
export type { TutorRetrievalInput } from "./tutor-retrieval.js";

export function toTutorReferences(
  retrievedContext: RetrievedContextBundle
): TutorReference[] {
  return retrievedContext.items
    .filter((item) => item.entityType && item.entityId)
    .slice(0, 4)
    .map((item) => ({
      entityType: toReferenceEntityType(item.entityType ?? "lesson"),
      entityId: item.entityId!,
      label: item.title,
      excerpt: item.content
    }));
}

export function toTutorContextSnippets(
  retrievedContext: RetrievedContextBundle
): TutorContextSnippet[] {
  return retrievedContext.items.slice(0, 6).map((item) => ({
    id: item.id,
    snippetType: toSnippetType(item.sourceType),
    title: item.title,
    content: item.content,
    entityType: toSnippetEntityType(item.entityType),
    entityId: item.entityId ?? item.id
  }));
}

function toReferenceEntityType(entityType: string) {
  if (
    entityType === "lesson" ||
    entityType === "topic" ||
    entityType === "learning_path" ||
    entityType === "concept" ||
    entityType === "content_item"
  ) {
    return entityType;
  }

  return "lesson";
}

function toSnippetType(sourceType: string): TutorContextSnippet["snippetType"] {
  if (sourceType === "tutor_memory") {
    return "conversation_memory";
  }

  if (sourceType === "adaptive_signal") {
    return "adaptive_guidance";
  }

  if (sourceType === "progress_signal") {
    return "progress_signal";
  }

  return "retrieved_context";
}

function toSnippetEntityType(
  entityType: string | undefined
): TutorContextSnippet["entityType"] {
  if (
    entityType === "lesson" ||
    entityType === "topic" ||
    entityType === "learning_path" ||
    entityType === "concept" ||
    entityType === "content_item"
  ) {
    return entityType;
  }

  return "lesson";
}
