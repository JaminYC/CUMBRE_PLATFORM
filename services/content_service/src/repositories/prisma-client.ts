import { PrismaClient } from "../generated/prisma/index.js";
import type { ContentServiceConfig } from "../config/env.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  var __contentPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(config: ContentServiceConfig): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__contentPrismaClient) {
    return globalThis.__contentPrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: normalizePostgresUrl(config.databaseUrl)
      }
    }
  });

  if (config.nodeEnv !== "production") {
    globalThis.__contentPrismaClient = client;
  }

  return client;
}
