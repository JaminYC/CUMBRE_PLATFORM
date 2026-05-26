// services/content_generator_service/test/kokoro-client.test.ts
import { describe, it, expect, vi } from "vitest";
import { KokoroClient } from "../src/clients/kokoro-client.js";

describe("KokoroClient", () => {
  it("calls /synthesize and returns a Buffer", async () => {
    const fakeBuffer = Buffer.from("fake-mp3-data");
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: async () => fakeBuffer.buffer,
    }) as any;

    const client = new KokoroClient("http://localhost:8880");
    const result = await client.synthesize({ text: "Hola", voice: "af_heart" });

    expect(result).toBeInstanceOf(Buffer);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8880/synthesize",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("throws when server returns non-ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 }) as any;
    const client = new KokoroClient("http://localhost:8880");
    await expect(client.synthesize({ text: "test", voice: "af_heart" }))
      .rejects.toThrow("Kokoro TTS error: 500");
  });
});
