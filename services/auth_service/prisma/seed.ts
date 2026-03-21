import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";
import { hashCredential } from "../src/utils/credentials.js";

const prisma = new PrismaClient();

// Stable demo UUIDs — consistent across all services
const DEMO_STUDENT_ID = "10000000-0000-0000-0000-000000000001";
const DEMO_TEACHER_ID = "10000000-0000-0000-0000-000000000002";
const DEMO_ADMIN_ID   = "10000000-0000-0000-0000-000000000003";

const seedUsers = [
  {
    id: DEMO_STUDENT_ID,
    displayName: "Demo Student",
    email: "student@example.com",
    primaryRole: "student",
    roles: ["student"]
  },
  {
    id: DEMO_TEACHER_ID,
    displayName: "Demo Teacher",
    email: "teacher@example.com",
    primaryRole: "teacher",
    roles: ["teacher"]
  },
  {
    id: DEMO_ADMIN_ID,
    displayName: "Demo Admin",
    email: "admin@example.com",
    primaryRole: "administrator",
    roles: ["administrator"]
  }
] as const;

async function main() {
  for (const user of seedUsers) {
    // Delete by email first so we can set the correct UUID
    // (cascade deletes related sessions)
    await prisma.authUser.deleteMany({ where: { email: user.email } });
    await prisma.authUser.create({
      data: {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        primaryRole: user.primaryRole,
        roles: [...user.roles],
        status: "active",
        locale: "es-PE",
        preferredLanguage: "es",
        timezone: "America/Lima",
        credentialHash: hashCredential("placeholder")
      }
    });
  }

  console.log("Auth seed complete — demo users created with stable UUIDs");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
