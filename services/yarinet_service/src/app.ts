import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { HealthController } from "./controllers/health-controller.js";
import { ChallengeController } from "./controllers/challenge-controller.js";
import type { YariNetServiceConfig } from "./config/env.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { ChallengeRepository } from "./repositories/challenge-repository.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { registerChallengeRoutes } from "./routes/challenge-routes.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { YariNetApplicationService } from "./services/yarinet-service.js";
import type { Logger } from "./utils/logger.js";

export interface YariNetAppDependencies {
  config: YariNetServiceConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}

export function createYariNetApp({
  config,
  logger,
  authResolver
}: YariNetAppDependencies) {
  const prisma = createPrismaClient(config);
  const challengeRepository = new ChallengeRepository(prisma);
  const yarinetService = new YariNetApplicationService(
    challengeRepository,
    logger
  );
  const challengeController = new ChallengeController(yarinetService);
  const authServiceClient = new AuthServiceClient(config.authServiceUrl, logger);
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    (error) => {
      logger.error("yarinet_service readiness check failed", {
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
      ...registerChallengeRoutes(challengeController)
    ],
    logger,
    {
      authResolver: resolvedAuthResolver,
      requestTimeoutMs: config.requestTimeoutMs
    }
  );
}
