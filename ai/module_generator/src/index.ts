import { randomUUID } from "node:crypto";
import type {
  KnowledgeNode,
  ParsedMaterialStructure,
  TeachingModuleSection
} from "@cumbre/types";

export function suggestModuleSections(input: {
  parsedStructure: ParsedMaterialStructure;
  conceptMatches: KnowledgeNode[];
}): TeachingModuleSection[] {
  const conceptLead = input.conceptMatches[0]?.title ?? input.parsedStructure.concepts[0] ?? "concepto central";
  const exampleLead = input.parsedStructure.examples[0] ?? "Usa una situacion concreta del material cargado.";
  const exerciseLead = input.parsedStructure.exercises[0] ?? "Redacta un desafio corto a partir del material cargado.";

  return [
    {
      id: randomUUID(),
      kind: "motivation",
      title: "Motivacion",
      summary: `Por que ${conceptLead} importa en el contexto actual del aula.`,
      activityPrompt: exampleLead
    },
    {
      id: randomUUID(),
      kind: "concept_introduction",
      title: "Introduccion al concepto",
      summary: `Introduce ${conceptLead} usando la estructura analizada del material.`,
      activityPrompt: input.parsedStructure.sections[0]?.content
    },
    {
      id: randomUUID(),
      kind: "guided_practice",
      title: "Practica guiada",
      summary: "Acompana a los estudiantes a traves de un ejemplo estructurado.",
      activityPrompt: exampleLead
    },
    {
      id: randomUUID(),
      kind: "exploration",
      title: "Exploracion",
      summary: "Invita a los estudiantes a conectar el concepto con un contexto nuevo.",
      activityPrompt: input.parsedStructure.sections[1]?.content
    },
    {
      id: randomUUID(),
      kind: "challenge_problem",
      title: "Problema desafio",
      summary: "Aumenta la complejidad y exige transferencia.",
      activityPrompt: exerciseLead
    },
    {
      id: randomUUID(),
      kind: "assessment",
      title: "Evaluacion",
      summary: "Comprueba la comprension con una evaluacion formativa breve.",
      activityPrompt: "Usa el cuestionario generado como base o una evaluacion redactada por el docente."
    }
  ];
}
