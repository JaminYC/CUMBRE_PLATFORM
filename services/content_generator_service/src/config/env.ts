// services/content_generator_service/src/config/env.ts
export interface ContentGeneratorConfig {
  serviceName: "content_generator_service";
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  directUrl: string;
  anthropicApiKey: string;
  openaiApiKey: string;        // opcional — fallback cuando Anthropic no está disponible
  notebooklmServerUrl: string;
  kokoroServerUrl: string;
  supabaseUrl: string;
  supabaseServiceKey: string;
  authServiceUrl: string;
}

function required(key: string, env: NodeJS.ProcessEnv): string {
  const val = env[key];
  if (!val) throw new Error(`${key} is required for content_generator_service`);
  return val;
}

function resolvePort(raw: string | undefined, fallback: number): number {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadContentGeneratorConfig(
  env: NodeJS.ProcessEnv = process.env
): ContentGeneratorConfig {
  return {
    serviceName: "content_generator_service",
    port: resolvePort(env.CONTENT_GENERATOR_PORT ?? env.PORT, 3004),
    nodeEnv: env.NODE_ENV ?? "development",
    databaseUrl: required("DATABASE_URL", env),
    directUrl: required("DIRECT_URL", env),
    anthropicApiKey: env.ANTHROPIC_API_KEY ?? "",
    openaiApiKey: env.OPENAI_API_KEY ?? "",
    notebooklmServerUrl: env.NOTEBOOKLM_SERVER_URL ?? "http://localhost:8881",
    kokoroServerUrl: env.KOKORO_SERVER_URL ?? "http://localhost:8880",
    supabaseUrl: required("SUPABASE_URL", env),
    supabaseServiceKey: required("SUPABASE_SERVICE_KEY", env),
    authServiceUrl: env.AUTH_SERVICE_URL ?? "http://localhost:3001",
  };
}
