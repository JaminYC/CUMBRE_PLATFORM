import { createRouter } from "@cumbre/api-runtime";
import { HealthController } from "./controllers/health-controller.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import type { YariNetServiceConfig } from "./config/env.js";
import type { Logger } from "./utils/logger.js";

export interface YariNetAppDependencies {
  config: YariNetServiceConfig;
  logger: Logger;
}

export function createYariNetApp({ config, logger }: YariNetAppDependencies) {
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      // Database readiness wired in Task 8.
    }
  );

  return createRouter([...registerHealthRoutes(healthController)], logger, {
    requestTimeoutMs: config.requestTimeoutMs
  });
}
