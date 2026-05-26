// services/content_generator_service/prisma/seed.ts
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  for (const [role, dailyLimit] of [["student", 5], ["teacher", 20], ["administrator", -1]] as const) {
    await prisma.generationLimitRecord.upsert({
      where: { role },
      update: { dailyLimit },
      create: { role, dailyLimit },
    });
  }
  console.log("Generation limits seeded: student=5, teacher=20, administrator=-1 (unlimited)");
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
