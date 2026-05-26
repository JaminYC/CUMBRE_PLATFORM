// services/content_generator_service/src/repositories/prisma-client.ts
import { PrismaClient } from "../generated/prisma/index.js";
import type { ContentGeneratorConfig } from "../config/env.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  var __generatorPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(config: ContentGeneratorConfig): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__generatorPrismaClient) {
    return globalThis.__generatorPrismaClient;
  }
  const client = new PrismaClient({
    datasources: { db: { url: normalizePostgresUrl(config.databaseUrl) } }
  });
  if (config.nodeEnv !== "production") {
    globalThis.__generatorPrismaClient = client;
  }
  return client;
}
