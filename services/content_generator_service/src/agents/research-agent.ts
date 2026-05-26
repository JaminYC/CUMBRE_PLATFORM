// services/content_generator_service/src/agents/research-agent.ts
import Anthropic from "@anthropic-ai/sdk";
import type { JobDepth, JobSource } from "../repositories/generation-job-repository.js";

export interface ResearchSection {
  heading: string;
  content: string;
  keyPoints: string[];
}

export interface ResearchOutput {
  title: string;
  abstract: string;
  sections: ResearchSection[];
  bibliography: string[];
  fullText: string; // texto plano para enviar a NotebookLM
}

export interface ResearchInput {
  topic: string;
  depth: JobDepth;
  sources: JobSource[];
}

const SYSTEM_PROMPT = `Eres un investigador académico experto. Genera investigaciones estructuradas en español.
Responde ÚNICAMENTE con JSON válido, sin texto adicional, sin markdown, sin bloques de código.`;

function buildUserPrompt(input: ResearchInput): string {
  const depthInstruction = input.depth === "summary"
    ? "Genera un resumen conciso con 2-3 secciones (1-2 párrafos cada una)."
    : "Genera una investigación profunda con 5-8 secciones detalladas (3-5 párrafos cada una).";

  const sourcesText = input.sources
    .filter(s => s.type === "text")
    .map(s => s.data)
    .join("\n\n---\n\n");

  const sourcesSection = sourcesText
    ? `\n\nFUENTES ADICIONALES:\n${sourcesText}`
    : "";

  return `TEMA: ${input.topic}

${depthInstruction}

Devuelve JSON con exactamente esta estructura:
{
  "title": "Título académico",
  "abstract": "Resumen ejecutivo 2-3 oraciones",
  "sections": [
    { "heading": "Nombre", "content": "Contenido completo", "keyPoints": ["punto 1", "punto 2"] }
  ],
  "bibliography": ["Fuente APA 1", "Fuente APA 2"],
  "fullText": "Todo el contenido del documento en texto plano corrido, sin formato, para usar como fuente en NotebookLM"
}${sourcesSection}`;
}

export class ResearchAgent {
  constructor(private readonly anthropic: Anthropic) {}

  async research(input: ResearchInput): Promise<ResearchOutput> {
    const response = await this.anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: input.depth === "summary" ? 2000 : 6000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(input) }],
    });

    const text = response.content
      .filter(b => b.type === "text")
      .map(b => (b as { type: "text"; text: string }).text)
      .join("");

    let parsed: ResearchOutput;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("ResearchAgent: invalid JSON from Claude");
    }

    if (!parsed.title || !Array.isArray(parsed.sections) || !parsed.fullText) {
      throw new Error("ResearchAgent: invalid JSON from Claude");
    }

    return parsed;
  }
}
