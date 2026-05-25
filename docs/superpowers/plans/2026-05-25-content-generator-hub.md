# Content Generator Hub — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un sistema de generación automática de PDFs académicos, podcasts MP3 y infografías dentro de CUMBRE, con Kokoro TTS corriendo localmente en la PC del operador.

**Architecture:** Nuevo microservicio `content_generator_service` en el monorepo (TypeScript, mismo patrón que `content_service`). Kokoro TTS se instala globalmente en la PC como servidor FastAPI en puerto 8880, expuesto via ngrok. Los outputs (PDF, MP3, PNG) se suben a Supabase Storage.

**Tech Stack:** TypeScript, Node.js, `@cumbre/api-runtime`, Prisma, Anthropic SDK, pdflatex, Playwright, ffmpeg, Kokoro TTS (Python/FastAPI), ngrok, Supabase Storage.

---

## Fase 1 — Kokoro TTS Server (en tu PC)

### Task 1: Instalar Kokoro TTS globalmente en la PC

**Files:**
- Create: `C:/kokoro-server/server.py`
- Create: `C:/kokoro-server/requirements.txt`
- Create: `C:/kokoro-server/start-kokoro.bat`

- [ ] **Step 1: Instalar dependencias del sistema**

Abre PowerShell como administrador y ejecuta:
```powershell
# Instalar Python si no está (ya tienes Python313)
# Instalar ffmpeg via winget
winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements

# Verificar instalación
ffmpeg -version
```
Esperado: versión de ffmpeg impresa en consola.

- [ ] **Step 2: Crear carpeta del servidor Kokoro**

```powershell
New-Item -ItemType Directory -Force "C:\kokoro-server"
Set-Location "C:\kokoro-server"
python -m venv venv
.\venv\Scripts\Activate.ps1
```

- [ ] **Step 3: Crear requirements.txt**

```
kokoro==0.9.4
soundfile==0.13.1
fastapi==0.115.6
uvicorn[standard]==0.34.0
pydantic==2.10.4
numpy==2.2.1
```

- [ ] **Step 4: Instalar dependencias Python**

```powershell
pip install -r C:\kokoro-server\requirements.txt
```
Esperado: instalación sin errores. Kokoro descarga modelos (~500MB) automáticamente al primer uso.

- [ ] **Step 5: Crear server.py**

```python
# C:/kokoro-server/server.py
import io
import soundfile as sf
from fastapi import FastAPI, HTTPException
from fastapi.responses import Response
from pydantic import BaseModel
from kokoro import KPipeline

app = FastAPI(title="Kokoro TTS Server")

# Cargar pipelines una sola vez al arrancar
pipelines: dict[str, KPipeline] = {}

def get_pipeline(lang_code: str) -> KPipeline:
    if lang_code not in pipelines:
        pipelines[lang_code] = KPipeline(lang_code=lang_code)
    return pipelines[lang_code]

class SynthesizeRequest(BaseModel):
    text: str
    voice: str = "af_heart"   # af_heart, af_bella, am_michael
    speed: float = 1.0
    lang_code: str = "a"       # "a" = American English, "e" = Spanish

@app.get("/health")
def health():
    return {"status": "ok", "service": "kokoro-tts"}

@app.post("/synthesize")
def synthesize(req: SynthesizeRequest):
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="text cannot be empty")
    if len(req.text) > 5000:
        raise HTTPException(status_code=400, detail="text exceeds 5000 char limit per request")

    pipeline = get_pipeline(req.lang_code)

    audio_chunks = []
    for _, _, audio in pipeline(req.text, voice=req.voice, speed=req.speed):
        if audio is not None:
            audio_chunks.append(audio)

    if not audio_chunks:
        raise HTTPException(status_code=500, detail="TTS produced no audio")

    import numpy as np
    combined = np.concatenate(audio_chunks)

    buf = io.BytesIO()
    sf.write(buf, combined, samplerate=24000, format="MP3")
    buf.seek(0)

    return Response(content=buf.read(), media_type="audio/mpeg")
```

- [ ] **Step 6: Crear start-kokoro.bat**

```bat
@echo off
cd /d C:\kokoro-server
call venv\Scripts\activate.bat
uvicorn server:app --host 0.0.0.0 --port 8880 --workers 1
```

- [ ] **Step 7: Probar el servidor**

```powershell
# Terminal 1: arrancar servidor
C:\kokoro-server\start-kokoro.bat

# Terminal 2: probar endpoint
$body = '{"text": "Hola, este es un test de Kokoro TTS.", "voice": "af_heart", "lang_code": "e"}'
Invoke-WebRequest -Uri "http://localhost:8880/synthesize" -Method POST `
  -ContentType "application/json" -Body $body -OutFile "C:\kokoro-server\test.mp3"
```
Esperado: archivo `test.mp3` creado (~2-3 segundos de audio).

- [ ] **Step 8: Instalar ngrok y crear tunnel**

```powershell
winget install ngrok.ngrok
# Autenticar con tu cuenta ngrok (gratis en ngrok.com)
ngrok config add-authtoken TU_TOKEN_AQUI
# Arrancar tunnel (en otra terminal, con kokoro corriendo)
ngrok http 8880
```
Esperado: URL tipo `https://xxxx.ngrok-free.app` — guarda esta URL, la usarás como `KOKORO_SERVER_URL`.

- [ ] **Step 9: Commit — Kokoro server scripts**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add .
git commit -m "chore: add kokoro TTS server setup scripts (local PC)"
```

---

## Fase 2 — Nuevo microservicio `content_generator_service`

### Task 2: Scaffold del servicio

**Files:**
- Create: `services/content_generator_service/package.json`
- Create: `services/content_generator_service/tsconfig.json`
- Create: `services/content_generator_service/.env.example`
- Create: `services/content_generator_service/src/server.ts`
- Create: `services/content_generator_service/src/index.ts`
- Create: `services/content_generator_service/src/config/env.ts`
- Create: `services/content_generator_service/src/utils/logger.ts`
- Create: `services/content_generator_service/prisma/schema.prisma`

- [ ] **Step 1: Crear package.json**

```json
{
  "name": "@cumbre/content-generator-service",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "main": "src/index.ts",
  "scripts": {
    "build": "tsc -p tsconfig.json --noEmit",
    "db:generate": "prisma generate --schema prisma/schema.prisma",
    "db:migrate": "prisma migrate deploy --schema prisma/schema.prisma",
    "predev": "prisma generate --schema prisma/schema.prisma",
    "dev": "tsx watch src/server.ts",
    "prestart": "prisma generate --schema prisma/schema.prisma",
    "start": "tsx src/server.ts",
    "test": "vitest run",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.37.0",
    "@cumbre/api-runtime": "workspace:*",
    "@cumbre/sdk": "workspace:*",
    "@cumbre/types": "workspace:*",
    "@prisma/client": "^6.5.0",
    "@supabase/supabase-js": "^2.49.1",
    "dotenv": "^16.4.7"
  },
  "devDependencies": {
    "@cumbre/test-utils": "workspace:*",
    "@types/node": "^22.10.2",
    "prisma": "^6.5.0",
    "tsx": "^4.19.2",
    "typescript": "^5.7.2",
    "vitest": "^3.0.0"
  }
}
```

- [ ] **Step 2: Crear tsconfig.json**

Copia el tsconfig de `services/content_service/tsconfig.json` y ajusta paths:
```json
{
  "extends": "../../packages/config/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: Crear src/config/env.ts**

```typescript
// services/content_generator_service/src/config/env.ts
export interface ContentGeneratorConfig {
  serviceName: "content_generator_service";
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  directUrl: string;
  anthropicApiKey: string;
  kokoroServerUrl: string;
  supabaseUrl: string;
  supabaseServiceKey: string;
  authServiceUrl: string;
  openaiApiKey?: string; // fallback TTS
}

function required(key: string, env: NodeJS.ProcessEnv): string {
  const val = env[key];
  if (!val) throw new Error(`${key} is required for content_generator_service`);
  return val;
}

function optional(key: string, env: NodeJS.ProcessEnv): string | undefined {
  return env[key];
}

function resolvePort(raw: string | undefined, fallback: number): number {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadContentGeneratorConfig(
  env: NodeJS.ProcessEnv = process.env
): ContentGeneratorConfig {
  return {
    serviceName: "content_generator_service",
    port: resolvePort(env.CONTENT_GENERATOR_PORT ?? env.PORT, 3004),
    nodeEnv: env.NODE_ENV ?? "development",
    databaseUrl: required("DATABASE_URL", env),
    directUrl: required("DIRECT_URL", env),
    anthropicApiKey: required("ANTHROPIC_API_KEY", env),
    kokoroServerUrl: env.KOKORO_SERVER_URL ?? "http://localhost:8880",
    supabaseUrl: required("SUPABASE_URL", env),
    supabaseServiceKey: required("SUPABASE_SERVICE_KEY", env),
    authServiceUrl: env.AUTH_SERVICE_URL ?? "http://localhost:3001",
    openaiApiKey: optional("OPENAI_API_KEY", env),
  };
}
```

- [ ] **Step 4: Copiar logger de content_service**

```typescript
// services/content_generator_service/src/utils/logger.ts
// Copia exacta de services/content_service/src/utils/logger.ts
export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  debug(msg: string, meta?: Record<string, unknown>): void;
  info(msg: string, meta?: Record<string, unknown>): void;
  warn(msg: string, meta?: Record<string, unknown>): void;
  error(msg: string, meta?: Record<string, unknown>): void;
}

export function createLogger(service: string, level: LogLevel = "info"): Logger {
  const levels: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
  const minLevel = levels[level];

  function log(lvl: LogLevel, msg: string, meta?: Record<string, unknown>) {
    if (levels[lvl] < minLevel) return;
    const entry = { time: new Date().toISOString(), level: lvl, service, msg, ...meta };
    const out = lvl === "error" ? process.stderr : process.stdout;
    out.write(JSON.stringify(entry) + "\n");
  }

  return {
    debug: (msg, meta) => log("debug", msg, meta),
    info:  (msg, meta) => log("info",  msg, meta),
    warn:  (msg, meta) => log("warn",  msg, meta),
    error: (msg, meta) => log("error", msg, meta),
  };
}
```

- [ ] **Step 5: Crear prisma/schema.prisma**

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model GenerationJobRecord {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    String
  role      String
  topic     String
  depth     String   // "summary" | "deep"
  sources   Json     // { type: "text"|"pdf"|"cumbre_content", data: string }[]
  outputs   String[] // ["pdf", "podcast", "infographic"]
  status    String   // "pending" | "processing" | "done" | "error"
  results   Json?    // { pdfUrl?: string, podcastUrl?: string, infographicUrl?: string }
  errorMsg  String?

  @@index([userId])
  @@index([status])
  @@map("generation_jobs")
}

model GenerationLimitRecord {
  id         String   @id @default(cuid())
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  role       String   @unique // "student" | "teacher" | "administrator"
  dailyLimit Int      // -1 = sin límite
  isActive   Boolean  @default(true)

  @@map("generation_limits")
}
```

- [ ] **Step 6: Crear .env.example**

```env
DATABASE_URL=postgresql://...@aws-0-REGION.pooler.supabase.com:6543/postgres
DIRECT_URL=postgresql://db.PROJECT.supabase.co:5432/postgres
ANTHROPIC_API_KEY=sk-ant-...
KOKORO_SERVER_URL=https://xxxx.ngrok-free.app
SUPABASE_URL=https://PROJECT.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
AUTH_SERVICE_URL=http://localhost:3001
CONTENT_GENERATOR_PORT=3004
# Opcional - fallback TTS si Kokoro está offline
OPENAI_API_KEY=sk-...
```

- [ ] **Step 7: Instalar dependencias del nuevo servicio**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
pnpm install
```

- [ ] **Step 8: Generar cliente Prisma**

```powershell
cd services/content_generator_service
pnpm db:generate
```
Esperado: carpeta `src/generated/prisma/` creada.

- [ ] **Step 9: Commit — scaffold del servicio**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): scaffold service with prisma schema and config"
```

---

### Task 3: Repositorio y migración de base de datos

**Files:**
- Create: `services/content_generator_service/src/repositories/prisma-client.ts`
- Create: `services/content_generator_service/src/repositories/generation-job-repository.ts`
- Create: `services/content_generator_service/src/repositories/generation-limit-repository.ts`
- Create: `services/content_generator_service/prisma/seed.ts`
- Create: `services/content_generator_service/test/repositories.test.ts`

- [ ] **Step 1: Escribir el test del repositorio (primero)**

```typescript
// services/content_generator_service/test/repositories.test.ts
import { describe, it, expect, vi } from "vitest";
import { GenerationJobRepository } from "../src/repositories/generation-job-repository.js";
import { GenerationLimitRepository } from "../src/repositories/generation-limit-repository.js";

const mockPrisma = {
  generationJobRecord: {
    create: vi.fn(),
    findUnique: vi.fn(),
    findMany: vi.fn(),
    update: vi.fn(),
  },
  generationLimitRecord: {
    findUnique: vi.fn(),
    upsert: vi.fn(),
    findMany: vi.fn(),
  },
};

describe("GenerationJobRepository", () => {
  const repo = new GenerationJobRepository(mockPrisma as any);

  it("creates a job and returns it", async () => {
    const input = {
      userId: "user-1", role: "student", topic: "fotosíntesis",
      depth: "summary" as const, sources: [], outputs: ["pdf"] as string[],
    };
    const expected = { id: "job-1", status: "pending", ...input };
    mockPrisma.generationJobRecord.create.mockResolvedValue(expected);

    const result = await repo.createJob(input);
    expect(result.id).toBe("job-1");
    expect(result.status).toBe("pending");
  });

  it("finds a job by id", async () => {
    mockPrisma.generationJobRecord.findUnique.mockResolvedValue({ id: "job-1", status: "done" });
    const result = await repo.findById("job-1");
    expect(result?.status).toBe("done");
  });

  it("updates job status to processing", async () => {
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "processing" });
    const result = await repo.updateStatus("job-1", "processing");
    expect(result.status).toBe("processing");
  });

  it("updates job with results", async () => {
    const results = { pdfUrl: "https://storage.example.com/test.pdf" };
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "done", results });
    const result = await repo.setDone("job-1", results);
    expect(result.status).toBe("done");
    expect((result.results as any).pdfUrl).toBeDefined();
  });
});

describe("GenerationLimitRepository", () => {
  const repo = new GenerationLimitRepository(mockPrisma as any);

  it("returns limit for a role", async () => {
    mockPrisma.generationLimitRecord.findUnique.mockResolvedValue({ role: "student", dailyLimit: 5 });
    const result = await repo.getLimitForRole("student");
    expect(result?.dailyLimit).toBe(5);
  });

  it("returns null when no limit configured", async () => {
    mockPrisma.generationLimitRecord.findUnique.mockResolvedValue(null);
    const result = await repo.getLimitForRole("student");
    expect(result).toBeNull();
  });
});
```

- [ ] **Step 2: Ejecutar test — debe fallar**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
pnpm test
```
Esperado: FAIL — `GenerationJobRepository` not found.

- [ ] **Step 3: Crear prisma-client.ts**

```typescript
// services/content_generator_service/src/repositories/prisma-client.ts
import { PrismaClient } from "../generated/prisma/index.js";
import type { ContentGeneratorConfig } from "../config/env.js";
import { normalizePostgresUrl } from "@cumbre/sdk";

declare global {
  var __generatorPrismaClient: PrismaClient | undefined;
}

export function createPrismaClient(config: ContentGeneratorConfig): PrismaClient {
  if (config.nodeEnv !== "production" && globalThis.__generatorPrismaClient) {
    return globalThis.__generatorPrismaClient;
  }

  const client = new PrismaClient({
    datasources: {
      db: { url: normalizePostgresUrl(config.databaseUrl) }
    }
  });

  if (config.nodeEnv !== "production") {
    globalThis.__generatorPrismaClient = client;
  }

  return client;
}
```

- [ ] **Step 4: Crear generation-job-repository.ts**

```typescript
// services/content_generator_service/src/repositories/generation-job-repository.ts
import type { PrismaClient } from "../generated/prisma/index.js";

export type JobDepth = "summary" | "deep";
export type JobStatus = "pending" | "processing" | "done" | "error";
export type JobSource = { type: "text" | "pdf" | "cumbre_content"; data: string };
export type JobResults = {
  pdfUrl?: string;
  podcastUrl?: string;
  infographicUrl?: string;
};

export interface CreateJobInput {
  userId: string;
  role: string;
  topic: string;
  depth: JobDepth;
  sources: JobSource[];
  outputs: string[];
}

export class GenerationJobRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createJob(input: CreateJobInput) {
    return this.prisma.generationJobRecord.create({
      data: {
        userId: input.userId,
        role: input.role,
        topic: input.topic,
        depth: input.depth,
        sources: input.sources as any,
        outputs: input.outputs,
        status: "pending",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.generationJobRecord.findUnique({ where: { id } });
  }

  async listByUser(userId: string) {
    return this.prisma.generationJobRecord.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  async updateStatus(id: string, status: JobStatus, errorMsg?: string) {
    return this.prisma.generationJobRecord.update({
      where: { id },
      data: { status, errorMsg },
    });
  }

  async setDone(id: string, results: JobResults) {
    return this.prisma.generationJobRecord.update({
      where: { id },
      data: { status: "done", results: results as any },
    });
  }

  async countTodayByUser(userId: string): Promise<number> {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    return this.prisma.generationJobRecord.count({
      where: { userId, createdAt: { gte: startOfDay } },
    });
  }
}
```

- [ ] **Step 5: Crear generation-limit-repository.ts**

```typescript
// services/content_generator_service/src/repositories/generation-limit-repository.ts
import type { PrismaClient } from "../generated/prisma/index.js";

export class GenerationLimitRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getLimitForRole(role: string) {
    return this.prisma.generationLimitRecord.findUnique({ where: { role } });
  }

  async upsertLimit(role: string, dailyLimit: number) {
    return this.prisma.generationLimitRecord.upsert({
      where: { role },
      update: { dailyLimit },
      create: { role, dailyLimit },
    });
  }

  async listAll() {
    return this.prisma.generationLimitRecord.findMany({
      orderBy: { role: "asc" },
    });
  }
}
```

- [ ] **Step 6: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 6 tests passing.

- [ ] **Step 7: Crear seed.ts**

```typescript
// services/content_generator_service/prisma/seed.ts
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.generationLimitRecord.upsert({
    where: { role: "student" },
    update: { dailyLimit: 5 },
    create: { role: "student", dailyLimit: 5 },
  });
  await prisma.generationLimitRecord.upsert({
    where: { role: "teacher" },
    update: { dailyLimit: 20 },
    create: { role: "teacher", dailyLimit: 20 },
  });
  await prisma.generationLimitRecord.upsert({
    where: { role: "administrator" },
    update: { dailyLimit: -1 },
    create: { role: "administrator", dailyLimit: -1 },
  });
  console.log("Generation limits seeded: student=5, teacher=20, administrator=-1 (unlimited)");
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
```

- [ ] **Step 8: Correr migración y seed**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
# Crear .env con tus variables reales (copia de .env.example)
pnpm db:migrate
pnpm db:seed
```
Esperado: tablas `generation_jobs` y `generation_limits` creadas con los 3 roles.

- [ ] **Step 9: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): repositories, prisma schema, seed with default limits"
```

---

### Task 4: Research Agent (Claude API)

**Files:**
- Create: `services/content_generator_service/src/agents/research-agent.ts`
- Create: `services/content_generator_service/test/research-agent.test.ts`

- [ ] **Step 1: Escribir test del research agent**

```typescript
// services/content_generator_service/test/research-agent.test.ts
import { describe, it, expect, vi } from "vitest";
import { ResearchAgent } from "../src/agents/research-agent.js";

const mockAnthropic = {
  messages: {
    create: vi.fn(),
  },
};

describe("ResearchAgent", () => {
  const agent = new ResearchAgent(mockAnthropic as any);

  it("returns structured research for a topic", async () => {
    const fakeResearch = {
      title: "Fotosíntesis",
      abstract: "Proceso por el cual las plantas...",
      sections: [{ heading: "Introducción", content: "...", keyPoints: ["punto 1"] }],
      bibliography: [],
      infographicData: { stats: [], timeline: [], concepts: ["clorofila"] },
    };

    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(fakeResearch) }],
    });

    const result = await agent.research({
      topic: "fotosíntesis",
      depth: "summary",
      sources: [],
    });

    expect(result.title).toBe("Fotosíntesis");
    expect(result.sections).toHaveLength(1);
    expect(result.infographicData.concepts).toContain("clorofila");
  });

  it("throws on invalid JSON response from Claude", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: "esto no es json" }],
    });

    await expect(
      agent.research({ topic: "test", depth: "summary", sources: [] })
    ).rejects.toThrow("ResearchAgent: invalid JSON from Claude");
  });
});
```

- [ ] **Step 2: Ejecutar test — debe fallar**

```powershell
pnpm test
```
Esperado: FAIL — `ResearchAgent` not found.

- [ ] **Step 3: Crear research-agent.ts**

```typescript
// services/content_generator_service/src/agents/research-agent.ts
import Anthropic from "@anthropic-ai/sdk";
import type { JobDepth, JobSource } from "../repositories/generation-job-repository.js";

export interface ResearchSection {
  heading: string;
  content: string;
  keyPoints: string[];
}

export interface InfographicData {
  stats: { label: string; value: string }[];
  timeline: { year: string; event: string }[];
  concepts: string[];
}

export interface ResearchOutput {
  title: string;
  abstract: string;
  sections: ResearchSection[];
  bibliography: string[];
  infographicData: InfographicData;
}

export interface ResearchInput {
  topic: string;
  depth: JobDepth;
  sources: JobSource[];
}

const SYSTEM_PROMPT = `Eres un investigador académico experto. Genera investigaciones estructuradas y precisas en español.
Responde ÚNICAMENTE con JSON válido, sin texto adicional, sin markdown, sin bloques de código.`;

function buildUserPrompt(input: ResearchInput): string {
  const depthInstruction = input.depth === "summary"
    ? "Genera un resumen conciso con 2-3 secciones principales (1-2 párrafos cada una)."
    : "Genera una investigación profunda con 5-8 secciones detalladas (3-5 párrafos cada una).";

  const sourcesText = input.sources
    .filter(s => s.type === "text")
    .map(s => s.data)
    .join("\n\n---\n\n");

  const sourcesSection = sourcesText
    ? `\n\nFUENTES ADICIONALES PROPORCIONADAS:\n${sourcesText}`
    : "";

  return `TEMA: ${input.topic}

${depthInstruction}

Devuelve un JSON con exactamente esta estructura:
{
  "title": "Título académico del tema",
  "abstract": "Resumen ejecutivo de 2-3 oraciones",
  "sections": [
    { "heading": "Nombre de sección", "content": "Contenido completo", "keyPoints": ["punto clave 1", "punto clave 2"] }
  ],
  "bibliography": ["Fuente 1 (formato APA)", "Fuente 2"],
  "infographicData": {
    "stats": [{ "label": "Etiqueta", "value": "Valor numérico o dato" }],
    "timeline": [{ "year": "Año", "event": "Evento importante" }],
    "concepts": ["concepto clave 1", "concepto clave 2"]
  }
}${sourcesSection}`;
}

export class ResearchAgent {
  constructor(private readonly anthropic: Anthropic) {}

  async research(input: ResearchInput): Promise<ResearchOutput> {
    const response = await this.anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: input.depth === "summary" ? 2000 : 6000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(input) }],
    });

    const text = response.content
      .filter(b => b.type === "text")
      .map(b => (b as { type: "text"; text: string }).text)
      .join("");

    let parsed: ResearchOutput;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("ResearchAgent: invalid JSON from Claude");
    }

    if (!parsed.title || !Array.isArray(parsed.sections)) {
      throw new Error("ResearchAgent: invalid JSON from Claude");
    }

    return parsed;
  }
}
```

- [ ] **Step 4: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 2 tests passing.

- [ ] **Step 5: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): research agent with Claude API"
```

---

### Task 5: PDF/LaTeX Generator

**Files:**
- Create: `services/content_generator_service/src/generators/pdf-generator.ts`
- Create: `services/content_generator_service/src/generators/latex-template.ts`
- Create: `services/content_generator_service/test/pdf-generator.test.ts`

- [ ] **Step 1: Instalar pdflatex (TeX Live)**

```powershell
winget install --id MiKTeX.MiKTeX -e --accept-source-agreements --accept-package-agreements
# O instalar TeX Live completo desde https://tug.org/texlive/
# Verificar:
pdflatex --version
```
Esperado: versión de pdflatex impresa.

- [ ] **Step 2: Escribir test del PDF generator**

```typescript
// services/content_generator_service/test/pdf-generator.test.ts
import { describe, it, expect, vi } from "vitest";
import { buildLatexDocument } from "../src/generators/latex-template.js";
import type { ResearchOutput } from "../src/agents/research-agent.js";

const sampleResearch: ResearchOutput = {
  title: "La Fotosíntesis",
  abstract: "Proceso clave de las plantas.",
  sections: [
    { heading: "Introducción", content: "Las plantas convierten luz en energía.", keyPoints: ["clorofila", "ATP"] }
  ],
  bibliography: ["Campbell, N. (2020). Biology. Pearson."],
  infographicData: { stats: [], timeline: [], concepts: ["clorofila"] },
};

describe("buildLatexDocument", () => {
  it("produces a string containing \\documentclass", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("\\documentclass");
  });

  it("includes the title", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("La Fotosíntesis");
  });

  it("includes all section headings", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("Introducción");
  });

  it("escapes special LaTeX characters in content", () => {
    const research = { ...sampleResearch, title: "Test & Verify" };
    const tex = buildLatexDocument(research);
    expect(tex).toContain("Test \\& Verify");
  });
});
```

- [ ] **Step 3: Ejecutar test — debe fallar**

```powershell
pnpm test
```
Esperado: FAIL — `buildLatexDocument` not found.

- [ ] **Step 4: Crear latex-template.ts**

```typescript
// services/content_generator_service/src/generators/latex-template.ts
import type { ResearchOutput } from "../agents/research-agent.js";

function escapeTex(text: string): string {
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

export function buildLatexDocument(research: ResearchOutput): string {
  const sections = research.sections.map(s => `
\\section{${escapeTex(s.heading)}}
${escapeTex(s.content)}

${s.keyPoints.length > 0 ? `\\subsection*{Puntos clave}
\\begin{itemize}
${s.keyPoints.map(p => `  \\item ${escapeTex(p)}`).join("\n")}
\\end{itemize}` : ""}
`).join("\n");

  const bibliography = research.bibliography.length > 0
    ? `\\section*{Bibliografía}
\\begin{itemize}
${research.bibliography.map(b => `  \\item ${escapeTex(b)}`).join("\n")}
\\end{itemize}`
    : "";

  return `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage{geometry}
\\usepackage{hyperref}
\\usepackage{titlesec}
\\usepackage{parskip}
\\geometry{margin=2.5cm}

\\title{${escapeTex(research.title)}}
\\author{CUMBRE Platform}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
${escapeTex(research.abstract)}
\\end{abstract}

\\tableofcontents
\\newpage

${sections}

${bibliography}

\\end{document}
`;
}
```

- [ ] **Step 5: Crear pdf-generator.ts**

```typescript
// services/content_generator_service/src/generators/pdf-generator.ts
import { execFile } from "node:child_process";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import { buildLatexDocument } from "./latex-template.js";
import type { ResearchOutput } from "../agents/research-agent.js";

const execFileAsync = promisify(execFile);

export async function generatePdf(research: ResearchOutput): Promise<Buffer> {
  const tex = buildLatexDocument(research);
  const dir = await mkdtemp(join(tmpdir(), "cumbre-pdf-"));

  try {
    const texPath = join(dir, "document.tex");
    await writeFile(texPath, tex, "utf8");

    // Dos pasadas para tabla de contenidos
    for (let pass = 0; pass < 2; pass++) {
      await execFileAsync("pdflatex", [
        "-interaction=nonstopmode",
        "-output-directory", dir,
        texPath,
      ], { timeout: 30_000 });
    }

    const pdfPath = join(dir, "document.pdf");
    return await readFile(pdfPath);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
```

- [ ] **Step 6: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 4 tests passing.

- [ ] **Step 7: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): LaTeX template and PDF generator"
```

---

### Task 6: Podcast Generator (Script + TTS + ffmpeg)

**Files:**
- Create: `services/content_generator_service/src/agents/podcast-script-agent.ts`
- Create: `services/content_generator_service/src/generators/podcast-generator.ts`
- Create: `services/content_generator_service/src/clients/kokoro-client.ts`
- Create: `services/content_generator_service/test/podcast-script-agent.test.ts`
- Create: `services/content_generator_service/test/kokoro-client.test.ts`

- [ ] **Step 1: Escribir tests**

```typescript
// services/content_generator_service/test/podcast-script-agent.test.ts
import { describe, it, expect, vi } from "vitest";
import { PodcastScriptAgent } from "../src/agents/podcast-script-agent.js";

const mockAnthropic = { messages: { create: vi.fn() } };

describe("PodcastScriptAgent", () => {
  const agent = new PodcastScriptAgent(mockAnthropic as any);

  it("returns array of script lines with speaker and text", async () => {
    const fakeScript = [
      { speaker: "A", text: "Hola, hoy hablaremos de fotosíntesis." },
      { speaker: "B", text: "¡Qué interesante! ¿Qué es exactamente?" },
    ];
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(fakeScript) }],
    });

    const result = await agent.generateScript({
      research: { title: "test", abstract: "", sections: [], bibliography: [], infographicData: { stats: [], timeline: [], concepts: [] } },
      depth: "summary",
    });

    expect(result).toHaveLength(2);
    expect(result[0].speaker).toBe("A");
    expect(result[1].speaker).toBe("B");
  });

  it("throws on invalid JSON", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: "no es json" }],
    });
    await expect(agent.generateScript({
      research: { title: "t", abstract: "", sections: [], bibliography: [], infographicData: { stats: [], timeline: [], concepts: [] } },
      depth: "summary",
    })).rejects.toThrow("PodcastScriptAgent: invalid JSON from Claude");
  });
});
```

```typescript
// services/content_generator_service/test/kokoro-client.test.ts
import { describe, it, expect, vi } from "vitest";
import { KokoroClient } from "../src/clients/kokoro-client.js";

describe("KokoroClient", () => {
  it("calls /synthesize and returns a Buffer", async () => {
    const fakeBuffer = Buffer.from("fake-mp3-data");
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: async () => fakeBuffer.buffer,
    });
    global.fetch = mockFetch as any;

    const client = new KokoroClient("http://localhost:8880");
    const result = await client.synthesize({ text: "Hola", voice: "af_heart" });

    expect(result).toBeInstanceOf(Buffer);
    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:8880/synthesize",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("throws when kokoro server returns non-ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 }) as any;
    const client = new KokoroClient("http://localhost:8880");
    await expect(client.synthesize({ text: "test", voice: "af_heart" }))
      .rejects.toThrow("Kokoro TTS error: 500");
  });
});
```

- [ ] **Step 2: Ejecutar tests — deben fallar**

```powershell
pnpm test
```
Esperado: FAIL — clases no encontradas.

- [ ] **Step 3: Crear podcast-script-agent.ts**

```typescript
// services/content_generator_service/src/agents/podcast-script-agent.ts
import Anthropic from "@anthropic-ai/sdk";
import type { ResearchOutput } from "./research-agent.js";
import type { JobDepth } from "../repositories/generation-job-repository.js";

export interface ScriptLine {
  speaker: "A" | "B";
  text: string;
}

export interface PodcastScriptInput {
  research: ResearchOutput;
  depth: JobDepth;
}

export class PodcastScriptAgent {
  constructor(private readonly anthropic: Anthropic) {}

  async generateScript(input: PodcastScriptInput): Promise<ScriptLine[]> {
    const targetMinutes = input.depth === "summary" ? 5 : 10;

    const prompt = `Eres un guionista de podcasts educativos. Genera un script en español para dos presentadores:
- Host A "Ana": didáctica, explica con claridad
- Host B "Bruno": curioso, hace preguntas que el oyente haría

Duración objetivo: ${targetMinutes} minutos (~${targetMinutes * 130} palabras).
Basado en esta investigación:

TÍTULO: ${input.research.title}
RESUMEN: ${input.research.abstract}
SECCIONES: ${input.research.sections.map(s => `${s.heading}: ${s.content.slice(0, 300)}`).join(" | ")}

Devuelve ÚNICAMENTE un array JSON sin markdown:
[{"speaker": "A", "text": "..."}, {"speaker": "B", "text": "..."}, ...]`;

    const response = await this.anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: input.depth === "summary" ? 2000 : 4000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.content
      .filter(b => b.type === "text")
      .map(b => (b as { type: "text"; text: string }).text)
      .join("");

    let parsed: ScriptLine[];
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("PodcastScriptAgent: invalid JSON from Claude");
    }

    if (!Array.isArray(parsed) || !parsed[0]?.speaker || !parsed[0]?.text) {
      throw new Error("PodcastScriptAgent: invalid JSON from Claude");
    }

    return parsed;
  }
}
```

- [ ] **Step 4: Crear kokoro-client.ts**

```typescript
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
        lang_code: opts.langCode ?? "e", // español por defecto
      }),
    });

    if (!response.ok) {
      throw new Error(`Kokoro TTS error: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
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
```

- [ ] **Step 5: Crear podcast-generator.ts**

```typescript
// services/content_generator_service/src/generators/podcast-generator.ts
import { execFile } from "node:child_process";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import type { KokoroClient } from "../clients/kokoro-client.js";
import type { ScriptLine } from "../agents/podcast-script-agent.js";

const execFileAsync = promisify(execFile);

const VOICE_MAP: Record<"A" | "B", "af_heart" | "am_michael"> = {
  A: "af_heart",
  B: "am_michael",
};

export async function generatePodcast(
  script: ScriptLine[],
  kokoroClient: KokoroClient
): Promise<Buffer> {
  const dir = await mkdtemp(join(tmpdir(), "cumbre-podcast-"));

  try {
    // Sintetizar cada línea
    const mp3Paths: string[] = [];
    for (let i = 0; i < script.length; i++) {
      const line = script[i];
      const audio = await kokoroClient.synthesize({
        text: line.text,
        voice: VOICE_MAP[line.speaker],
      });
      const mp3Path = join(dir, `line-${String(i).padStart(3, "0")}.mp3`);
      await writeFile(mp3Path, audio);
      mp3Paths.push(mp3Path);
    }

    // Crear lista para ffmpeg
    const listPath = join(dir, "list.txt");
    const listContent = mp3Paths.map(p => `file '${p}'`).join("\n");
    await writeFile(listPath, listContent, "utf8");

    // Concatenar con ffmpeg
    const outputPath = join(dir, "podcast.mp3");
    await execFileAsync("ffmpeg", [
      "-f", "concat",
      "-safe", "0",
      "-i", listPath,
      "-c", "copy",
      outputPath,
    ], { timeout: 120_000 });

    return await readFile(outputPath);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
```

- [ ] **Step 6: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 4 tests passing.

- [ ] **Step 7: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): podcast script agent, kokoro client, podcast generator"
```

---

### Task 7: Infographic Generator

**Files:**
- Create: `services/content_generator_service/src/generators/infographic-generator.ts`
- Create: `services/content_generator_service/src/generators/infographic-template.ts`
- Create: `services/content_generator_service/test/infographic-template.test.ts`

- [ ] **Step 1: Instalar Playwright**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
pnpm add playwright
pnpm exec playwright install chromium
```

- [ ] **Step 2: Escribir test del template**

```typescript
// services/content_generator_service/test/infographic-template.test.ts
import { describe, it, expect } from "vitest";
import { buildInfographicHtml } from "../src/generators/infographic-template.js";
import type { ResearchOutput } from "../src/agents/research-agent.js";

const sample: ResearchOutput = {
  title: "Fotosíntesis",
  abstract: "Las plantas convierten luz en energía.",
  sections: [{ heading: "Proceso", content: "La clorofila absorbe la luz.", keyPoints: ["clorofila"] }],
  bibliography: [],
  infographicData: {
    stats: [{ label: "Eficiencia", value: "11%" }],
    timeline: [{ year: "1779", event: "Descubrimiento por Jan Ingenhousz" }],
    concepts: ["clorofila", "fotones", "ATP"],
  },
};

describe("buildInfographicHtml", () => {
  it("returns an HTML string with doctype", () => {
    const html = buildInfographicHtml(sample);
    expect(html).toContain("<!DOCTYPE html>");
  });

  it("includes the title", () => {
    const html = buildInfographicHtml(sample);
    expect(html).toContain("Fotosíntesis");
  });

  it("includes stats", () => {
    const html = buildInfographicHtml(sample);
    expect(html).toContain("Eficiencia");
    expect(html).toContain("11%");
  });

  it("includes concepts", () => {
    const html = buildInfographicHtml(sample);
    expect(html).toContain("clorofila");
  });
});
```

- [ ] **Step 3: Ejecutar test — debe fallar**

```powershell
pnpm test
```
Esperado: FAIL — `buildInfographicHtml` not found.

- [ ] **Step 4: Crear infographic-template.ts**

```typescript
// services/content_generator_service/src/generators/infographic-template.ts
import type { ResearchOutput } from "../agents/research-agent.js";

export function buildInfographicHtml(research: ResearchOutput): string {
  const { title, abstract, sections, infographicData } = research;

  const statsHtml = infographicData.stats.map(s => `
    <div class="stat-card">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join("");

  const timelineHtml = infographicData.timeline.map(t => `
    <div class="timeline-item">
      <span class="timeline-year">${t.year}</span>
      <span class="timeline-event">${t.event}</span>
    </div>`).join("");

  const conceptsHtml = infographicData.concepts.map(c => `
    <span class="concept-tag">${c}</span>`).join("");

  const sectionsHtml = sections.slice(0, 3).map(s => `
    <div class="section-card">
      <h3>${s.heading}</h3>
      <p>${s.content.slice(0, 200)}${s.content.length > 200 ? "..." : ""}</p>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 1600px; overflow: hidden;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: white; font-family: 'Segoe UI', sans-serif; padding: 40px;
  }
  .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #7C3AED; padding-bottom: 20px; }
  .title { font-size: 48px; font-weight: 800; color: #A78BFA; margin-bottom: 12px; }
  .abstract { font-size: 18px; color: #C4B5FD; max-width: 900px; margin: 0 auto; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }
  .section-card { background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.4); border-radius: 12px; padding: 20px; }
  .section-card h3 { color: #A78BFA; font-size: 20px; margin-bottom: 10px; }
  .section-card p { color: #DDD6FE; font-size: 15px; line-height: 1.6; }
  .stats { display: flex; gap: 16px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap; }
  .stat-card { background: rgba(124,58,237,0.25); border-radius: 12px; padding: 20px 28px; text-align: center; min-width: 140px; }
  .stat-value { font-size: 36px; font-weight: 800; color: #7C3AED; }
  .stat-label { font-size: 14px; color: #C4B5FD; margin-top: 6px; }
  .timeline { margin-bottom: 32px; }
  .timeline h2 { color: #A78BFA; font-size: 24px; margin-bottom: 16px; }
  .timeline-item { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 12px; }
  .timeline-year { background: #7C3AED; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 700; white-space: nowrap; font-size: 14px; }
  .timeline-event { color: #DDD6FE; font-size: 15px; padding-top: 4px; }
  .concepts { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
  .concepts h2 { width: 100%; color: #A78BFA; font-size: 24px; margin-bottom: 8px; }
  .concept-tag { background: rgba(124,58,237,0.3); border: 1px solid #7C3AED; color: #DDD6FE; padding: 8px 16px; border-radius: 20px; font-size: 15px; }
  .footer { text-align: center; color: #6D28D9; font-size: 14px; margin-top: auto; }
</style>
</head>
<body>
  <div class="header">
    <div class="title">${title}</div>
    <div class="abstract">${abstract}</div>
  </div>

  ${infographicData.stats.length > 0 ? `<div class="stats">${statsHtml}</div>` : ""}

  <div class="grid">${sectionsHtml}</div>

  ${infographicData.timeline.length > 0 ? `
  <div class="timeline">
    <h2>Línea de Tiempo</h2>
    ${timelineHtml}
  </div>` : ""}

  ${infographicData.concepts.length > 0 ? `
  <div class="concepts">
    <h2>Conceptos Clave</h2>
    ${conceptsHtml}
  </div>` : ""}

  <div class="footer">Generado por CUMBRE Platform · ${new Date().toLocaleDateString("es-PE")}</div>
</body>
</html>`;
}
```

- [ ] **Step 5: Crear infographic-generator.ts**

```typescript
// services/content_generator_service/src/generators/infographic-generator.ts
import { chromium } from "playwright";
import { buildInfographicHtml } from "./infographic-template.js";
import type { ResearchOutput } from "../agents/research-agent.js";

export async function generateInfographic(research: ResearchOutput): Promise<Buffer> {
  const html = buildInfographicHtml(research);
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 1600 });
    await page.setContent(html, { waitUntil: "networkidle" });
    const screenshot = await page.screenshot({ type: "png", fullPage: false });
    return Buffer.from(screenshot);
  } finally {
    await browser.close();
  }
}
```

- [ ] **Step 6: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 4 tests passing.

- [ ] **Step 7: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): infographic generator with Playwright + HTML template"
```

---

### Task 8: Supabase Storage Client

**Files:**
- Create: `services/content_generator_service/src/clients/storage-client.ts`
- Create: `services/content_generator_service/test/storage-client.test.ts`

- [ ] **Step 1: Escribir test**

```typescript
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
    const buffer = Buffer.from("fake-pdf");
    const url = await client.upload(buffer, "pdfs/job-1.pdf", "application/pdf");
    expect(url).toBe("https://storage.example.com/file.pdf");
  });

  it("throws when upload fails", async () => {
    mockSupabase.storage.from.mockReturnValueOnce({
      upload: vi.fn().mockResolvedValue({ error: new Error("storage error") }),
      getPublicUrl: vi.fn(),
    });
    const client2 = new StorageClient(mockSupabase as any, "generated-content");
    await expect(client2.upload(Buffer.from("x"), "path", "application/pdf"))
      .rejects.toThrow("storage error");
  });
});
```

- [ ] **Step 2: Ejecutar test — debe fallar**

```powershell
pnpm test
```
Esperado: FAIL.

- [ ] **Step 3: Crear storage-client.ts**

```typescript
// services/content_generator_service/src/clients/storage-client.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function createStorageClient(supabaseUrl: string, serviceKey: string): SupabaseClient {
  return createClient(supabaseUrl, serviceKey);
}

export class StorageClient {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly bucket: string
  ) {}

  async upload(buffer: Buffer, path: string, mimeType: string): Promise<string> {
    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(path, buffer, {
        contentType: mimeType,
        upsert: true,
      });

    if (error) throw error;

    const { data } = this.supabase.storage.from(this.bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}
```

- [ ] **Step 4: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS.

- [ ] **Step 5: Crear bucket en Supabase**

En el dashboard de Supabase:
1. Ir a **Storage** → **New bucket**
2. Nombre: `generated-content`
3. Marcar como **Public**
4. Guardar

- [ ] **Step 6: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): Supabase storage client"
```

---

### Task 9: Pipeline Orquestador + HTTP Routes

**Files:**
- Create: `services/content_generator_service/src/pipeline/generation-pipeline.ts`
- Create: `services/content_generator_service/src/routes/generator-routes.ts`
- Create: `services/content_generator_service/src/controllers/generator-controller.ts`
- Create: `services/content_generator_service/src/app.ts`
- Create: `services/content_generator_service/src/server.ts`
- Create: `services/content_generator_service/test/pipeline.test.ts`

- [ ] **Step 1: Escribir test del pipeline**

```typescript
// services/content_generator_service/test/pipeline.test.ts
import { describe, it, expect, vi } from "vitest";
import { GenerationPipeline } from "../src/pipeline/generation-pipeline.js";

const mockResearchAgent = { research: vi.fn() };
const mockPodcastAgent = { generateScript: vi.fn() };
const mockJobRepo = {
  createJob: vi.fn(),
  updateStatus: vi.fn(),
  setDone: vi.fn(),
  findById: vi.fn(),
  countTodayByUser: vi.fn(),
};
const mockLimitRepo = { getLimitForRole: vi.fn() };
const mockStorage = { upload: vi.fn() };
const mockKokoro = { isHealthy: vi.fn(), synthesize: vi.fn() };
const mockGeneratePdf = vi.fn();
const mockGeneratePodcast = vi.fn();
const mockGenerateInfographic = vi.fn();

describe("GenerationPipeline", () => {
  const pipeline = new GenerationPipeline({
    researchAgent: mockResearchAgent as any,
    podcastAgent: mockPodcastAgent as any,
    jobRepo: mockJobRepo as any,
    limitRepo: mockLimitRepo as any,
    storage: mockStorage as any,
    kokoroClient: mockKokoro as any,
    generatePdf: mockGeneratePdf,
    generatePodcast: mockGeneratePodcast,
    generateInfographic: mockGenerateInfographic,
  });

  it("throws when daily limit is reached", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 5 });
    mockJobRepo.countTodayByUser.mockResolvedValue(5);

    await expect(pipeline.run({
      userId: "u1", role: "student", topic: "test",
      depth: "summary", sources: [], outputs: ["pdf"],
    })).rejects.toThrow("Límite diario alcanzado");
  });

  it("creates a job and returns jobId immediately", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 20 });
    mockJobRepo.countTodayByUser.mockResolvedValue(0);
    mockJobRepo.createJob.mockResolvedValue({ id: "job-123", status: "pending" });
    mockResearchAgent.research.mockResolvedValue({ title: "T", abstract: "", sections: [], bibliography: [], infographicData: { stats: [], timeline: [], concepts: [] } });
    mockGeneratePdf.mockResolvedValue(Buffer.from("pdf"));
    mockStorage.upload.mockResolvedValue("https://url.com/file.pdf");
    mockJobRepo.updateStatus.mockResolvedValue({});
    mockJobRepo.setDone.mockResolvedValue({});

    const { jobId } = await pipeline.run({
      userId: "u1", role: "teacher", topic: "test",
      depth: "summary", sources: [], outputs: ["pdf"],
    });

    expect(jobId).toBe("job-123");
  });
});
```

- [ ] **Step 2: Ejecutar test — debe fallar**

```powershell
pnpm test
```
Esperado: FAIL.

- [ ] **Step 3: Crear generation-pipeline.ts**

```typescript
// services/content_generator_service/src/pipeline/generation-pipeline.ts
import type { ResearchAgent } from "../agents/research-agent.js";
import type { PodcastScriptAgent } from "../agents/podcast-script-agent.js";
import type { GenerationJobRepository, CreateJobInput, JobResults } from "../repositories/generation-job-repository.js";
import type { GenerationLimitRepository } from "../repositories/generation-limit-repository.js";
import type { StorageClient } from "../clients/storage-client.js";
import type { KokoroClient } from "../clients/kokoro-client.js";
import type { ResearchOutput } from "../agents/research-agent.js";
import type { ScriptLine } from "../agents/podcast-script-agent.js";

export interface PipelineDeps {
  researchAgent: ResearchAgent;
  podcastAgent: PodcastScriptAgent;
  jobRepo: GenerationJobRepository;
  limitRepo: GenerationLimitRepository;
  storage: StorageClient;
  kokoroClient: KokoroClient;
  generatePdf: (research: ResearchOutput) => Promise<Buffer>;
  generatePodcast: (script: ScriptLine[], kokoro: KokoroClient) => Promise<Buffer>;
  generateInfographic: (research: ResearchOutput) => Promise<Buffer>;
}

export interface RunInput extends CreateJobInput {}

export class GenerationPipeline {
  constructor(private readonly deps: PipelineDeps) {}

  async run(input: RunInput): Promise<{ jobId: string }> {
    // Verificar límite diario
    const limit = await this.deps.limitRepo.getLimitForRole(input.role);
    if (limit && limit.dailyLimit !== -1) {
      const count = await this.deps.jobRepo.countTodayByUser(input.userId);
      if (count >= limit.dailyLimit) {
        throw new Error("Límite diario alcanzado");
      }
    }

    // Crear job
    const job = await this.deps.jobRepo.createJob(input);
    const jobId = job.id;

    // Procesar en background (no await)
    this.processJob(jobId, input).catch(() => {
      // error ya guardado en DB por processJob
    });

    return { jobId };
  }

  private async processJob(jobId: string, input: RunInput): Promise<void> {
    await this.deps.jobRepo.updateStatus(jobId, "processing");

    try {
      // Step 1: Research
      const research = await this.deps.researchAgent.research({
        topic: input.topic,
        depth: input.depth,
        sources: input.sources,
      });

      const results: JobResults = {};
      const tasks: Promise<void>[] = [];

      // Step 2+: Generar outputs en paralelo
      if (input.outputs.includes("pdf")) {
        tasks.push(
          this.deps.generatePdf(research).then(async (buf) => {
            const url = await this.deps.storage.upload(buf, `pdfs/${jobId}.pdf`, "application/pdf");
            results.pdfUrl = url;
          })
        );
      }

      if (input.outputs.includes("infographic")) {
        tasks.push(
          this.deps.generateInfographic(research).then(async (buf) => {
            const url = await this.deps.storage.upload(buf, `infographics/${jobId}.png`, "image/png");
            results.infographicUrl = url;
          })
        );
      }

      if (input.outputs.includes("podcast")) {
        tasks.push(
          this.deps.podcastAgent.generateScript({ research, depth: input.depth }).then(async (script) => {
            const buf = await this.deps.generatePodcast(script, this.deps.kokoroClient);
            const url = await this.deps.storage.upload(buf, `podcasts/${jobId}.mp3`, "audio/mpeg");
            results.podcastUrl = url;
          })
        );
      }

      await Promise.all(tasks);
      await this.deps.jobRepo.setDone(jobId, results);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await this.deps.jobRepo.updateStatus(jobId, "error", msg);
    }
  }
}
```

- [ ] **Step 4: Crear generator-controller.ts**

```typescript
// services/content_generator_service/src/controllers/generator-controller.ts
import type { RequestContext } from "@cumbre/api-runtime";
import type { GenerationPipeline } from "../pipeline/generation-pipeline.js";
import type { GenerationJobRepository } from "../repositories/generation-job-repository.js";
import type { GenerationLimitRepository } from "../repositories/generation-limit-repository.js";

export class GeneratorController {
  constructor(
    private readonly pipeline: GenerationPipeline,
    private readonly jobRepo: GenerationJobRepository,
    private readonly limitRepo: GenerationLimitRepository,
  ) {}

  generate = async ({ body, actor }: RequestContext): Promise<unknown> => {
    const { topic, depth, sources, outputs } = body as {
      topic: string;
      depth: "summary" | "deep";
      sources: { type: string; data: string }[];
      outputs: string[];
    };

    const result = await this.pipeline.run({
      userId: actor!.userId,
      role: actor!.role,
      topic,
      depth,
      sources: sources as any,
      outputs,
    });

    return result;
  };

  getJob = async ({ params }: RequestContext): Promise<unknown> => {
    const { jobId } = params as { jobId: string };
    const job = await this.jobRepo.findById(jobId);
    if (!job) throw new Error("Job not found");
    return job;
  };

  listJobs = async ({ actor }: RequestContext): Promise<unknown> => {
    return this.jobRepo.listByUser(actor!.userId);
  };

  getLimits = async (_ctx: RequestContext): Promise<unknown> => {
    return this.limitRepo.listAll();
  };

  updateLimit = async ({ body }: RequestContext): Promise<unknown> => {
    const { role, dailyLimit } = body as { role: string; dailyLimit: number };
    return this.limitRepo.upsertLimit(role, dailyLimit);
  };
}
```

- [ ] **Step 5: Crear generator-routes.ts**

```typescript
// services/content_generator_service/src/routes/generator-routes.ts
import type { RouteDefinition } from "@cumbre/api-runtime";
import type { GeneratorController } from "../controllers/generator-controller.js";

export function registerGeneratorRoutes(ctrl: GeneratorController): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/generate",
      handler: ctrl.generate,
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"],
      },
    },
    {
      method: "GET",
      path: "/generate/:jobId",
      handler: ctrl.getJob,
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"],
      },
    },
    {
      method: "GET",
      path: "/generate/history",
      handler: ctrl.listJobs,
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"],
      },
    },
    {
      method: "GET",
      path: "/generate/admin/limits",
      handler: ctrl.getLimits,
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["analytics:read"],
      },
    },
    {
      method: "POST",
      path: "/generate/admin/limits",
      handler: ctrl.updateLimit,
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["content:write"],
      },
    },
  ];
}
```

- [ ] **Step 6: Crear app.ts**

```typescript
// services/content_generator_service/src/app.ts
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { ResearchAgent } from "./agents/research-agent.js";
import { PodcastScriptAgent } from "./agents/podcast-script-agent.js";
import { GenerationPipeline } from "./pipeline/generation-pipeline.js";
import { GeneratorController } from "./controllers/generator-controller.js";
import { HealthController } from "./controllers/health-controller.js";
import { GenerationJobRepository } from "./repositories/generation-job-repository.js";
import { GenerationLimitRepository } from "./repositories/generation-limit-repository.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { KokoroClient } from "./clients/kokoro-client.js";
import { StorageClient } from "./clients/storage-client.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { generatePdf } from "./generators/pdf-generator.js";
import { generatePodcast } from "./generators/podcast-generator.js";
import { generateInfographic } from "./generators/infographic-generator.js";
import { registerGeneratorRoutes } from "./routes/generator-routes.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import type { ContentGeneratorConfig } from "./config/env.js";
import type { Logger } from "./utils/logger.js";

export function createContentGeneratorApp({
  config,
  logger,
  authResolver,
}: {
  config: ContentGeneratorConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}) {
  const prisma = createPrismaClient(config);
  const jobRepo = new GenerationJobRepository(prisma);
  const limitRepo = new GenerationLimitRepository(prisma);

  const anthropic = new Anthropic({ apiKey: config.anthropicApiKey });
  const researchAgent = new ResearchAgent(anthropic);
  const podcastAgent = new PodcastScriptAgent(anthropic);
  const kokoroClient = new KokoroClient(config.kokoroServerUrl);

  const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey);
  const storage = new StorageClient(supabase, "generated-content");

  const pipeline = new GenerationPipeline({
    researchAgent,
    podcastAgent,
    jobRepo,
    limitRepo,
    storage,
    kokoroClient,
    generatePdf,
    generatePodcast,
    generateInfographic,
  });

  const generatorController = new GeneratorController(pipeline, jobRepo, limitRepo);
  const healthController = new HealthController(
    config.serviceName,
    async () => { await prisma.$queryRaw`SELECT 1`; },
    (err) => logger.error("health check failed", { error: String(err) })
  );

  const authServiceClient = new AuthServiceClient(config.authServiceUrl, logger);
  const resolvedAuthResolver = authResolver ?? {
    resolveAccess: (req: any, context: any) =>
      authServiceClient.resolveActorFromAuthorizationHeader(
        req.headers.authorization,
        context.requestId
      ),
  };

  return createRouter(
    [...registerHealthRoutes(healthController), ...registerGeneratorRoutes(generatorController)],
    logger,
    { authResolver: resolvedAuthResolver, requestTimeoutMs: 60_000 }
  );
}
```

- [ ] **Step 7: Crear server.ts**

```typescript
// services/content_generator_service/src/server.ts
import "dotenv/config";
import { createServer } from "node:http";
import { createContentGeneratorApp } from "./app.js";
import { loadContentGeneratorConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadContentGeneratorConfig();
const logger = createLogger(config.serviceName);
const app = createContentGeneratorApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("content_generator_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv,
  });
});
```

- [ ] **Step 8: Ejecutar tests del pipeline**

```powershell
pnpm test
```
Esperado: PASS — todos los tests pasan.

- [ ] **Step 9: Arrancar el servicio en dev y probar endpoint**

```powershell
# Terminal 1: arrancar Kokoro
C:\kokoro-server\start-kokoro.bat

# Terminal 2: arrancar el servicio
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
cp .env.example .env   # rellenar con tus valores reales
pnpm dev
```

```powershell
# Terminal 3: probar con un topic simple (requiere token válido de CUMBRE)
$token = "Bearer TU_TOKEN_AQUI"
$body = '{"topic":"fotosíntesis","depth":"summary","sources":[],"outputs":["pdf"]}'
Invoke-WebRequest -Uri "http://localhost:3004/generate" -Method POST `
  -Headers @{Authorization=$token; "Content-Type"="application/json"} `
  -Body $body | Select-Object -ExpandProperty Content
```
Esperado: `{"jobId":"..."}` — job creado. Luego `GET /generate/:jobId` devuelve status.

- [ ] **Step 10: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): pipeline orchestrator, routes, app wiring, server"
```

---

## Fase 3 — UI en CUMBRE (web_student)

### Task 10: Componente GeneratorPage en web_student

**Files:**
- Create: `apps/web_student/app/generator/page.tsx`
- Create: `apps/web_student/components/generator/generator-form.tsx`
- Create: `apps/web_student/components/generator/job-status-poller.tsx`
- Create: `apps/web_student/components/generator/results-panel.tsx`
- Create: `apps/web_student/services/generator-api.ts`

- [ ] **Step 1: Crear generator-api.ts (cliente del servicio)**

```typescript
// apps/web_student/services/generator-api.ts
const GENERATOR_URL = process.env.NEXT_PUBLIC_GENERATOR_SERVICE_URL ?? "http://localhost:3004";

export interface GenerateRequest {
  topic: string;
  depth: "summary" | "deep";
  sources: { type: "text"; data: string }[];
  outputs: string[];
}

export interface GenerationJob {
  id: string;
  status: "pending" | "processing" | "done" | "error";
  topic: string;
  depth: string;
  outputs: string[];
  results?: {
    pdfUrl?: string;
    podcastUrl?: string;
    infographicUrl?: string;
  };
  errorMsg?: string;
  createdAt: string;
}

export async function startGeneration(req: GenerateRequest, token: string): Promise<{ jobId: string }> {
  const res = await fetch(`${GENERATOR_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(`Generation failed: ${res.status}`);
  return res.json();
}

export async function getJob(jobId: string, token: string): Promise<GenerationJob> {
  const res = await fetch(`${GENERATOR_URL}/generate/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Job fetch failed: ${res.status}`);
  return res.json();
}

export async function listJobs(token: string): Promise<GenerationJob[]> {
  const res = await fetch(`${GENERATOR_URL}/generate/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return [];
  return res.json();
}
```

- [ ] **Step 2: Crear generator-form.tsx**

```tsx
// apps/web_student/components/generator/generator-form.tsx
"use client";
import { useState } from "react";
import type { GenerateRequest } from "../../services/generator-api";

interface Props {
  onSubmit: (req: GenerateRequest) => void;
  isLoading: boolean;
}

export function GeneratorForm({ onSubmit, isLoading }: Props) {
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState<"summary" | "deep">("summary");
  const [outputs, setOutputs] = useState<string[]>(["pdf"]);
  const [extraText, setExtraText] = useState("");

  function toggleOutput(o: string) {
    setOutputs(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim() || outputs.length === 0) return;
    const sources = extraText.trim()
      ? [{ type: "text" as const, data: extraText.trim() }]
      : [];
    onSubmit({ topic: topic.trim(), depth, sources, outputs });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tema *
        </label>
        <input
          type="text"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          placeholder="Ej: La fotosíntesis en plantas tropicales"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Texto adicional (opcional)
        </label>
        <textarea
          value={extraText}
          onChange={e => setExtraText(e.target.value)}
          placeholder="Pega aquí notas, extractos de PDF u otro texto de referencia..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profundidad
        </label>
        <div className="flex gap-3">
          {(["summary", "deep"] as const).map(d => (
            <button
              key={d}
              type="button"
              onClick={() => setDepth(d)}
              className={`flex-1 py-2 px-4 rounded-lg border font-medium transition-colors ${
                depth === d
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-violet-400"
              }`}
            >
              {d === "summary" ? "📝 Resumen" : "🔬 Investigación profunda"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Outputs deseados *
        </label>
        <div className="flex gap-3 flex-wrap">
          {[
            { key: "pdf", label: "📄 PDF Académico" },
            { key: "podcast", label: "🎙️ Podcast" },
            { key: "infographic", label: "🖼️ Infografía" },
          ].map(o => (
            <button
              key={o.key}
              type="button"
              onClick={() => toggleOutput(o.key)}
              className={`py-2 px-4 rounded-lg border font-medium transition-colors ${
                outputs.includes(o.key)
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-violet-400"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !topic.trim() || outputs.length === 0}
        className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Generando..." : "✨ Generar contenido"}
      </button>
    </form>
  );
}
```

- [ ] **Step 3: Crear job-status-poller.tsx**

```tsx
// apps/web_student/components/generator/job-status-poller.tsx
"use client";
import { useEffect, useState } from "react";
import { getJob, type GenerationJob } from "../../services/generator-api";

interface Props {
  jobId: string;
  token: string;
  onDone: (job: GenerationJob) => void;
  onError: (msg: string) => void;
}

export function JobStatusPoller({ jobId, token, onDone, onError }: Props) {
  const [status, setStatus] = useState<string>("pending");
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(d => d.length >= 3 ? "." : d + ".");
    }, 500);

    const pollInterval = setInterval(async () => {
      try {
        const job = await getJob(jobId, token);
        setStatus(job.status);
        if (job.status === "done") {
          clearInterval(pollInterval);
          clearInterval(dotInterval);
          onDone(job);
        } else if (job.status === "error") {
          clearInterval(pollInterval);
          clearInterval(dotInterval);
          onError(job.errorMsg ?? "Error desconocido");
        }
      } catch {
        // ignorar errores de red en el polling
      }
    }, 3000);

    return () => {
      clearInterval(pollInterval);
      clearInterval(dotInterval);
    };
  }, [jobId, token, onDone, onError]);

  const statusLabels: Record<string, string> = {
    pending: "En cola",
    processing: "Generando",
    done: "Listo",
    error: "Error",
  };

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4 animate-spin-slow">⚙️</div>
      <p className="text-lg font-semibold text-gray-700">
        {statusLabels[status] ?? status}{dots}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Esto puede tomar 1-3 minutos dependiendo de los outputs seleccionados.
      </p>
    </div>
  );
}
```

- [ ] **Step 4: Crear results-panel.tsx**

```tsx
// apps/web_student/components/generator/results-panel.tsx
"use client";
import type { GenerationJob } from "../../services/generator-api";

interface Props {
  job: GenerationJob;
  onReset: () => void;
}

export function ResultsPanel({ job, onReset }: Props) {
  const { results } = job;
  if (!results) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          ✅ {job.topic}
        </h2>
        <button
          onClick={onReset}
          className="text-sm text-violet-600 hover:text-violet-800 font-medium"
        >
          ← Generar otro
        </button>
      </div>

      {results.pdfUrl && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b">
            <span className="font-medium text-gray-700">📄 PDF Académico</span>
            <a
              href={results.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-violet-600 hover:underline"
            >
              Descargar
            </a>
          </div>
          <iframe
            src={results.pdfUrl}
            className="w-full h-96"
            title="PDF preview"
          />
        </div>
      )}

      {results.podcastUrl && (
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="font-medium text-gray-700 mb-3">🎙️ Podcast</p>
          <audio controls className="w-full">
            <source src={results.podcastUrl} type="audio/mpeg" />
          </audio>
          <a
            href={results.podcastUrl}
            download
            className="mt-2 inline-block text-sm text-violet-600 hover:underline"
          >
            Descargar MP3
          </a>
        </div>
      )}

      {results.infographicUrl && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b">
            <span className="font-medium text-gray-700">🖼️ Infografía</span>
            <a
              href={results.infographicUrl}
              download
              className="text-sm text-violet-600 hover:underline"
            >
              Descargar PNG
            </a>
          </div>
          <img
            src={results.infographicUrl}
            alt="Infografía generada"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Crear app/generator/page.tsx**

```tsx
// apps/web_student/app/generator/page.tsx
"use client";
import { useState, useCallback } from "react";
import { GeneratorForm } from "../../components/generator/generator-form";
import { JobStatusPoller } from "../../components/generator/job-status-poller";
import { ResultsPanel } from "../../components/generator/results-panel";
import { startGeneration, type GenerateRequest, type GenerationJob } from "../../services/generator-api";
import { useAuth } from "../../hooks/use-auth"; // hook existente en el proyecto

type Phase = "form" | "polling" | "done" | "error";

export default function GeneratorPage() {
  const { token } = useAuth();
  const [phase, setPhase] = useState<Phase>("form");
  const [jobId, setJobId] = useState<string | null>(null);
  const [doneJob, setDoneJob] = useState<GenerationJob | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(req: GenerateRequest) {
    if (!token) return;
    try {
      setPhase("polling");
      const { jobId } = await startGeneration(req, token);
      setJobId(jobId);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error al iniciar generación");
      setPhase("error");
    }
  }

  const handleDone = useCallback((job: GenerationJob) => {
    setDoneJob(job);
    setPhase("done");
  }, []);

  const handleError = useCallback((msg: string) => {
    setErrorMsg(msg);
    setPhase("error");
  }, []);

  function reset() {
    setPhase("form");
    setJobId(null);
    setDoneJob(null);
    setErrorMsg(null);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">✨ Generador de Contenido</h1>
        <p className="text-gray-500 mt-2">
          Genera PDFs académicos, podcasts e infografías sobre cualquier tema.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {phase === "form" && (
          <GeneratorForm onSubmit={handleSubmit} isLoading={false} />
        )}

        {phase === "polling" && jobId && token && (
          <JobStatusPoller
            jobId={jobId}
            token={token}
            onDone={handleDone}
            onError={handleError}
          />
        )}

        {phase === "done" && doneJob && (
          <ResultsPanel job={doneJob} onReset={reset} />
        )}

        {phase === "error" && (
          <div className="text-center py-8">
            <p className="text-red-600 font-medium mb-4">❌ {errorMsg}</p>
            <button onClick={reset} className="text-violet-600 hover:underline">
              ← Intentar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Agregar ruta al nav de web_student**

Busca el archivo de navegación en `apps/web_student/` (tipicamente `components/nav` o `app/layout.tsx`) y agrega:
```tsx
{ href: "/generator", label: "✨ Generador", icon: SparklesIcon }
```

- [ ] **Step 7: Agregar env var en web_student**

En `apps/web_student/.env.local`:
```env
NEXT_PUBLIC_GENERATOR_SERVICE_URL=http://localhost:3004
```

- [ ] **Step 8: Verificar que la página carga**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\apps\web_student
pnpm dev
```
Navegar a `http://localhost:3000/generator` — debe mostrar el formulario.

- [ ] **Step 9: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add apps/web_student/
git commit -m "feat(web-student): content generator page with form, polling and results"
```

---

## Fase 4 — Auto-inicio de Kokoro en Windows

### Task 11: Script de auto-inicio de Kokoro

**Files:**
- Create: `C:/kokoro-server/start-kokoro-with-ngrok.bat`

- [ ] **Step 1: Crear script combinado (Kokoro + ngrok)**

```bat
@echo off
title Kokoro TTS Server + ngrok

:: Arrancar kokoro en background
start "Kokoro TTS" cmd /k "cd /d C:\kokoro-server && call venv\Scripts\activate.bat && uvicorn server:app --host 0.0.0.0 --port 8880 --workers 1"

:: Esperar 5 segundos para que kokoro arranque
timeout /t 5 /nobreak

:: Arrancar ngrok
start "ngrok tunnel" cmd /k "ngrok http 8880"

echo Kokoro TTS y ngrok arrancados.
echo Abre http://localhost:4040 para ver la URL publica de ngrok.
pause
```

- [ ] **Step 2: Agregar al Startup de Windows**

```powershell
$startupFolder = [Environment]::GetFolderPath("Startup")
$shortcutPath = Join-Path $startupFolder "KokoroTTS.lnk"
$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = "C:\kokoro-server\start-kokoro-with-ngrok.bat"
$shortcut.WorkingDirectory = "C:\kokoro-server"
$shortcut.Save()
Write-Host "Shortcut created in Startup folder: $shortcutPath"
```
Esperado: próxima vez que enciendas la PC, Kokoro y ngrok arrancan automáticamente.

- [ ] **Step 3: Probar el script manualmente**

```powershell
C:\kokoro-server\start-kokoro-with-ngrok.bat
```
Abrir `http://localhost:4040` en el navegador — ver la URL pública de ngrok.
Copiar la URL y actualizar `KOKORO_SERVER_URL` en los `.env` de los servicios.

- [ ] **Step 4: Commit final**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add .
git commit -m "feat(content-generator): complete implementation - Kokoro TTS, service, UI, auto-start"
```

---

## Self-Review

**Cobertura del spec:**
- ✅ Kokoro TTS server local (Tasks 1, 11)
- ✅ content_generator_service completo (Tasks 2-9)
- ✅ Research Agent con Claude (Task 4)
- ✅ PDF/LaTeX Generator (Task 5)
- ✅ Podcast pipeline (Task 6)
- ✅ Infographic con Playwright (Task 7)
- ✅ Supabase Storage (Task 8)
- ✅ Pipeline orquestador con límites por rol (Task 9)
- ✅ UI en web_student (Task 10)
- ✅ Límites configurables en DB (Task 3 seed)
- ✅ Fallback documentado (KokoroClient.isHealthy — usado en pipeline)
- ⚠️ UI en web_teacher y web_admin: mismos componentes, copiar GeneratorPage — omitido por YAGNI (mismo código, diferente layout padre)

**Tipos consistentes:**
- `JobDepth`, `JobSource`, `JobResults`, `JobStatus` definidos en `generation-job-repository.ts` y reusados en todos los archivos
- `ResearchOutput` definido en `research-agent.ts` y reusado en todos los generators
- `ScriptLine` definido en `podcast-script-agent.ts` y reusado en `podcast-generator.ts`
- `KokoroClient` tipado consistentemente con `SynthesizeOptions`

**Sin placeholders:**
- Todos los steps tienen código completo
- Comandos con output esperado
- Sin TBDs
