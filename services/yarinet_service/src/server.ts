import "dotenv/config";
import { createServer } from "node:http";
import { createYariNetApp } from "./app.js";
import { loadYariNetServiceConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadYariNetServiceConfig();
const logger = createLogger(config.serviceName, config.logLevel);
const app = createYariNetApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("yarinet_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv
  });
});
