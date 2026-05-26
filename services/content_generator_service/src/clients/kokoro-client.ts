// services/content_generator_service/src/clients/kokoro-client.ts
export interface SynthesizeOptions {
  text: string;
  voice: "af_heart" | "af_bella" | "am_michael";
  speed?: number;
  langCode?: string;
}

export class KokoroClient {
  constructor(private readonly baseUrl: string) {}

  async synthesize(opts: SynthesizeOptions): Promise<Buffer> {
    const response = await fetch(`${this.baseUrl}/synthesize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: opts.text,
        voice: opts.voice,
        speed: opts.speed ?? 1.0,
        lang_code: opts.langCode ?? "e",
      }),
    });

    if (!response.ok) {
      throw new Error(`Kokoro TTS error: ${response.status}`);
    }

    return Buffer.from(await response.arrayBuffer());
  }

  async isHealthy(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/health`, { signal: AbortSignal.timeout(3000) });
      return res.ok;
    } catch {
      return false;
    }
  }
}
