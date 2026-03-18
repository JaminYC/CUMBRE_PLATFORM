import { randomUUID } from "node:crypto";
import {
  buildFallbackGenerationMetadata,
  generateJsonObject
} from "@cumbre/llm-runtime";
import { retrieveAssessmentGenerationContext } from "@cumbre/retrieval-engine";
import type {
  GeneratedQuizProposal,
  KnowledgeNode,
  StudentAttempt,
  TeachingModule,
  TeachingQuiz
} from "@cumbre/types";

export async function generatePedagogicalQuiz(input: {
  teacherId: string;
  title: string;
  module?: TeachingModule;
  lessonId?: string;
  conceptMatches: KnowledgeNode[];
}): Promise<GeneratedQuizProposal> {
  const questions = [
    ...buildQuestions("mechanical", "easy", 5, input.conceptMatches),
    ...buildQuestions("contextual", "medium", 3, input.conceptMatches),
    ...buildQuestions("challenge", "hard", 2, input.conceptMatches)
  ];
  const fallbackQuiz: TeachingQuiz = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    teacherId: input.teacherId,
    moduleId: input.module?.id,
    lessonId: input.lessonId,
    title: input.title,
    summary: "Cuestionario pedagogicamente equilibrado generado desde el contexto de leccion o modulo.",
    questions
  };
  const retrievalContext = retrieveAssessmentGenerationContext({
    title: input.title,
    module: input.module,
    lessonId: input.lessonId,
    conceptMatches: input.conceptMatches
  });
  const llmResult = await generateJsonObject<{
    title?: string;
    summary?: string;
    questions?: Array<{
      questionKind?: string;
      prompt?: string;
      explanation?: string;
      difficulty?: string;
      conceptNodeIds?: string[];
      expectedAnswer?: string;
    }>;
  }>({
    taskName: "assessment_engine",
    grounding: retrievalContext,
    systemInstructions: [
      "Genera un cuestionario pedagogico contextualizado.",
      "Devuelve JSON con las claves: title, summary, questions.",
      "Produce exactamente 10 preguntas: 5 mecanicas faciles, 3 contextuales medias y 2 desafio dificiles.",
      "Responde en espanol."
    ],
    userInstruction: [
      `ID del docente: ${input.teacherId}`,
      `Titulo del cuestionario: ${input.title}`,
      input.module ? `Modulo: ${input.module.title}` : "",
      input.lessonId ? `ID de la leccion: ${input.lessonId}` : ""
    ]
      .filter(Boolean)
      .join("\n"),
    parse: (value) =>
      (value ?? {}) as {
        title?: string;
        summary?: string;
        questions?: Array<{
          questionKind?: string;
          prompt?: string;
          explanation?: string;
          difficulty?: string;
          conceptNodeIds?: string[];
          expectedAnswer?: string;
        }>;
      }
  });

  if (!llmResult.ok) {
    return {
      quiz: fallbackQuiz,
      generationMetadata: buildFallbackGenerationMetadata({
        grounding: retrievalContext,
        error: llmResult.error
      })
    };
  }
  const quiz: TeachingQuiz = {
    ...fallbackQuiz,
    title: normalizeOptionalText(llmResult.data.title) || fallbackQuiz.title,
    summary: normalizeOptionalText(llmResult.data.summary) || fallbackQuiz.summary,
    questions: normalizeQuestions(
      llmResult.data.questions,
      fallbackQuiz.questions,
      input.conceptMatches
    )
  };

  return {
    quiz,
    generationMetadata: llmResult.metadata
  };
}

export function parseExamScanToAttempt(input: {
  studentId: string;
  classroomId?: string;
  quizId?: string;
  answerText?: string;
  ocrTextHint?: string;
}): StudentAttempt {
  const sourceText = input.answerText?.trim() || input.ocrTextHint?.trim() || "";
  const answers = sourceText
    .split(/\r?\n/)
    .map((line, index) => {
      const [questionId, ...rest] = line.split(":");
      return {
        questionId: questionId?.trim() || `question-${index + 1}`,
        answerText: rest.join(":").trim() || line.trim()
      };
    })
    .filter((answer) => answer.answerText);

  return {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    studentId: input.studentId,
    classroomId: input.classroomId,
    quizId: input.quizId,
    source: "scan",
    score: answers.length ? Math.min(100, answers.length * 10) : 0,
    answers,
    teacherVerified: false
  };
}

function buildQuestions(
  questionKind: "mechanical" | "contextual" | "challenge",
  difficulty: "easy" | "medium" | "hard",
  count: number,
  conceptMatches: KnowledgeNode[]
) {
  return Array.from({ length: count }, (_, index) => {
    const concept = conceptMatches[index % Math.max(conceptMatches.length, 1)];
    return {
      id: randomUUID(),
      questionKind,
      prompt: concept
        ? `Como se aplica ${concept.title} en la pregunta ${questionKind} ${index + 1}?`
        : `Resuelve la pregunta ${questionKind} ${index + 1}.`,
      explanation: concept?.summary,
      difficulty,
      conceptNodeIds: concept ? [concept.id] : [],
      expectedAnswer: concept
        ? `El estudiante deberia hacer referencia a ${concept.title}.`
        : "El estudiante deberia dar una respuesta contextualizada."
    };
  });
}

function normalizeQuestions(
  questions:
    | Array<{
        questionKind?: string;
        prompt?: string;
        explanation?: string;
        difficulty?: string;
        conceptNodeIds?: string[];
        expectedAnswer?: string;
      }>
    | undefined,
  fallbackQuestions: TeachingQuiz["questions"],
  conceptMatches: KnowledgeNode[]
) {
  const validKinds = new Set(["mechanical", "contextual", "challenge"]);
  const validDifficulties = new Set(["easy", "medium", "hard"]);
  const normalizedQuestions = (questions ?? [])
    .map((question, index) => ({
      id: randomUUID(),
      questionKind: validKinds.has(question.questionKind ?? "")
        ? (question.questionKind as "mechanical" | "contextual" | "challenge")
        : fallbackQuestions[index]?.questionKind ?? "mechanical",
      prompt: normalizeOptionalText(question.prompt) || fallbackQuestions[index]?.prompt || "",
      explanation:
        normalizeOptionalText(question.explanation) ||
        fallbackQuestions[index]?.explanation,
      difficulty: validDifficulties.has(question.difficulty ?? "")
        ? (question.difficulty as "easy" | "medium" | "hard")
        : fallbackQuestions[index]?.difficulty ?? "easy",
      conceptNodeIds:
        normalizeIdList(question.conceptNodeIds) ||
        fallbackQuestions[index]?.conceptNodeIds ||
        buildFallbackConceptNodeIds(index, conceptMatches),
      expectedAnswer:
        normalizeOptionalText(question.expectedAnswer) ||
        fallbackQuestions[index]?.expectedAnswer ||
        "El estudiante deberia dar una respuesta contextualizada."
    }))
    .filter((question) => question.prompt.length > 0);

  return normalizedQuestions.length === 10 ? normalizedQuestions : fallbackQuestions;
}

function buildFallbackConceptNodeIds(index: number, conceptMatches: KnowledgeNode[]) {
  if (!conceptMatches.length) {
    return [];
  }

  return [conceptMatches[index % conceptMatches.length].id];
}

function normalizeIdList(value: unknown) {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const normalizedValues = value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .slice(0, 3);

  return normalizedValues.length ? normalizedValues : undefined;
}

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}
