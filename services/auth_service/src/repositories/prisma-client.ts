import { PrismaClient } from "../generated/prisma/index.js";
import type { AuthServiceConfig } from "../config/env.js";

declare global {
  var __authPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(config: AuthServiceConfig): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__authPrismaClient) {
    return globalThis.__authPrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: config.databaseUrl
      }
    }
  });

  if (config.nodeEnv !== "production") {
    globalThis.__authPrismaClient = client;
  }

  return client;
}
