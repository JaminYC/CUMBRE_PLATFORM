// services/content_generator_service/test/storage-client.test.ts
import { describe, it, expect, vi } from "vitest";
import { StorageClient } from "../src/clients/storage-client.js";

const mockSupabase = {
  storage: {
    from: vi.fn().mockReturnValue({
      upload: vi.fn().mockResolvedValue({ error: null }),
      getPublicUrl: vi.fn().mockReturnValue({ data: { publicUrl: "https://storage.example.com/file.pdf" } }),
    }),
  },
};

describe("StorageClient", () => {
  const client = new StorageClient(mockSupabase as any, "generated-content");

  it("uploads a buffer and returns a public URL", async () => {
    const url = await client.upload(Buffer.from("fake-pdf"), "pdfs/job-1.pdf", "application/pdf");
    expect(url).toBe("https://storage.example.com/file.pdf");
  });

  it("throws when upload fails", async () => {
    mockSupabase.storage.from.mockReturnValueOnce({
      upload: vi.fn().mockResolvedValue({ error: new Error("storage error") }),
      getPublicUrl: vi.fn(),
    });
    await expect(new StorageClient(mockSupabase as any, "generated-content")
      .upload(Buffer.from("x"), "path", "application/pdf"))
      .rejects.toThrow("storage error");
  });
});
