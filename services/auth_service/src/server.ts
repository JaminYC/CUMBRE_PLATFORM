import "dotenv/config";
import { createServer } from "node:http";
import { createAuthApp } from "./app.js";
import { loadAuthServiceConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadAuthServiceConfig();
const logger = createLogger(config.serviceName, config.logLevel);
const app = createAuthApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("auth_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv
  });
});
