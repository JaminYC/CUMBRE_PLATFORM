import { describe, expect, it, vi } from "vitest";
import { YariNetApplicationService } from "../src/services/yarinet-service.js";

const logger = { debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() };

function fakeRepo(overrides: Partial<any> = {}) {
  return {
    createChallenge: vi.fn(async (i: any) => ({ id: "c1", status: "DRAFT", ...i })),
    findChallengeById: vi.fn(async () => null),
    listChallenges: vi.fn(async () => []),
    updateChallengeStatus: vi.fn(async () => null),
    ...overrides
  };
}

describe("YariNetApplicationService", () => {
  it("creates a challenge through the repository", async () => {
    const repo = fakeRepo();
    const service = new YariNetApplicationService(repo as any, logger as any);
    const result = await service.createChallenge({
      teacherId: "t1",
      title: "Reto",
      problemStatement: "0123456789",
      category: "c",
      guidingQuestions: []
    } as any);
    expect(repo.createChallenge).toHaveBeenCalledOnce();
    expect(result.id).toBe("c1");
  });

  it("throws NotFoundError when getting a missing challenge", async () => {
    const service = new YariNetApplicationService(fakeRepo() as any, logger as any);
    await expect(
      service.getChallenge({ challengeId: "missing" } as any)
    ).rejects.toMatchObject({ statusCode: 404 });
  });

  it("wraps list results in an items envelope", async () => {
    const repo = fakeRepo({ listChallenges: vi.fn(async () => [{ id: "c1" }]) });
    const service = new YariNetApplicationService(repo as any, logger as any);
    const result = await service.listChallenges({ teacherId: "t1" } as any);
    expect(result).toEqual({ items: [{ id: "c1" }] });
  });
});
