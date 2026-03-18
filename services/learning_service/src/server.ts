import "dotenv/config";
import { createServer } from "node:http";
import { createLearningApp } from "./app.js";
import { loadLearningServiceConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadLearningServiceConfig();
const logger = createLogger(config.serviceName, config.logLevel);
const app = createLearningApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("learning_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv
  });
});
