import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadDotEnv } from "dotenv";
import type {
  AiGenerationMetadata,
  LlmProviderError,
  RetrievedContextBundle
} from "@cumbre/types";

export interface LlmProviderSettings {
  provider: "openai_compatible";
  apiKey?: string;
  model: string;
  baseUrl: string;
}

export interface JsonGenerationInput<T> {
  taskName: string;
  grounding: RetrievedContextBundle;
  systemInstructions: string[];
  userInstruction: string;
  parse: (value: unknown) => T;
  temperature?: number;
}

export type JsonGenerationResult<T> =
  | {
      ok: true;
      data: T;
      rawText: string;
      metadata: AiGenerationMetadata;
    }
  | {
      ok: false;
      error: LlmProviderError;
      metadata: AiGenerationMetadata;
    };

let rootEnvLoaded = false;

export function ensureRootEnvLoaded() {
  if (rootEnvLoaded) {
    return;
  }

  const moduleDir = dirname(fileURLToPath(import.meta.url));
  const rootEnvPath = resolve(moduleDir, "../../../.env");

  if (existsSync(rootEnvPath)) {
    loadDotEnv({
      path: rootEnvPath,
      override: false
    });
  }

  rootEnvLoaded = true;
}

export function resolveLlmProviderSettings(
  env: NodeJS.ProcessEnv = process.env
): LlmProviderSettings {
  ensureRootEnvLoaded();

  return {
    provider: "openai_compatible",
    apiKey: env.OPENAI_API_KEY,
    model: env.OPENAI_MODEL?.trim() || "gpt-4o-mini",
    baseUrl: normalizeBaseUrl(env.OPENAI_BASE_URL?.trim() || "https://api.openai.com/v1")
  };
}

export function buildFallbackGenerationMetadata(input: {
  grounding: RetrievedContextBundle;
  error: LlmProviderError;
  settings?: LlmProviderSettings;
}): AiGenerationMetadata {
  const settings = input.settings ?? resolveLlmProviderSettings();

  return {
    mode: "fallback",
    provider: settings.provider,
    model: settings.model,
    groundedBy: input.grounding.items.slice(0, 6).map(formatGroundingLabel),
    error: input.error
  };
}

export async function generateJsonObject<T>(
  input: JsonGenerationInput<T>
): Promise<JsonGenerationResult<T>> {
  const settings = resolveLlmProviderSettings();
  const llmAllowedInTests = process.env.CUMBRE_ENABLE_LLM_IN_TESTS === "true";

  if (process.env.NODE_ENV === "test" && !llmAllowedInTests) {
    const error = createProviderError({
      code: "LLM_PROVIDER_DISABLED",
      message:
        "The external LLM provider is disabled during automated tests. Falling back to the local grounded baseline.",
      settings
    });

    return {
      ok: false,
      error,
      metadata: buildFallbackGenerationMetadata({
        grounding: input.grounding,
        error,
        settings
      })
    };
  }

  if (!settings.apiKey?.trim()) {
    const error = createProviderError({
      code: "LLM_API_KEY_MISSING",
      message:
        "OPENAI_API_KEY is not configured. Falling back to the local grounded baseline.",
      settings
    });

    return {
      ok: false,
      error,
      metadata: buildFallbackGenerationMetadata({
        grounding: input.grounding,
        error,
        settings
      })
    };
  }

  try {
    const response = await fetch(`${settings.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${settings.apiKey}`
      },
      body: JSON.stringify({
        model: settings.model,
        temperature: input.temperature ?? 0.3,
        messages: [
          {
            role: "system",
            content: [
              "You are part of the CUMBRE educational platform.",
              "Always stay grounded in the retrieved context.",
              "Do not invent concepts, lessons, or references that are not present in the grounding.",
              "Return only valid JSON.",
              ...input.systemInstructions
            ].join("\n")
          },
          {
            role: "user",
            content: [
              `Task: ${input.taskName}`,
              "Grounding explanation:",
              ...input.grounding.explanation.map((line) => `- ${line}`),
              "Retrieved context:",
              ...input.grounding.items.map(
                (item, index) =>
                  `${index + 1}. ${item.title} [${item.sourceType}] score=${item.score}: ${item.content}`
              ),
              "User instruction:",
              input.userInstruction
            ].join("\n")
          }
        ]
      })
    });

    if (!response.ok) {
      const responseBody = await safeReadText(response);
      const error = createProviderError({
        code: "LLM_REQUEST_FAILED",
        message: `OpenAI-compatible request failed with status ${response.status}.`,
        settings,
        status: response.status,
        details: responseBody
      });

      return {
        ok: false,
        error,
        metadata: buildFallbackGenerationMetadata({
          grounding: input.grounding,
          error,
          settings
        })
      };
    }

    const payload = (await response.json()) as {
      choices?: Array<{
        message?: {
          content?: string | Array<{ type?: string; text?: string }>;
        };
      }>;
    };
    const rawText = extractMessageText(payload);
    const parsedValue = input.parse(parseJsonPayload(rawText));

    return {
      ok: true,
      data: parsedValue,
      rawText,
      metadata: {
        mode: "llm",
        provider: settings.provider,
        model: settings.model,
        groundedBy: input.grounding.items.slice(0, 6).map(formatGroundingLabel)
      }
    };
  } catch (error) {
    const providerError = createProviderError({
      code: "LLM_INVALID_RESPONSE",
      message: "The LLM provider response could not be parsed into the expected structure.",
      settings,
      details: error instanceof Error ? error.message : "Unknown provider error."
    });

    return {
      ok: false,
      error: providerError,
      metadata: buildFallbackGenerationMetadata({
        grounding: input.grounding,
        error: providerError,
        settings
      })
    };
  }
}

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function createProviderError(input: {
  code: LlmProviderError["code"];
  message: string;
  settings: LlmProviderSettings;
  status?: number;
  details?: string;
}): LlmProviderError {
  return {
    code: input.code,
    provider: input.settings.provider,
    model: input.settings.model,
    message: input.message,
    recoverable: true,
    details:
      input.status !== undefined
        ? `${input.details ?? ""} status=${input.status}`.trim()
        : input.details
  };
}

function formatGroundingLabel(item: RetrievedContextBundle["items"][number]) {
  return `${item.title} [${item.sourceType}]`;
}

function extractMessageText(payload: {
  choices?: Array<{
    message?: {
      content?: string | Array<{ type?: string; text?: string }>;
    };
  }>;
}) {
  const content = payload.choices?.[0]?.message?.content;

  if (typeof content === "string" && content.trim()) {
    return content;
  }

  if (Array.isArray(content)) {
    const collected = content
      .map((part) => (typeof part?.text === "string" ? part.text : ""))
      .join("")
      .trim();

    if (collected) {
      return collected;
    }
  }

  throw new Error("The provider did not return a usable message content payload.");
}

function parseJsonPayload(rawText: string) {
  const trimmed = rawText.trim();

  try {
    return JSON.parse(trimmed);
  } catch {
    const codeFenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);

    if (codeFenceMatch?.[1]) {
      return JSON.parse(codeFenceMatch[1].trim());
    }

    const firstBraceIndex = trimmed.indexOf("{");
    const lastBraceIndex = trimmed.lastIndexOf("}");

    if (firstBraceIndex >= 0 && lastBraceIndex > firstBraceIndex) {
      return JSON.parse(trimmed.slice(firstBraceIndex, lastBraceIndex + 1));
    }
  }

  throw new Error("Unable to extract a valid JSON object from the provider response.");
}

async function safeReadText(response: Response) {
  try {
    return await response.text();
  } catch {
    return "";
  }
}
