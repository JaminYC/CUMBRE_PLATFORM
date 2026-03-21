import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

// Stable demo UUIDs — consistent across all services
const DEMO_STUDENT_ID         = "10000000-0000-0000-0000-000000000001";
const DEMO_LEARNING_PATH_ID   = "20000000-0000-0000-0000-000000000001";
const DEMO_TOPIC_MAIN_ID      = "30000000-0000-0000-0000-000000000002";
const DEMO_LESSON_MAIN_ID     = "40000000-0000-0000-0000-000000000002";
const DEMO_MASTERY_ID         = "60000000-0000-0000-0000-000000000001";

async function main() {
  // Clean up old placeholder records
  await prisma.masteryStateRecord.deleteMany({
    where: { id: { in: ["mastery-state-placeholder"] } }
  });
  await prisma.learningPathRecord.deleteMany({
    where: { id: { in: ["learning-path-placeholder"] } }
  });

  await prisma.learningPathRecord.upsert({
    where: { id: DEMO_LEARNING_PATH_ID },
    update: {
      title: "Fundamentos Adaptativos",
      summary: "Ruta de aprendizaje demo para la plataforma CUMBRE.",
      status: "active",
      audienceRoles: ["student"],
      topicIds: [DEMO_TOPIC_MAIN_ID],
      skillIds: ["skill-critical-thinking"],
      lessonIds: [DEMO_LESSON_MAIN_ID],
      estimatedDurationMinutes: 180,
      difficultyLevel: "intermediate",
      sequencingStrategy: "adaptive"
    },
    create: {
      id: DEMO_LEARNING_PATH_ID,
      title: "Fundamentos Adaptativos",
      summary: "Ruta de aprendizaje demo para la plataforma CUMBRE.",
      status: "active",
      audienceRoles: ["student"],
      topicIds: [DEMO_TOPIC_MAIN_ID],
      skillIds: ["skill-critical-thinking"],
      lessonIds: [DEMO_LESSON_MAIN_ID],
      estimatedDurationMinutes: 180,
      difficultyLevel: "intermediate",
      sequencingStrategy: "adaptive"
    }
  });

  await prisma.masteryStateRecord.upsert({
    where: { id: DEMO_MASTERY_ID },
    update: {
      learnerUserId: DEMO_STUDENT_ID,
      learningPathId: DEMO_LEARNING_PATH_ID,
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
      id: DEMO_MASTERY_ID,
      learnerUserId: DEMO_STUDENT_ID,
      learningPathId: DEMO_LEARNING_PATH_ID,
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

  console.log("Learning seed complete — learning path and mastery state created with stable UUIDs");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
