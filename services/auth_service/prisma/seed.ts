import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";
import { hashCredential } from "../src/utils/credentials.js";

const prisma = new PrismaClient();

async function main() {
  const seedUsers = [
    {
      id: "user-placeholder",
      displayName: "Seed Student",
      email: "student@example.com",
      primaryRole: "student",
      roles: ["student"]
    },
    {
      id: "teacher-placeholder",
      displayName: "Seed Teacher",
      email: "teacher@example.com",
      primaryRole: "teacher",
      roles: ["teacher"]
    },
    {
      id: "admin-placeholder",
      displayName: "Seed Admin",
      email: "admin@example.com",
      primaryRole: "administrator",
      roles: ["administrator"]
    }
  ] as const;

  for (const user of seedUsers) {
    await prisma.authUser.upsert({
      where: { id: user.id },
      update: {
        displayName: user.displayName,
        email: user.email,
        primaryRole: user.primaryRole,
        roles: [...user.roles],
        status: "active",
        locale: "en-US",
        preferredLanguage: "en",
        timezone: "America/Lima",
        credentialHash: hashCredential("placeholder")
      },
      create: {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        primaryRole: user.primaryRole,
        roles: [...user.roles],
        status: "active",
        locale: "en-US",
        preferredLanguage: "en",
        timezone: "America/Lima",
        credentialHash: hashCredential("placeholder")
      }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
