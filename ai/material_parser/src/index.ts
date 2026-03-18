import { randomUUID } from "node:crypto";
import {
  buildFallbackGenerationMetadata,
  generateJsonObject
} from "@cumbre/llm-runtime";
import { retrieveMaterialParsingContext } from "@cumbre/retrieval-engine";
import type { KnowledgeNode, ParsedMaterialStructure, TeachingMaterialKind } from "@cumbre/types";

export async function parseTeachingMaterial(input: {
  fileName: string;
  mimeType: string;
  textContent?: string;
  ocrTextHint?: string;
  knowledgeNodes?: KnowledgeNode[];
}): Promise<{
  materialKind: TeachingMaterialKind;
  parsedText: string;
  parsedStructure: ParsedMaterialStructure;
}> {
  const parsedText =
    input.textContent?.trim() ||
    input.ocrTextHint?.trim() ||
    `Material cargado: ${input.fileName}`;
  const materialKind = resolveMaterialKind(input.mimeType, input.fileName);
  const sections = parsedText
    .split(/\n{2,}/)
    .map((content, index) => ({
      id: randomUUID(),
      heading: index === 0 ? "Resumen general" : `Seccion ${index + 1}`,
      content: content.trim()
    }))
    .filter((section) => section.content);
  const concepts = extractConcepts(parsedText, input.knowledgeNodes ?? []);
  const examples = sections
    .filter((section) => /example|case|scenario/i.test(section.content))
    .map((section) => section.content)
    .slice(0, 4);
  const exercises = sections
    .filter((section) => /exercise|practice|problem|question/i.test(section.content))
    .map((section) => section.content)
    .slice(0, 4);
  const fallbackStructure: ParsedMaterialStructure = {
    title: deriveTitle(input.fileName, sections[0]?.content),
    sections,
    concepts,
    examples,
    exercises,
    suggestedTopicTitles: concepts.slice(0, 3).map((concept) => `Fundamentos de ${concept}`),
    suggestedLessonTitles: sections.slice(0, 3).map((section) => section.heading)
  };
  const retrievalContext = retrieveMaterialParsingContext({
    fileName: input.fileName,
    mimeType: input.mimeType,
    extractedText: parsedText,
    knowledgeNodes: input.knowledgeNodes
  });
  const llmResult = await generateJsonObject<{
    title?: string;
    sections?: Array<{ heading?: string; content?: string }>;
    concepts?: string[];
    examples?: string[];
    exercises?: string[];
    suggestedTopicTitles?: string[];
    suggestedLessonTitles?: string[];
  }>({
    taskName: "material_parser",
    grounding: retrievalContext,
    systemInstructions: [
      "Analiza material educativo cargado y conviertelo en un objeto JSON estructurado y contextualizado.",
      "Devuelve JSON con las claves: title, sections, concepts, examples, exercises, suggestedTopicTitles, suggestedLessonTitles.",
      "Cada seccion debe contener heading y content.",
      "Responde en espanol."
    ],
    userInstruction: [
      `Nombre del archivo: ${input.fileName}`,
      `Tipo de material: ${materialKind}`,
      "Mantén la estructura concisa y util para el docente."
    ].join("\n"),
    parse: (value) =>
      (value ?? {}) as {
        title?: string;
        sections?: Array<{ heading?: string; content?: string }>;
        concepts?: string[];
        examples?: string[];
        exercises?: string[];
        suggestedTopicTitles?: string[];
        suggestedLessonTitles?: string[];
      }
  });

  if (!llmResult.ok) {
    return {
      materialKind,
      parsedText,
      parsedStructure: {
        ...fallbackStructure,
        generationMetadata: buildFallbackGenerationMetadata({
          grounding: retrievalContext,
          error: llmResult.error
        })
      }
    };
  }

  return {
    materialKind,
    parsedText,
    parsedStructure: {
      title: normalizeOptionalText(llmResult.data.title) || fallbackStructure.title,
      sections: normalizeParsedSections(llmResult.data.sections, fallbackStructure.sections),
      concepts: normalizeStringList(llmResult.data.concepts, fallbackStructure.concepts),
      examples: normalizeStringList(llmResult.data.examples, fallbackStructure.examples),
      exercises: normalizeStringList(llmResult.data.exercises, fallbackStructure.exercises),
      suggestedTopicTitles: normalizeStringList(
        llmResult.data.suggestedTopicTitles,
        fallbackStructure.suggestedTopicTitles
      ),
      suggestedLessonTitles: normalizeStringList(
        llmResult.data.suggestedLessonTitles,
        fallbackStructure.suggestedLessonTitles
      ),
      generationMetadata: llmResult.metadata
    }
  };
}

function resolveMaterialKind(mimeType: string, fileName: string): TeachingMaterialKind {
  if (/pdf/i.test(mimeType) || /\.pdf$/i.test(fileName)) {
    return "pdf";
  }
  if (/image/i.test(mimeType)) {
    return "image";
  }
  if (/presentation|powerpoint/i.test(mimeType)) {
    return "slides";
  }
  if (/worksheet/i.test(fileName)) {
    return "worksheet";
  }
  return "text";
}

function deriveTitle(fileName: string, firstSection?: string) {
  return firstSection?.split(/\n/)[0]?.slice(0, 80) || fileName.replace(/\.[^.]+$/, "");
}

function extractConcepts(text: string, knowledgeNodes: KnowledgeNode[]) {
  const lowered = text.toLowerCase();
  const matches = knowledgeNodes
    .filter((node) => node.nodeType === "concept" && lowered.includes(node.title.toLowerCase()))
    .map((node) => node.title);

  if (matches.length) {
    return [...new Set(matches)];
  }

  return text
    .split(/[^A-Za-z0-9]+/)
    .filter((token) => token.length > 6)
    .slice(0, 6);
}

function normalizeParsedSections(
  sections: Array<{ heading?: string; content?: string }> | undefined,
  fallbackSections: ParsedMaterialStructure["sections"]
) {
  const normalizedSections = (sections ?? [])
    .map((section, index) => ({
      id: randomUUID(),
      heading: normalizeOptionalText(section.heading) || `Seccion ${index + 1}`,
      content: normalizeOptionalText(section.content) || ""
    }))
    .filter((section) => section.content.length > 0);

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
