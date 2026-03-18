import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { resolvePermissionScopes } from "@cumbre/types";
import { AuthController } from "./controllers/auth-controller.js";
import { HealthController } from "./controllers/health-controller.js";
import type { AuthServiceConfig } from "./config/env.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { SessionRepository } from "./repositories/session-repository.js";
import { UserRepository } from "./repositories/user-repository.js";
import { registerAuthRoutes } from "./routes/auth-routes.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { AuthApplicationService } from "./services/auth-service.js";
import type { Logger } from "./utils/logger.js";

export interface AuthAppDependencies {
  config: AuthServiceConfig;
  logger: Logger;
}

export function createAuthApp({ config, logger }: AuthAppDependencies) {
  const prisma = createPrismaClient(config);
  const userRepository = new UserRepository(prisma);
  const sessionRepository = new SessionRepository(prisma);
  const authService = new AuthApplicationService(
    userRepository,
    sessionRepository,
    logger,
    config
  );
  const authController = new AuthController(authService);
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    (error) => {
      logger.error("Auth service readiness check failed", {
        error: error instanceof Error ? error.message : String(error)
      });
    }
  );
  const authResolver: AuthResolver = {
    async resolveAccess(req) {
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader?.startsWith("Bearer ")) {
        return null;
      }

      const accessToken = authorizationHeader.slice("Bearer ".length).trim();
      const session = await sessionRepository.findByAccessToken(accessToken);

      if (!session || session.revokedAt) {
        return null;
      }

      if (session.accessTokenExpiresAt.getTime() <= Date.now()) {
        return null;
      }

      await sessionRepository.markUsed(session.id);

      return {
        sessionId: session.id,
        userId: session.userId,
        primaryRole: session.primaryRole,
        roles: session.roles,
        scopes: resolvePermissionScopes(session.roles)
      };
    }
  };

  return createRouter(
    [
      ...registerHealthRoutes(healthController),
      ...registerAuthRoutes(authController)
    ],
    logger,
    {
      authResolver,
      requestTimeoutMs: config.requestTimeoutMs
    }
  );
}
