import { PrismaClient } from "../generated/prisma/index.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  // eslint-disable-next-line no-var
  var __tutorEnginePrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(nodeEnv = process.env.NODE_ENV): PrismaClient {
  if (nodeEnv !== "production" && globalThis.__tutorEnginePrismaClient) {
    return globalThis.__tutorEnginePrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: {
        url: normalizePostgresUrl(process.env.DATABASE_URL ?? "")
      }
    },
    log: nodeEnv === "development" ? ["warn", "error"] : ["error"]
  });

  if (nodeEnv !== "production") {
    globalThis.__tutorEnginePrismaClient = client;
  }

  return client;
}
