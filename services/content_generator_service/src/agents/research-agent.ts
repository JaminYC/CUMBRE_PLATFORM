// services/content_generator_service/src/agents/research-agent.ts
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

export interface ResearchAgentConfig {
  anthropicApiKey: string;
  openaiApiKey: string;
}

const SYSTEM_PROMPT = `Eres un investigador académico experto. Genera investigaciones estructuradas en español.
Responde ÚNICAMENTE con JSON válido, sin texto adicional, sin markdown, sin bloques de código.`;

// Límite de caracteres para fuentes externas (~20k tokens ≈ 80k chars; dejamos margen)
const MAX_SOURCES_CHARS = 60_000;

function sanitizeSources(sources: JobSource[]): string {
  const parts: string[] = [];

  for (const s of sources) {
    if (s.type !== "text") continue;
    const data: string = s.data ?? "";
    if (!data.trim()) continue;

    // Salvaguarda: si por alguna razón llega base64 antiguo, descartarlo
    if (data.startsWith("[PDF:") && data.includes("|base64:")) {
      const nameMatch = /\[PDF:([^|]+)\|/.exec(data);
      parts.push(`[Archivo PDF: ${nameMatch?.[1] ?? "documento.pdf"} — texto no extraído]`);
      continue;
    }

    parts.push(data);
  }

  const joined = parts.join("\n\n---\n\n");
  return joined.length > MAX_SOURCES_CHARS
    ? joined.slice(0, MAX_SOURCES_CHARS) + "\n\n[... contenido recortado por límite de contexto ...]"
    : joined;
}

function buildUserPrompt(input: ResearchInput): string {
  const depthInstruction = input.depth === "summary"
    ? "Genera un resumen conciso con 2-3 secciones (1-2 párrafos cada una)."
    : "Genera una investigación profunda con 5-8 secciones detalladas (3-5 párrafos cada una).";

  const sourcesText = sanitizeSources(input.sources);
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

function parseResearchJson(text: string): ResearchOutput {
  let parsed: ResearchOutput;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("ResearchAgent: invalid JSON from AI provider");
  }

  if (!parsed.title || !Array.isArray(parsed.sections) || !parsed.fullText) {
    throw new Error("ResearchAgent: invalid JSON structure from AI provider");
  }

  return parsed;
}

async function callAnthropic(
  apiKey: string,
  input: ResearchInput
): Promise<ResearchOutput> {
  // Importación dinámica para no fallar si el paquete no está disponible
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: input.depth === "summary" ? 2000 : 6000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: buildUserPrompt(input) }],
  });

  const text = response.content
    .filter(b => b.type === "text")
    .map(b => (b as { type: "text"; text: string }).text)
    .join("");

  return parseResearchJson(text);
}

async function callOpenAI(
  apiKey: string,
  input: ResearchInput
): Promise<ResearchOutput> {
  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey });

  // gpt-4o-mini: más rápido y barato, cumple bien para investigación académica
  // gpt-4o: mejor calidad pero ~2-3x más lento (puede timeout en Tier 1)
  const model = input.depth === "deep" ? "gpt-4o-mini" : "gpt-4o";
  const response = await client.chat.completions.create({
    model,
    max_tokens: input.depth === "summary" ? 1500 : 4000,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: buildUserPrompt(input) },
    ],
    response_format: { type: "json_object" },
  });

  const text = response.choices[0]?.message?.content ?? "";
  return parseResearchJson(text);
}

export class ResearchAgent {
  constructor(private readonly config: ResearchAgentConfig) {}

  async research(input: ResearchInput): Promise<ResearchOutput> {
    const hasAnthropic = Boolean(this.config.anthropicApiKey);
    const hasOpenAI = Boolean(this.config.openaiApiKey);

    if (!hasAnthropic && !hasOpenAI) {
      throw new Error("ResearchAgent: no AI provider API key configured (ANTHROPIC_API_KEY or OPENAI_API_KEY)");
    }

    // Intentar Anthropic primero si está disponible
    if (hasAnthropic) {
      try {
        return await callAnthropic(this.config.anthropicApiKey, input);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        // Si falla por créditos / autenticación / rate-limit → fallback a OpenAI
        if (hasOpenAI && (msg.includes("credit") || msg.includes("401") || msg.includes("balance") || msg.includes("quota") || msg.includes("529") || msg.includes("overloaded"))) {
          console.warn("[ResearchAgent] Anthropic failed, falling back to OpenAI:", msg);
          return await callOpenAI(this.config.openaiApiKey, input);
        }
        throw err;
      }
    }

    // Solo OpenAI disponible
    return await callOpenAI(this.config.openaiApiKey, input);
  }
}
