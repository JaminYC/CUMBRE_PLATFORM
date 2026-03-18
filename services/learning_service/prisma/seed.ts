import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.learningPathRecord.upsert({
    where: { id: "learning-path-placeholder" },
    update: {
      title: "Adaptive Foundations Path",
      summary: "Seed learning path for local development.",
      status: "active",
      audienceRoles: ["student"],
      topicIds: ["topic-placeholder"],
      skillIds: ["skill-critical-thinking"],
      lessonIds: ["lesson-placeholder"],
      estimatedDurationMinutes: 180,
      difficultyLevel: "intermediate",
      sequencingStrategy: "adaptive"
    },
    create: {
      id: "learning-path-placeholder",
      title: "Adaptive Foundations Path",
      summary: "Seed learning path for local development.",
      status: "active",
      audienceRoles: ["student"],
      topicIds: ["topic-placeholder"],
      skillIds: ["skill-critical-thinking"],
      lessonIds: ["lesson-placeholder"],
      estimatedDurationMinutes: 180,
      difficultyLevel: "intermediate",
      sequencingStrategy: "adaptive"
    }
  });

  await prisma.masteryStateRecord.upsert({
    where: { id: "mastery-state-placeholder" },
    update: {
      learnerUserId: "user-placeholder",
      learningPathId: "learning-path-placeholder",
      subjectType: "skill",
      subjectId: "skill-critical-thinking",
      level: "developing",
      score: 0.62,
      confidence: 0.74,
      evidenceCount: 4,
      trend: "rising",
      lastObservedAt: new Date(),
      recommendedDifficulty: "intermediate"
    },
    create: {
      id: "mastery-state-placeholder",
      learnerUserId: "user-placeholder",
      learningPathId: "learning-path-placeholder",
      subjectType: "skill",
      subjectId: "skill-critical-thinking",
      level: "developing",
      score: 0.62,
      confidence: 0.74,
      evidenceCount: 4,
      trend: "rising",
      lastObservedAt: new Date(),
      recommendedDifficulty: "intermediate"
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
