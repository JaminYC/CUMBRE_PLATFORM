// services/content_generator_service/src/app.ts
import { createClient } from "@supabase/supabase-js";
import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { ResearchAgent } from "./agents/research-agent.js";
import { GenerationPipeline } from "./pipeline/generation-pipeline.js";
import { GeneratorController } from "./controllers/generator-controller.js";
import { HealthController } from "./controllers/health-controller.js";
import { GenerationJobRepository } from "./repositories/generation-job-repository.js";
import { GenerationLimitRepository } from "./repositories/generation-limit-repository.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { NotebookLMClient } from "./clients/notebooklm-client.js";
import { KokoroClient } from "./clients/kokoro-client.js";
import { StorageClient } from "./clients/storage-client.js";
import { generatePdf } from "./generators/pdf-generator.js";
import { generateInfographicFallback } from "./generators/infographic-fallback.js";
import { registerGeneratorRoutes } from "./routes/generator-routes.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import type { ContentGeneratorConfig } from "./config/env.js";
import type { Logger } from "./utils/logger.js";

export interface ContentGeneratorAppDependencies {
  config: ContentGeneratorConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}

export function createContentGeneratorApp({
  config,
  logger,
  authResolver,
}: ContentGeneratorAppDependencies) {
  const prisma = createPrismaClient(config);
  const jobRepo = new GenerationJobRepository(prisma);
  const limitRepo = new GenerationLimitRepository(prisma);

  const researchAgent = new ResearchAgent({
    anthropicApiKey: config.anthropicApiKey,
    openaiApiKey: config.openaiApiKey,
  });
  const notebookLMClient = new NotebookLMClient(config.notebooklmServerUrl);
  const kokoroClient = new KokoroClient(config.kokoroServerUrl);
  const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey);
  const storage = new StorageClient(supabase, "generated-content");

  const pipeline = new GenerationPipeline({
    researchAgent,
    notebookLMClient,
    kokoroClient,
    jobRepo,
    limitRepo,
    storage,
    generatePdf,
    generateInfographicFallback,
  });

  const generatorCtrl = new GeneratorController(pipeline, jobRepo, limitRepo);

  const healthController = new HealthController(
    config.serviceName,
    async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    (error) => {
      logger.error("Content generator service readiness check failed", {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  );

  const authServiceClient = new AuthServiceClient(config.authServiceUrl, logger);

  const resolvedAuthResolver =
    authResolver ??
    ({
      resolveAccess: (req, context) =>
        authServiceClient.resolveActorFromAuthorizationHeader(
          req.headers.authorization,
          context.requestId
        ),
    } satisfies AuthResolver);

  return createRouter(
    [
      ...registerHealthRoutes(healthController),
      ...registerGeneratorRoutes(generatorCtrl),
    ],
    logger,
    {
      authResolver: resolvedAuthResolver,
      requestTimeoutMs: 120_000,
    }
  );
}
