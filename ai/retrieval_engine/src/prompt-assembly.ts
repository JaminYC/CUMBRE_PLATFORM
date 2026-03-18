import type {
  LearningPath,
  Lesson,
  RetrievedContextBundle,
  Topic,
  TutorAction
} from "@cumbre/types";

export interface TutorPromptAssembly {
  query: string;
  contextOutline: string[];
  groundingRules: string[];
  continuitySummary?: string;
}

export function assembleTutorPrompt(input: {
  action: TutorAction;
  prompt?: string;
  lesson: Lesson;
  topic: Topic;
  learningPath?: LearningPath;
  retrievedContext: RetrievedContextBundle;
}): TutorPromptAssembly {
  const tutorGoal =
    input.action === "summarize_lesson"
      ? "Resume la leccion con fuerte apoyo en el contexto recuperado."
      : input.action === "give_hint"
        ? "Ofrece una pista sin revelar la respuesta completa."
        : input.action === "ask_question"
          ? "Responde la pregunta del estudiante con referencias contextualizadas."
          : "Explica el concepto de forma clara y concreta.";

  const continuitySummary = input.retrievedContext.items
    .filter((item) => item.sourceType === "tutor_memory")
    .slice(0, 2)
    .map((item) => `${item.title}: ${item.content}`)
    .join(" ");

  return {
    query: input.retrievedContext.query,
    contextOutline: [
      tutorGoal,
      `Leccion: ${input.lesson.title}.`,
      `Tema: ${input.topic.title}.`,
      input.learningPath ? `Ruta de aprendizaje: ${input.learningPath.title}.` : "",
      ...input.retrievedContext.items.map(
        (item) => `${item.title} [${item.sourceType}]: ${item.content}`
      )
    ].filter(Boolean),
    groundingRules: [
      "Mantente anclado al contexto recuperado antes de generalizar.",
      "Si aparecen conceptos prerequisito en la recuperacion, mencionarlos explicitamente.",
      "Prefiere continuidad con los turnos recientes del tutor cuando aclaren la confusion actual del estudiante."
    ],
    continuitySummary: continuitySummary || undefined
  };
}
