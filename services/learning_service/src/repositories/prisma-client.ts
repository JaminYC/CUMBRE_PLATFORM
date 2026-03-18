import { PrismaClient } from "../generated/prisma/index.js";
import type { LearningServiceConfig } from "../config/env.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  var __learningPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(
  config: LearningServiceConfig
): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__learningPrismaClient) {
    return globalThis.__learningPrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: normalizePostgresUrl(config.databaseUrl)
      }
    }
  });

  if (config.nodeEnv !== "production") {
    globalThis.__learningPrismaClient = client;
  }

  return client;
}
