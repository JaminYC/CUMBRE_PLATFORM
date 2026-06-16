import { describe, expect, it } from "vitest";
import { ChallengeRepository } from "../src/repositories/challenge-repository.js";

function createFakePrisma() {
  const rows = new Map<string, any>();
  return {
    rows,
    civicChallenge: {
      create: async ({ data }: { data: any }) => {
        const row = {
          ...data,
          classroomId: data.classroomId ?? null,
          context: data.context ?? null,
          gradeLevel: data.gradeLevel ?? null,
          opensAt: data.opensAt ?? null,
          closesAt: data.closesAt ?? null,
          guidingQuestions: data.guidingQuestions ?? [],
          createdAt: new Date("2026-06-16T00:00:00.000Z"),
          updatedAt: new Date("2026-06-16T00:00:00.000Z")
        };
        rows.set(row.id, row);
        return row;
      },
      findUnique: async ({ where }: { where: { id: string } }) =>
        rows.get(where.id) ?? null,
      findMany: async ({ where }: { where?: any } = {}) =>
        [...rows.values()].filter((row) => {
          if (where?.teacherId && row.teacherId !== where.teacherId) return false;
          if (where?.classroomId && row.classroomId !== where.classroomId) return false;
          if (where?.status && row.status !== where.status) return false;
          return true;
        }),
      update: async ({ where, data }: { where: { id: string }; data: any }) => {
        const row = rows.get(where.id);
        if (!row) throw new Error("not found");
        Object.assign(row, data);
        return row;
      }
    }
  };
}

describe("ChallengeRepository", () => {
  it("creates a challenge with a generated id and DRAFT status", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);

    const created = await repo.createChallenge({
      teacherId: "teacher-1",
      title: "Basura en el parque",
      problemStatement: "El parque está lleno de residuos.",
      category: "medio_ambiente",
      guidingQuestions: ["¿Quién es responsable?"]
    });

    expect(created.id).toMatch(/[0-9a-f-]{36}/);
    expect(created.status).toBe("DRAFT");
    expect(created.teacherId).toBe("teacher-1");
    expect(created.guidingQuestions).toEqual(["¿Quién es responsable?"]);
  });

  it("filters challenges by teacherId", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);
    await repo.createChallenge({ teacherId: "t1", title: "Reto A B", problemStatement: "0123456789", category: "c", guidingQuestions: [] });
    await repo.createChallenge({ teacherId: "t2", title: "Reto C D", problemStatement: "0123456789", category: "c", guidingQuestions: [] });

    const result = await repo.listChallenges({ teacherId: "t1" });
    expect(result).toHaveLength(1);
    expect(result[0].teacherId).toBe("t1");
  });

  it("updates challenge status", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);
    const created = await repo.createChallenge({ teacherId: "t1", title: "Reto X Y", problemStatement: "0123456789", category: "c", guidingQuestions: [] });

    const updated = await repo.updateChallengeStatus(created.id, "OPEN");
    expect(updated?.status).toBe("OPEN");
  });
});
