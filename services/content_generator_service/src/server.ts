// services/content_generator_service/src/server.ts
import "dotenv/config";
import { createServer } from "node:http";
import { createContentGeneratorApp } from "./app.js";
import { loadContentGeneratorConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadContentGeneratorConfig();
const logger = createLogger(config.serviceName);
const app = createContentGeneratorApp({ config, logger });
createServer(app).listen(config.port, () => {
  logger.info("content_generator_service listening", { port: config.port });
});
