import { randomUUID } from "node:crypto";
import {
  buildFallbackGenerationMetadata,
  generateJsonObject
} from "@cumbre/llm-runtime";
import { suggestModuleSections } from "@cumbre/module-generator";
import { retrieveModuleGenerationContext } from "@cumbre/retrieval-engine";
import type {
  GeneratedModuleProposal,
  KnowledgeNode,
  Lesson,
  ParsedMaterialStructure,
  TeachingModule,
  TeachingModuleSection
} from "@cumbre/types";

export async function buildModuleProposal(input: {
  teacherId: string;
  materialId: string;
  parsedStructure: ParsedMaterialStructure;
  conceptMatches: KnowledgeNode[];
  supportingLessons: Lesson[];
  approve?: boolean;
}): Promise<GeneratedModuleProposal> {
  const sections = suggestModuleSections({
    parsedStructure: input.parsedStructure,
    conceptMatches: input.conceptMatches
  });
  const fallbackModule: TeachingModule = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    teacherId: input.teacherId,
    materialId: input.materialId,
    title: `${input.parsedStructure.title} module`,
    summary: `Modulo de aula generado con IA y contextualizado en ${input.parsedStructure.title}.`,
    status: input.approve ? "approved" : "proposed",
    conceptNodeIds: input.conceptMatches.map((concept) => concept.id),
    lessonIds: input.supportingLessons.map((lesson) => lesson.id),
    sections,
    suggestedTopicTitles: input.parsedStructure.suggestedTopicTitles
  };
  const retrievalContext = retrieveModuleGenerationContext({
    parsedStructure: input.parsedStructure,
    conceptMatches: input.conceptMatches,
    supportingLessons: input.supportingLessons
  });
  const llmResult = await generateJsonObject<{
    title?: string;
    summary?: string;
    suggestedTopicTitles?: string[];
    sections?: Array<{
      kind?: string;
      title?: string;
      summary?: string;
      activityPrompt?: string;
    }>;
  }>({
    taskName: "module_builder",
    grounding: retrievalContext,
    systemInstructions: [
      "Genera una propuesta de modulo de aula contextualizada.",
      "Devuelve JSON con las claves: title, summary, suggestedTopicTitles, sections.",
      "Las secciones deben mantenerse alineadas con el contexto educativo recuperado y la secuencia pedagogica.",
      "Responde en espanol."
    ],
    userInstruction: [
      `ID del docente: ${input.teacherId}`,
      `ID del material: ${input.materialId}`,
      `Modo de aprobacion: ${input.approve ? "approved" : "proposed"}`
    ].join("\n"),
    parse: (value) =>
      (value ?? {}) as {
        title?: string;
        summary?: string;
        suggestedTopicTitles?: string[];
        sections?: Array<{
          kind?: string;
          title?: string;
          summary?: string;
          activityPrompt?: string;
        }>;
      }
  });

  if (!llmResult.ok) {
    return {
      module: fallbackModule,
      supportingLessons: input.supportingLessons,
      conceptMatches: input.conceptMatches,
      generationMetadata: buildFallbackGenerationMetadata({
        grounding: retrievalContext,
        error: llmResult.error
      })
    };
  }
  const module: TeachingModule = {
    ...fallbackModule,
    title: normalizeOptionalText(llmResult.data.title) || fallbackModule.title,
    summary: normalizeOptionalText(llmResult.data.summary) || fallbackModule.summary,
    sections: normalizeModuleSections(llmResult.data.sections, fallbackModule.sections),
    suggestedTopicTitles: normalizeStringList(
      llmResult.data.suggestedTopicTitles,
      fallbackModule.suggestedTopicTitles ?? []
    )
  };

  return {
    module,
    supportingLessons: input.supportingLessons,
    conceptMatches: input.conceptMatches,
    generationMetadata: llmResult.metadata
  };
}

function normalizeModuleSections(
  sections:
    | Array<{
        kind?: string;
        title?: string;
        summary?: string;
        activityPrompt?: string;
      }>
    | undefined,
  fallbackSections: TeachingModuleSection[]
) {
  const validKinds = new Set([
    "motivation",
    "concept_introduction",
    "guided_practice",
    "exploration",
    "challenge_problem",
    "assessment"
  ]);
  const normalizedSections: TeachingModuleSection[] = [];

  for (const section of sections ?? []) {
    const kind = validKinds.has(section.kind ?? "")
      ? (section.kind as TeachingModuleSection["kind"])
      : undefined;
    const title = normalizeOptionalText(section.title) || "";
    const summary = normalizeOptionalText(section.summary) || "";

    if (!kind || !title || !summary) {
      continue;
    }

    normalizedSections.push({
      id: randomUUID(),
      kind,
      title,
      summary,
      activityPrompt: normalizeOptionalText(section.activityPrompt)
    });
  }

  return normalizedSections.length ? normalizedSections : fallbackSections;
}

function normalizeStringList(values: string[] | undefined, fallbackValues: string[]) {
  const normalizedValues = (values ?? [])
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean)
    .slice(0, 6);

  return normalizedValues.length ? normalizedValues : fallbackValues;
}

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}
