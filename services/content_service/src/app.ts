import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { generatePedagogicalQuiz, parseExamScanToAttempt } from "@cumbre/assessment-engine";
import { parseTeachingMaterial } from "@cumbre/material-parser";
import { buildModuleProposal } from "@cumbre/module-builder";
import { ContentController } from "./controllers/content-controller.js";
import { HealthController } from "./controllers/health-controller.js";
import type { ContentServiceConfig } from "./config/env.js";
import { ContentItemRepository } from "./repositories/content-item-repository.js";
import { KnowledgeGraphRepository } from "./repositories/knowledge-graph-repository.js";
import { LessonRepository } from "./repositories/lesson-repository.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { TeachingMaterialRepository } from "./repositories/teaching-material-repository.js";
import { TeachingModuleRepository } from "./repositories/teaching-module-repository.js";
import { TeachingQuizRepository } from "./repositories/teaching-quiz-repository.js";
import { StudentAttemptRepository } from "./repositories/student-attempt-repository.js";
import { TopicRepository } from "./repositories/topic-repository.js";
import { registerContentRoutes } from "./routes/content-routes.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { ContentApplicationService } from "./services/content-service.js";
import type { Logger } from "./utils/logger.js";

export interface ContentAppDependencies {
  config: ContentServiceConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}

export function createContentApp({
  config,
  logger,
  authResolver
}: ContentAppDependencies) {
  const prisma = createPrismaClient(config);
  const topicRepository = new TopicRepository(prisma);
  const lessonRepository = new LessonRepository(prisma);
  const contentItemRepository = new ContentItemRepository(prisma);
  const knowledgeGraphRepository = new KnowledgeGraphRepository(prisma);
  const teachingMaterialRepository = new TeachingMaterialRepository(prisma);
  const teachingModuleRepository = new TeachingModuleRepository(prisma);
  const teachingQuizRepository = new TeachingQuizRepository(prisma);
  const studentAttemptRepository = new StudentAttemptRepository(prisma);
  const authServiceClient = new AuthServiceClient(
    config.authServiceUrl,
    logger
  );
  const contentService = new ContentApplicationService(
    topicRepository,
    lessonRepository,
    contentItemRepository,
    knowledgeGraphRepository,
    teachingMaterialRepository,
    teachingModuleRepository,
    teachingQuizRepository,
    studentAttemptRepository,
    {
      parseTeachingMaterial,
      buildModuleProposal,
      generatePedagogicalQuiz,
      parseExamScanToAttempt
    },
    logger
  );
  const contentController = new ContentController(contentService);
  const healthController = new HealthController(config.serviceName, async () => {
    await prisma.$queryRaw`SELECT 1`;
  });
  const resolvedAuthResolver =
    authResolver ??
    ({
      resolveAccess: (req, context) =>
        authServiceClient.resolveActorFromAuthorizationHeader(
          req.headers.authorization,
          context.requestId
        )
    } satisfies AuthResolver);

  return createRouter(
    [
      ...registerHealthRoutes(healthController),
      ...registerContentRoutes(contentController)
    ],
    logger,
    {
      authResolver: resolvedAuthResolver,
      requestTimeoutMs: config.requestTimeoutMs
    }
  );
}
