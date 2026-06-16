import { PrismaClient } from "../generated/prisma/index.js";
import type { YariNetServiceConfig } from "../config/env.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  var __yarinetPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(
  config: YariNetServiceConfig
): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__yarinetPrismaClient) {
    return globalThis.__yarinetPrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: normalizePostgresUrl(config.databaseUrl)
      }
    }
  });

  if (config.nodeEnv !== "production") {
    globalThis.__yarinetPrismaClient = client;
  }

  return client;
}
