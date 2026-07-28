import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { HealthController } from "./controllers/health-controller.js";
import { LearningController } from "./controllers/learning-controller.js";
import type { LearningServiceConfig } from "./config/env.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { LearningPathRepository } from "./repositories/learning-path-repository.js";
import { LearningSessionRepository } from "./repositories/learning-session-repository.js";
import { MasteryStateRepository } from "./repositories/mastery-state-repository.js";
import { ClassroomRepository } from "./repositories/classroom-repository.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { registerLearningRoutes } from "./routes/learning-routes.js";
import { ContentKnowledgeClient } from "./services/content-knowledge-client.js";
import { ContentClient } from "./services/content-client.js";
import { TutorService } from "./services/tutor-service.js";
import { TutorController } from "./controllers/tutor-controller.js";
import { registerTutorRoutes } from "./routes/tutor-routes.js";
import { ClassroomProvisioningClient } from "./services/classroom-provisioning-client.js";
import { LearningApplicationService } from "./services/learning-service.js";
import type { Logger } from "./utils/logger.js";

export interface LearningAppDependencies {
  config: LearningServiceConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}

export function createLearningApp({
  config,
  logger,
  authResolver
}: LearningAppDependencies) {
  const prisma = createPrismaClient(config);
  const learningPathRepository = new LearningPathRepository(prisma);
  const learningSessionRepository = new LearningSessionRepository(prisma);
  const masteryStateRepository = new MasteryStateRepository(prisma);
  const classroomRepository = new ClassroomRepository(prisma);
  const contentKnowledgeClient = new ContentKnowledgeClient(
    config.contentServiceUrl,
    logger
  );
  const classroomProvisioningClient = new ClassroomProvisioningClient(
    config.authServiceUrl,
    logger
  );
  const authServiceClient = new AuthServiceClient(
    config.authServiceUrl,
    logger
  );
  const learningService = new LearningApplicationService(
    learningPathRepository,
    learningSessionRepository,
    masteryStateRepository,
    classroomRepository,
    contentKnowledgeClient,
    classroomProvisioningClient,
    logger
  );
  const learningController = new LearningController(learningService);
  const tutorService = new TutorService(
    learningService,
    new ContentClient(config.contentServiceUrl, logger),
    contentKnowledgeClient
  );
  const tutorController = new TutorController(tutorService);
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    (error) => {
      logger.error("Learning service readiness check failed", {
        error: error instanceof Error ? error.message : String(error)
      });
    }
  );
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
      ...registerLearningRoutes(learningController),
      ...registerTutorRoutes(tutorController)
    ],
    logger
    ,
    {
      authResolver: resolvedAuthResolver,
      requestTimeoutMs: config.requestTimeoutMs
    }
  );
}
