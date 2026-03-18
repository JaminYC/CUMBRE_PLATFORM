import "dotenv/config";
import { createServer } from "node:http";
import { createContentApp } from "./app.js";
import { loadContentServiceConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadContentServiceConfig();
const logger = createLogger(config.serviceName, config.logLevel);
const app = createContentApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("content_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv
  });
});
