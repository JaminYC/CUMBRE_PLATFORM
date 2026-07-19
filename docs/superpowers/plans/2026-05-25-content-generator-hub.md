# Content Generator Hub — Implementation Plan (v2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un sistema de generación automática de PDFs académicos, podcasts MP3 reales (via NotebookLM) e infografías dentro de CUMBRE, con `notebooklm-py` y Kokoro TTS corriendo localmente en la PC del operador.

**Architecture:** 
- `notebooklm-server` (Python FastAPI, puerto 8881) — motor principal de podcasts e infografías usando la cuenta Google del operador via `notebooklm-py`
- `kokoro-server` (Python FastAPI, puerto 8880) — fallback TTS local con RTX 4060 Ti
- `content_generator_service` (TypeScript, Railway) — orquesta todo: research con Claude, PDF con pdflatex, delega podcast/infografía al servidor local via ngrok
- UI en `web_student` / `web_teacher` / `web_admin`

**Tech Stack:** Python/FastAPI (`notebooklm-py`, Kokoro), TypeScript/Node.js, `@cumbre/api-runtime`, Prisma, Anthropic SDK, pdflatex, Playwright (fallback), ffmpeg (fallback), ngrok, Supabase Storage.

---

## Fase 1 — Servidores locales en PC

### Task 1: NotebookLM Server (puerto 8881)

**Files:**
- Create: `C:/notebooklm-server/server.py`
- Create: `C:/notebooklm-server/requirements.txt`
- Create: `C:/notebooklm-server/start-notebooklm.bat`

- [ ] **Step 1: Instalar notebooklm-py**

Abre PowerShell como administrador:
```powershell
New-Item -ItemType Directory -Force "C:\notebooklm-server"
Set-Location "C:\notebooklm-server"
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install "notebooklm-py[browser]"
playwright install chromium
```
Esperado: instalación sin errores.

- [ ] **Step 2: Autenticar con tu cuenta Google**

```powershell
notebooklm login
```
Se abrirá Chrome. Inicia sesión con `jaminyauricajas@gmail.com`.
Verifica:
```powershell
notebooklm auth check --test --json
```
Esperado: `{"authenticated": true, ...}`

- [ ] **Step 3: Crear requirements.txt**

```
notebooklm-py[browser]==0.4.0
fastapi==0.115.6
uvicorn[standard]==0.34.0
pydantic==2.10.4
httpx==0.28.1
supabase==2.10.0
python-dotenv==1.0.1
```

- [ ] **Step 4: Instalar dependencias**

```powershell
pip install -r C:\notebooklm-server\requirements.txt
```

- [ ] **Step 5: Crear .env**

```env
SUPABASE_URL=https://TU_PROJECT.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
STORAGE_BUCKET=generated-content
```

- [ ] **Step 6: Crear server.py**

```python
# C:/notebooklm-server/server.py
import asyncio
import os
import uuid
import httpx
from io import BytesIO
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from notebooklm import NotebookLMClient
from supabase import create_client

load_dotenv()

app = FastAPI(title="NotebookLM Server")

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
BUCKET = os.environ.get("STORAGE_BUCKET", "generated-content")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


class GeneratePodcastRequest(BaseModel):
    title: str
    content: str
    language: str = "es"
    length: str = "STANDARD"   # "SHORT" o "STANDARD"
    instructions: str = "Genera un podcast educativo en español, estilo conversacional entre dos hosts."


class GenerateInfographicRequest(BaseModel):
    title: str
    content: str


def upload_to_supabase(data: bytes, path: str, mime_type: str) -> str:
    supabase.storage.from_(BUCKET).upload(
        path, data, {"content-type": mime_type, "upsert": "true"}
    )
    result = supabase.storage.from_(BUCKET).get_public_url(path)
    return result


@app.get("/health")
async def health():
    try:
        async with await NotebookLMClient.from_storage() as client:
            notebooks = await client.notebooks.list()
            return {"status": "ok", "notebooklm": "connected", "notebooks": len(notebooks)}
    except Exception as e:
        return {"status": "degraded", "notebooklm": str(e)}


@app.post("/generate-podcast")
async def generate_podcast(req: GeneratePodcastRequest):
    notebook_id = None
    try:
        async with await NotebookLMClient.from_storage() as client:
            # 1. Crear notebook temporal
            notebook = await client.notebooks.create(f"CUMBRE-{uuid.uuid4().hex[:8]}")
            notebook_id = notebook.id

            # 2. Agregar contenido como fuente
            await client.sources.add_text(
                notebook_id,
                req.content,
                title=req.title,
                wait=True
            )

            # 3. Generar podcast
            length_map = {"SHORT": "SHORT", "STANDARD": "STANDARD"}
            status = await client.artifacts.generate_audio(
                notebook_id,
                instructions=req.instructions,
                language=req.language,
                length=length_map.get(req.length, "STANDARD"),
            )
            await client.artifacts.wait_for_completion(notebook_id, status.task_id)

            # 4. Descargar
            tmp_path = f"C:\\notebooklm-server\\tmp_{uuid.uuid4().hex}.mp3"
            await client.artifacts.download_audio(notebook_id, tmp_path)

            # 5. Subir a Supabase
            with open(tmp_path, "rb") as f:
                data = f.read()
            os.remove(tmp_path)

            storage_path = f"podcasts/{uuid.uuid4().hex}.mp3"
            url = upload_to_supabase(data, storage_path, "audio/mpeg")

            return {"url": url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # 6. Limpiar notebook
        if notebook_id:
            try:
                async with await NotebookLMClient.from_storage() as client:
                    await client.notebooks.delete(notebook_id)
            except Exception:
                pass


@app.post("/generate-infographic")
async def generate_infographic(req: GenerateInfographicRequest):
    notebook_id = None
    try:
        async with await NotebookLMClient.from_storage() as client:
            # 1. Crear notebook temporal
            notebook = await client.notebooks.create(f"CUMBRE-{uuid.uuid4().hex[:8]}")
            notebook_id = notebook.id

            # 2. Agregar contenido
            await client.sources.add_text(
                notebook_id,
                req.content,
                title=req.title,
                wait=True
            )

            # 3. Generar infografía
            status = await client.artifacts.generate_infographic(notebook_id)
            await client.artifacts.wait_for_completion(notebook_id, status.task_id)

            # 4. Descargar
            tmp_path = f"C:\\notebooklm-server\\tmp_{uuid.uuid4().hex}.png"
            await client.artifacts.download_infographic(notebook_id, tmp_path)

            with open(tmp_path, "rb") as f:
                data = f.read()
            os.remove(tmp_path)

            # 5. Subir a Supabase
            storage_path = f"infographics/{uuid.uuid4().hex}.png"
            url = upload_to_supabase(data, storage_path, "image/png")

            return {"url": url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if notebook_id:
            try:
                async with await NotebookLMClient.from_storage() as client:
                    await client.notebooks.delete(notebook_id)
            except Exception:
                pass
```

- [ ] **Step 7: Crear start-notebooklm.bat**

```bat
@echo off
cd /d C:\notebooklm-server
call venv\Scripts\activate.bat
uvicorn server:app --host 0.0.0.0 --port 8881 --workers 1
```

- [ ] **Step 8: Probar el servidor**

```powershell
# Terminal 1: arrancar
C:\notebooklm-server\start-notebooklm.bat

# Terminal 2: health check
Invoke-WebRequest -Uri "http://localhost:8881/health" | Select-Object -ExpandProperty Content
```
Esperado: `{"status":"ok","notebooklm":"connected",...}`

- [ ] **Step 9: Probar generación de podcast**

```powershell
$body = @{
    title = "La Fotosíntesis"
    content = "La fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía química. Este proceso ocurre en los cloroplastos, utilizando clorofila para absorber luz. Los productos principales son glucosa y oxígeno. La ecuación general es: 6CO2 + 6H2O + luz → C6H12O6 + 6O2."
    language = "es"
    length = "SHORT"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8881/generate-podcast" `
  -Method POST -ContentType "application/json" -Body $body | Select-Object -ExpandProperty Content
```
Esperado: `{"url":"https://...supabase.co/storage/v1/object/public/generated-content/podcasts/xxx.mp3"}`
⚠️ Este paso tarda ~2-5 minutos — NotebookLM genera el audio.

- [ ] **Step 10: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
# Solo commitear scripts de referencia, no el servidor Python (está fuera del repo)
git add .
git commit -m "chore: add notebooklm-server setup docs"
```

---

### Task 2: Kokoro TTS Server (puerto 8880, fallback)

**Files:**
- Create: `C:/kokoro-server/server.py`
- Create: `C:/kokoro-server/requirements.txt`
- Create: `C:/kokoro-server/start-kokoro.bat`

- [ ] **Step 1: Instalar ffmpeg**

```powershell
winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements
ffmpeg -version
```
Esperado: versión de ffmpeg impresa.

- [ ] **Step 2: Crear entorno virtual**

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

- [ ] **Step 4: Instalar dependencias**

```powershell
pip install -r C:\kokoro-server\requirements.txt
```
Esperado: sin errores. Kokoro descarga modelos (~500MB) al primer uso.

- [ ] **Step 5: Crear server.py**

```python
# C:/kokoro-server/server.py
import io
import numpy as np
import soundfile as sf
from fastapi import FastAPI, HTTPException
from fastapi.responses import Response
from pydantic import BaseModel
from kokoro import KPipeline

app = FastAPI(title="Kokoro TTS Server")

pipelines: dict[str, KPipeline] = {}

def get_pipeline(lang_code: str) -> KPipeline:
    if lang_code not in pipelines:
        pipelines[lang_code] = KPipeline(lang_code=lang_code)
    return pipelines[lang_code]

class SynthesizeRequest(BaseModel):
    text: str
    voice: str = "af_heart"   # af_heart, af_bella, am_michael
    speed: float = 1.0
    lang_code: str = "e"      # "e" = Spanish, "a" = American English

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

- [ ] **Step 7: Probar Kokoro**

```powershell
# Terminal 1: arrancar
C:\kokoro-server\start-kokoro.bat

# Terminal 2: test
$body = '{"text":"Hola, este es un test de Kokoro TTS en español.","voice":"af_heart","lang_code":"e"}'
Invoke-WebRequest -Uri "http://localhost:8880/synthesize" -Method POST `
  -ContentType "application/json" -Body $body -OutFile "C:\kokoro-server\test.mp3"
```
Esperado: archivo `test.mp3` creado (~2-3 segundos de audio).

- [ ] **Step 8: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add .
git commit -m "chore: add kokoro TTS fallback server setup"
```

---

### Task 3: ngrok + Auto-inicio de ambos servidores

**Files:**
- Create: `C:/local-servers/start-all-servers.bat`

- [ ] **Step 1: Instalar ngrok**

```powershell
winget install ngrok.ngrok
# Crear cuenta gratuita en ngrok.com y obtener authtoken
ngrok config add-authtoken TU_AUTHTOKEN_AQUI
```

- [ ] **Step 2: Crear start-all-servers.bat**

```bat
@echo off
title CUMBRE Local Servers

echo Arrancando NotebookLM Server (puerto 8881)...
start "NotebookLM Server" cmd /k "C:\notebooklm-server\start-notebooklm.bat"

echo Esperando 3 segundos...
timeout /t 3 /nobreak

echo Arrancando Kokoro TTS Server (puerto 8880)...
start "Kokoro TTS Server" cmd /k "C:\kokoro-server\start-kokoro.bat"

echo Esperando 5 segundos...
timeout /t 5 /nobreak

echo Arrancando ngrok tunnels...
start "ngrok NotebookLM" cmd /k "ngrok http 8881 --log=stdout"
timeout /t 2 /nobreak
start "ngrok Kokoro" cmd /k "ngrok http 8880 --log=stdout"

echo.
echo Todos los servidores arrancados.
echo Abre http://localhost:4040 para ver las URLs publicas de ngrok.
echo Copia las URLs y actualiza NOTEBOOKLM_SERVER_URL y KOKORO_SERVER_URL en Railway.
pause
```

- [ ] **Step 3: Crear New-Item en carpeta local-servers**

```powershell
New-Item -ItemType Directory -Force "C:\local-servers"
# Mover el script ahí
Move-Item "start-all-servers.bat" "C:\local-servers\start-all-servers.bat" -Force
```

- [ ] **Step 4: Agregar al Startup de Windows**

```powershell
$startupFolder = [Environment]::GetFolderPath("Startup")
$shortcutPath = Join-Path $startupFolder "CUMBREServers.lnk"
$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = "C:\local-servers\start-all-servers.bat"
$shortcut.WorkingDirectory = "C:\local-servers"
$shortcut.Save()
Write-Host "Shortcut creado en: $shortcutPath"
```
Esperado: próxima vez que enciendas la PC, ambos servidores y ngrok arrancan automáticamente.

- [ ] **Step 5: Probar el script completo**

```powershell
C:\local-servers\start-all-servers.bat
```
Abrir `http://localhost:4040` — ver las 2 URLs públicas de ngrok.
Anotar:
- `NOTEBOOKLM_SERVER_URL = https://xxxx.ngrok-free.app` (el de puerto 8881)
- `KOKORO_SERVER_URL = https://yyyy.ngrok-free.app` (el de puerto 8880)

- [ ] **Step 6: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add .
git commit -m "chore: add unified local servers startup script with ngrok"
```

---

## Fase 2 — Microservicio `content_generator_service`

### Task 4: Scaffold del servicio

**Files:**
- Create: `services/content_generator_service/package.json`
- Create: `services/content_generator_service/tsconfig.json`
- Create: `services/content_generator_service/.env.example`
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
    "db:seed": "tsx prisma/seed.ts",
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
  notebooklmServerUrl: string;
  kokoroServerUrl: string;
  supabaseUrl: string;
  supabaseServiceKey: string;
  authServiceUrl: string;
}

function required(key: string, env: NodeJS.ProcessEnv): string {
  const val = env[key];
  if (!val) throw new Error(`${key} is required for content_generator_service`);
  return val;
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
    notebooklmServerUrl: env.NOTEBOOKLM_SERVER_URL ?? "http://localhost:8881",
    kokoroServerUrl: env.KOKORO_SERVER_URL ?? "http://localhost:8880",
    supabaseUrl: required("SUPABASE_URL", env),
    supabaseServiceKey: required("SUPABASE_SERVICE_KEY", env),
    authServiceUrl: env.AUTH_SERVICE_URL ?? "http://localhost:3001",
  };
}
```

- [ ] **Step 4: Crear src/utils/logger.ts**

```typescript
// services/content_generator_service/src/utils/logger.ts
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
  role       String   @unique
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
NOTEBOOKLM_SERVER_URL=https://xxxx.ngrok-free.app
KOKORO_SERVER_URL=https://yyyy.ngrok-free.app
SUPABASE_URL=https://PROJECT.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
AUTH_SERVICE_URL=http://localhost:3001
CONTENT_GENERATOR_PORT=3004
```

- [ ] **Step 7: Instalar dependencias y generar Prisma client**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
pnpm install
cd services/content_generator_service
pnpm db:generate
```
Esperado: carpeta `src/generated/prisma/` creada.

- [ ] **Step 8: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): scaffold service with prisma schema and config"
```

---

### Task 5: Repositorios + seed de límites

**Files:**
- Create: `services/content_generator_service/src/repositories/prisma-client.ts`
- Create: `services/content_generator_service/src/repositories/generation-job-repository.ts`
- Create: `services/content_generator_service/src/repositories/generation-limit-repository.ts`
- Create: `services/content_generator_service/prisma/seed.ts`
- Create: `services/content_generator_service/test/repositories.test.ts`

- [ ] **Step 1: Escribir tests (primero)**

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
    count: vi.fn(),
  },
  generationLimitRecord: {
    findUnique: vi.fn(),
    upsert: vi.fn(),
    findMany: vi.fn(),
  },
};

describe("GenerationJobRepository", () => {
  const repo = new GenerationJobRepository(mockPrisma as any);

  it("creates a job with status pending", async () => {
    const input = {
      userId: "user-1", role: "student", topic: "fotosíntesis",
      depth: "summary" as const, sources: [], outputs: ["pdf"] as string[],
    };
    mockPrisma.generationJobRecord.create.mockResolvedValue({ id: "job-1", status: "pending", ...input });
    const result = await repo.createJob(input);
    expect(result.id).toBe("job-1");
    expect(result.status).toBe("pending");
  });

  it("finds a job by id", async () => {
    mockPrisma.generationJobRecord.findUnique.mockResolvedValue({ id: "job-1", status: "done" });
    const result = await repo.findById("job-1");
    expect(result?.status).toBe("done");
  });

  it("updates job status", async () => {
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "processing" });
    const result = await repo.updateStatus("job-1", "processing");
    expect(result.status).toBe("processing");
  });

  it("sets job as done with results", async () => {
    const results = { pdfUrl: "https://storage.example.com/test.pdf" };
    mockPrisma.generationJobRecord.update.mockResolvedValue({ id: "job-1", status: "done", results });
    const result = await repo.setDone("job-1", results);
    expect(result.status).toBe("done");
    expect((result.results as any).pdfUrl).toBeDefined();
  });

  it("counts jobs today for a user", async () => {
    mockPrisma.generationJobRecord.count.mockResolvedValue(3);
    const count = await repo.countTodayByUser("user-1");
    expect(count).toBe(3);
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
Esperado: FAIL — clases no encontradas.

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
    datasources: { db: { url: normalizePostgresUrl(config.databaseUrl) } }
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
    return this.prisma.generationLimitRecord.findMany({ orderBy: { role: "asc" } });
  }
}
```

- [ ] **Step 6: Ejecutar tests — deben pasar**

```powershell
pnpm test
```
Esperado: PASS — 7 tests passing.

- [ ] **Step 7: Crear prisma/seed.ts**

```typescript
// services/content_generator_service/prisma/seed.ts
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  for (const [role, dailyLimit] of [["student", 5], ["teacher", 20], ["administrator", -1]] as const) {
    await prisma.generationLimitRecord.upsert({
      where: { role },
      update: { dailyLimit },
      create: { role, dailyLimit },
    });
  }
  console.log("Generation limits seeded: student=5, teacher=20, administrator=-1 (unlimited)");
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
```

- [ ] **Step 8: Correr migración y seed**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
# Crea .env copiando de .env.example con tus valores reales
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

### Task 6: Research Agent (Claude API)

**Files:**
- Create: `services/content_generator_service/src/agents/research-agent.ts`
- Create: `services/content_generator_service/test/research-agent.test.ts`

- [ ] **Step 1: Escribir tests**

```typescript
// services/content_generator_service/test/research-agent.test.ts
import { describe, it, expect, vi } from "vitest";
import { ResearchAgent } from "../src/agents/research-agent.js";

const mockAnthropic = { messages: { create: vi.fn() } };

describe("ResearchAgent", () => {
  const agent = new ResearchAgent(mockAnthropic as any);

  it("returns structured research with fullText", async () => {
    const fakeResearch = {
      title: "Fotosíntesis",
      abstract: "Proceso por el cual las plantas convierten luz en energía.",
      sections: [{ heading: "Introducción", content: "Las plantas usan clorofila.", keyPoints: ["clorofila"] }],
      bibliography: [],
      fullText: "Fotosíntesis: Las plantas convierten luz en energía usando clorofila.",
    };
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(fakeResearch) }],
    });

    const result = await agent.research({ topic: "fotosíntesis", depth: "summary", sources: [] });

    expect(result.title).toBe("Fotosíntesis");
    expect(result.sections).toHaveLength(1);
    expect(result.fullText).toContain("clorofila");
  });

  it("throws on invalid JSON from Claude", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: "esto no es json" }],
    });
    await expect(
      agent.research({ topic: "test", depth: "summary", sources: [] })
    ).rejects.toThrow("ResearchAgent: invalid JSON from Claude");
  });

  it("throws when required fields missing", async () => {
    mockAnthropic.messages.create.mockResolvedValue({
      content: [{ type: "text", text: '{"title": "solo titulo"}' }],
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
Esperado: FAIL.

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

export interface ResearchOutput {
  title: string;
  abstract: string;
  sections: ResearchSection[];
  bibliography: string[];
  fullText: string; // texto plano para enviar a NotebookLM
}

export interface ResearchInput {
  topic: string;
  depth: JobDepth;
  sources: JobSource[];
}

const SYSTEM_PROMPT = `Eres un investigador académico experto. Genera investigaciones estructuradas en español.
Responde ÚNICAMENTE con JSON válido, sin texto adicional, sin markdown, sin bloques de código.`;

function buildUserPrompt(input: ResearchInput): string {
  const depthInstruction = input.depth === "summary"
    ? "Genera un resumen conciso con 2-3 secciones (1-2 párrafos cada una)."
    : "Genera una investigación profunda con 5-8 secciones detalladas (3-5 párrafos cada una).";

  const sourcesText = input.sources
    .filter(s => s.type === "text")
    .map(s => s.data)
    .join("\n\n---\n\n");

  const sourcesSection = sourcesText
    ? `\n\nFUENTES ADICIONALES:\n${sourcesText}`
    : "";

  return `TEMA: ${input.topic}

${depthInstruction}

Devuelve JSON con exactamente esta estructura:
{
  "title": "Título académico",
  "abstract": "Resumen ejecutivo 2-3 oraciones",
  "sections": [
    { "heading": "Nombre", "content": "Contenido completo", "keyPoints": ["punto 1", "punto 2"] }
  ],
  "bibliography": ["Fuente APA 1", "Fuente APA 2"],
  "fullText": "Todo el contenido del documento en texto plano corrido, sin formato, para usar como fuente en NotebookLM"
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

    if (!parsed.title || !Array.isArray(parsed.sections) || !parsed.fullText) {
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
Esperado: PASS — 3 tests passing.

- [ ] **Step 5: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): research agent with fullText field for NotebookLM"
```

---

### Task 7: PDF/LaTeX Generator

**Files:**
- Create: `services/content_generator_service/src/generators/latex-template.ts`
- Create: `services/content_generator_service/src/generators/pdf-generator.ts`
- Create: `services/content_generator_service/test/pdf-generator.test.ts`

- [ ] **Step 1: Instalar MiKTeX (pdflatex)**

```powershell
winget install --id MiKTeX.MiKTeX -e --accept-source-agreements --accept-package-agreements
# Verificar (puede requerir reiniciar terminal)
pdflatex --version
```
Esperado: versión de pdflatex impresa.

- [ ] **Step 2: Escribir tests**

```typescript
// services/content_generator_service/test/pdf-generator.test.ts
import { describe, it, expect } from "vitest";
import { buildLatexDocument } from "../src/generators/latex-template.js";
import type { ResearchOutput } from "../src/agents/research-agent.js";

const sampleResearch: ResearchOutput = {
  title: "La Fotosíntesis",
  abstract: "Proceso clave de las plantas.",
  sections: [
    { heading: "Introducción", content: "Las plantas convierten luz en energía.", keyPoints: ["clorofila", "ATP"] }
  ],
  bibliography: ["Campbell, N. (2020). Biology. Pearson."],
  fullText: "La fotosíntesis es el proceso por el cual las plantas convierten luz en energía.",
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

  it("escapes special LaTeX characters", () => {
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
Esperado: FAIL.

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
${s.keyPoints.length > 0 ? `
\\subsection*{Puntos clave}
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

    for (let pass = 0; pass < 2; pass++) {
      await execFileAsync("pdflatex", [
        "-interaction=nonstopmode",
        "-output-directory", dir,
        texPath,
      ], { timeout: 30_000 });
    }

    return await readFile(join(dir, "document.pdf"));
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

### Task 8: NotebookLM Client + Fallbacks

**Files:**
- Create: `services/content_generator_service/src/clients/notebooklm-client.ts`
- Create: `services/content_generator_service/src/clients/kokoro-client.ts`
- Create: `services/content_generator_service/src/generators/infographic-fallback.ts`
- Create: `services/content_generator_service/test/notebooklm-client.test.ts`
- Create: `services/content_generator_service/test/kokoro-client.test.ts`

- [ ] **Step 1: Escribir tests**

```typescript
// services/content_generator_service/test/notebooklm-client.test.ts
import { describe, it, expect, vi } from "vitest";
import { NotebookLMClient } from "../src/clients/notebooklm-client.js";

describe("NotebookLMClient", () => {
  it("calls /generate-podcast and returns a URL", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ url: "https://storage.example.com/podcast.mp3" }),
    }) as any;

    const client = new NotebookLMClient("http://localhost:8881");
    const url = await client.generatePodcast({
      title: "Fotosíntesis",
      content: "Las plantas convierten luz en energía.",
    });

    expect(url).toBe("https://storage.example.com/podcast.mp3");
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8881/generate-podcast",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("calls /generate-infographic and returns a URL", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ url: "https://storage.example.com/infographic.png" }),
    }) as any;

    const client = new NotebookLMClient("http://localhost:8881");
    const url = await client.generateInfographic({
      title: "Fotosíntesis",
      content: "Las plantas convierten luz en energía.",
    });

    expect(url).toBe("https://storage.example.com/infographic.png");
  });

  it("throws when server returns non-ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500, json: async () => ({ detail: "error" }) }) as any;
    const client = new NotebookLMClient("http://localhost:8881");
    await expect(client.generatePodcast({ title: "t", content: "c" }))
      .rejects.toThrow("NotebookLM server error: 500");
  });

  it("isHealthy returns false when server is offline", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("ECONNREFUSED")) as any;
    const client = new NotebookLMClient("http://localhost:8881");
    const healthy = await client.isHealthy();
    expect(healthy).toBe(false);
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
```

- [ ] **Step 2: Ejecutar tests — deben fallar**

```powershell
pnpm test
```
Esperado: FAIL — clases no encontradas.

- [ ] **Step 3: Crear notebooklm-client.ts**

```typescript
// services/content_generator_service/src/clients/notebooklm-client.ts
export interface PodcastRequest {
  title: string;
  content: string;
  language?: string;
  length?: "SHORT" | "STANDARD";
  instructions?: string;
}

export interface InfographicRequest {
  title: string;
  content: string;
}

export class NotebookLMClient {
  constructor(private readonly baseUrl: string) {}

  async generatePodcast(req: PodcastRequest): Promise<string> {
    const response = await fetch(`${this.baseUrl}/generate-podcast`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: req.title,
        content: req.content,
        language: req.language ?? "es",
        length: req.length ?? "STANDARD",
        instructions: req.instructions ?? "Genera un podcast educativo en español, estilo conversacional entre dos hosts.",
      }),
      signal: AbortSignal.timeout(600_000), // 10 min timeout — NotebookLM es lento
    });

    if (!response.ok) {
      throw new Error(`NotebookLM server error: ${response.status}`);
    }

    const data = await response.json() as { url: string };
    return data.url;
  }

  async generateInfographic(req: InfographicRequest): Promise<string> {
    const response = await fetch(`${this.baseUrl}/generate-infographic`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: req.title, content: req.content }),
      signal: AbortSignal.timeout(300_000), // 5 min timeout
    });

    if (!response.ok) {
      throw new Error(`NotebookLM server error: ${response.status}`);
    }

    const data = await response.json() as { url: string };
    return data.url;
  }

  async isHealthy(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/health`, {
        signal: AbortSignal.timeout(5000),
      });
      return res.ok;
    } catch {
      return false;
    }
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
```

- [ ] **Step 5: Crear infographic-fallback.ts (Playwright)**

```typescript
// services/content_generator_service/src/generators/infographic-fallback.ts
// Fallback cuando NotebookLM está offline: genera infografía HTML→PNG con Playwright
import type { ResearchOutput } from "../agents/research-agent.js";

function buildHtml(research: ResearchOutput): string {
  const { title, abstract, sections } = research;
  const sectionsHtml = sections.slice(0, 4).map(s => `
    <div class="card">
      <h3>${s.heading}</h3>
      <p>${s.content.slice(0, 250)}${s.content.length > 250 ? "..." : ""}</p>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 1600px; overflow: hidden;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: white; font-family: 'Segoe UI', sans-serif; padding: 48px; }
  h1 { font-size: 52px; font-weight: 800; color: #A78BFA; margin-bottom: 16px; text-align: center; }
  .abstract { font-size: 20px; color: #C4B5FD; text-align: center; margin-bottom: 48px; max-width: 900px; margin-left: auto; margin-right: auto; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .card { background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.4); border-radius: 16px; padding: 24px; }
  .card h3 { color: #A78BFA; font-size: 22px; margin-bottom: 12px; }
  .card p { color: #DDD6FE; font-size: 16px; line-height: 1.7; }
  .footer { text-align: center; color: #6D28D9; font-size: 14px; margin-top: 48px; }
</style></head>
<body>
  <h1>${title}</h1>
  <p class="abstract">${abstract}</p>
  <div class="grid">${sectionsHtml}</div>
  <div class="footer">Generado por CUMBRE Platform</div>
</body></html>`;
}

export async function generateInfographicFallback(research: ResearchOutput): Promise<Buffer> {
  const { chromium } = await import("playwright");
  const html = buildHtml(research);
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
Esperado: PASS — 6 tests passing.

- [ ] **Step 7: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): NotebookLM client, Kokoro fallback client, infographic fallback"
```

---

### Task 9: Supabase Storage Client

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

export function createStorageClient(url: string, key: string): SupabaseClient {
  return createClient(url, key);
}

export class StorageClient {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly bucket: string
  ) {}

  async upload(buffer: Buffer, path: string, mimeType: string): Promise<string> {
    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(path, buffer, { contentType: mimeType, upsert: true });

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
1. **Storage → New bucket**
2. Nombre: `generated-content`, marcar como **Public**
3. Guardar

- [ ] **Step 6: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): Supabase storage client"
```

---

### Task 10: Pipeline Orquestador + HTTP Routes + App

**Files:**
- Create: `services/content_generator_service/src/pipeline/generation-pipeline.ts`
- Create: `services/content_generator_service/src/controllers/generator-controller.ts`
- Create: `services/content_generator_service/src/routes/generator-routes.ts`
- Create: `services/content_generator_service/src/app.ts`
- Create: `services/content_generator_service/src/server.ts`
- Create: `services/content_generator_service/test/pipeline.test.ts`

- [ ] **Step 1: Escribir test del pipeline**

```typescript
// services/content_generator_service/test/pipeline.test.ts
import { describe, it, expect, vi } from "vitest";
import { GenerationPipeline } from "../src/pipeline/generation-pipeline.js";

const mockResearchAgent = { research: vi.fn() };
const mockNotebookLM = { isHealthy: vi.fn(), generatePodcast: vi.fn(), generateInfographic: vi.fn() };
const mockKokoro = { isHealthy: vi.fn(), synthesize: vi.fn() };
const mockJobRepo = {
  createJob: vi.fn(), updateStatus: vi.fn(), setDone: vi.fn(),
  findById: vi.fn(), countTodayByUser: vi.fn(),
};
const mockLimitRepo = { getLimitForRole: vi.fn() };
const mockStorage = { upload: vi.fn() };
const mockGeneratePdf = vi.fn();
const mockInfographicFallback = vi.fn();

const makeResearch = () => ({
  title: "T", abstract: "", sections: [], bibliography: [], fullText: "texto completo",
});

describe("GenerationPipeline", () => {
  const pipeline = new GenerationPipeline({
    researchAgent: mockResearchAgent as any,
    notebookLMClient: mockNotebookLM as any,
    kokoroClient: mockKokoro as any,
    jobRepo: mockJobRepo as any,
    limitRepo: mockLimitRepo as any,
    storage: mockStorage as any,
    generatePdf: mockGeneratePdf,
    generateInfographicFallback: mockInfographicFallback,
  });

  it("throws when daily limit is reached", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 5 });
    mockJobRepo.countTodayByUser.mockResolvedValue(5);

    await expect(pipeline.run({
      userId: "u1", role: "student", topic: "test",
      depth: "summary", sources: [], outputs: ["pdf"],
    })).rejects.toThrow("Límite diario alcanzado");
  });

  it("creates job and returns jobId immediately", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: 20 });
    mockJobRepo.countTodayByUser.mockResolvedValue(0);
    mockJobRepo.createJob.mockResolvedValue({ id: "job-123", status: "pending" });
    mockResearchAgent.research.mockResolvedValue(makeResearch());
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

  it("uses NotebookLM when healthy for podcast", async () => {
    mockLimitRepo.getLimitForRole.mockResolvedValue({ dailyLimit: -1 });
    mockJobRepo.countTodayByUser.mockResolvedValue(0);
    mockJobRepo.createJob.mockResolvedValue({ id: "job-456", status: "pending" });
    mockResearchAgent.research.mockResolvedValue(makeResearch());
    mockNotebookLM.isHealthy.mockResolvedValue(true);
    mockNotebookLM.generatePodcast.mockResolvedValue("https://storage.example.com/podcast.mp3");
    mockJobRepo.updateStatus.mockResolvedValue({});
    mockJobRepo.setDone.mockResolvedValue({});

    const { jobId } = await pipeline.run({
      userId: "u1", role: "administrator", topic: "test",
      depth: "summary", sources: [], outputs: ["podcast"],
    });

    expect(jobId).toBe("job-456");
    // NotebookLM fue llamado (no Kokoro)
    expect(mockNotebookLM.generatePodcast).toHaveBeenCalled();
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
import type { ResearchAgent, ResearchOutput } from "../agents/research-agent.js";
import type { NotebookLMClient } from "../clients/notebooklm-client.js";
import type { KokoroClient } from "../clients/kokoro-client.js";
import type { StorageClient } from "../clients/storage-client.js";
import type {
  GenerationJobRepository, CreateJobInput, JobResults
} from "../repositories/generation-job-repository.js";
import type { GenerationLimitRepository } from "../repositories/generation-limit-repository.js";

export interface PipelineDeps {
  researchAgent: ResearchAgent;
  notebookLMClient: NotebookLMClient;
  kokoroClient: KokoroClient;
  jobRepo: GenerationJobRepository;
  limitRepo: GenerationLimitRepository;
  storage: StorageClient;
  generatePdf: (research: ResearchOutput) => Promise<Buffer>;
  generateInfographicFallback: (research: ResearchOutput) => Promise<Buffer>;
}

export class GenerationPipeline {
  constructor(private readonly deps: PipelineDeps) {}

  async run(input: CreateJobInput): Promise<{ jobId: string }> {
    // Verificar límite diario
    const limit = await this.deps.limitRepo.getLimitForRole(input.role);
    if (limit && limit.dailyLimit !== -1) {
      const count = await this.deps.jobRepo.countTodayByUser(input.userId);
      if (count >= limit.dailyLimit) {
        throw new Error("Límite diario alcanzado");
      }
    }

    const job = await this.deps.jobRepo.createJob(input);
    // Procesar en background
    this.processJob(job.id, input).catch(() => {});
    return { jobId: job.id };
  }

  private async processJob(jobId: string, input: CreateJobInput): Promise<void> {
    await this.deps.jobRepo.updateStatus(jobId, "processing");

    try {
      const research = await this.deps.researchAgent.research({
        topic: input.topic,
        depth: input.depth,
        sources: input.sources,
      });

      const results: JobResults = {};
      const tasks: Promise<void>[] = [];

      if (input.outputs.includes("pdf")) {
        tasks.push(
          this.deps.generatePdf(research).then(async (buf) => {
            results.pdfUrl = await this.deps.storage.upload(
              buf, `pdfs/${jobId}.pdf`, "application/pdf"
            );
          })
        );
      }

      if (input.outputs.includes("podcast")) {
        tasks.push(this.generatePodcast(jobId, research, input.depth).then(url => {
          results.podcastUrl = url;
        }));
      }

      if (input.outputs.includes("infographic")) {
        tasks.push(this.generateInfographic(jobId, research).then(url => {
          results.infographicUrl = url;
        }));
      }

      await Promise.all(tasks);
      await this.deps.jobRepo.setDone(jobId, results);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await this.deps.jobRepo.updateStatus(jobId, "error", msg);
    }
  }

  private async generatePodcast(
    jobId: string,
    research: ResearchOutput,
    depth: string
  ): Promise<string> {
    // Intentar NotebookLM primero
    if (await this.deps.notebookLMClient.isHealthy()) {
      try {
        return await this.deps.notebookLMClient.generatePodcast({
          title: research.title,
          content: research.fullText,
          language: "es",
          length: depth === "summary" ? "SHORT" : "STANDARD",
        });
      } catch {
        // fallback a Kokoro
      }
    }

    // Fallback: Kokoro TTS simple con el abstract
    const audio = await this.deps.kokoroClient.synthesize({
      text: `${research.title}. ${research.abstract} ${research.sections.map(s => s.content).join(" ")}`.slice(0, 4000),
      voice: "af_heart",
    });
    return await this.deps.storage.upload(audio, `podcasts/${jobId}.mp3`, "audio/mpeg");
  }

  private async generateInfographic(
    jobId: string,
    research: ResearchOutput
  ): Promise<string> {
    // Intentar NotebookLM primero
    if (await this.deps.notebookLMClient.isHealthy()) {
      try {
        return await this.deps.notebookLMClient.generateInfographic({
          title: research.title,
          content: research.fullText,
        });
      } catch {
        // fallback a Playwright
      }
    }

    // Fallback: Playwright HTML→PNG
    const png = await this.deps.generateInfographicFallback(research);
    return await this.deps.storage.upload(png, `infographics/${jobId}.png`, "image/png");
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
    return this.pipeline.run({
      userId: actor!.userId,
      role: actor!.role,
      topic, depth,
      sources: sources as any,
      outputs,
    });
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
      method: "POST", path: "/generate",
      handler: ctrl.generate,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/:jobId",
      handler: ctrl.getJob,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/history",
      handler: ctrl.listJobs,
      authorization: { required: true, roles: ["student", "teacher", "administrator"], scopes: ["content:read"] },
    },
    {
      method: "GET", path: "/generate/admin/limits",
      handler: ctrl.getLimits,
      authorization: { required: true, roles: ["administrator"], scopes: ["analytics:read"] },
    },
    {
      method: "POST", path: "/generate/admin/limits",
      handler: ctrl.updateLimit,
      authorization: { required: true, roles: ["administrator"], scopes: ["content:write"] },
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
import { GenerationPipeline } from "./pipeline/generation-pipeline.js";
import { GeneratorController } from "./controllers/generator-controller.js";
import { HealthController } from "./controllers/health-controller.js";
import { GenerationJobRepository } from "./repositories/generation-job-repository.js";
import { GenerationLimitRepository } from "./repositories/generation-limit-repository.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { NotebookLMClient } from "./clients/notebooklm-client.js";
import { KokoroClient } from "./clients/kokoro-client.js";
import { StorageClient } from "./clients/storage-client.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { generatePdf } from "./generators/pdf-generator.js";
import { generateInfographicFallback } from "./generators/infographic-fallback.js";
import { registerGeneratorRoutes } from "./routes/generator-routes.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import type { ContentGeneratorConfig } from "./config/env.js";
import type { Logger } from "./utils/logger.js";

export function createContentGeneratorApp({
  config, logger, authResolver,
}: { config: ContentGeneratorConfig; logger: Logger; authResolver?: AuthResolver }) {
  const prisma = createPrismaClient(config);
  const jobRepo = new GenerationJobRepository(prisma);
  const limitRepo = new GenerationLimitRepository(prisma);

  const anthropic = new Anthropic({ apiKey: config.anthropicApiKey });
  const researchAgent = new ResearchAgent(anthropic);
  const notebookLMClient = new NotebookLMClient(config.notebooklmServerUrl);
  const kokoroClient = new KokoroClient(config.kokoroServerUrl);
  const supabase = createClient(config.supabaseUrl, config.supabaseServiceKey);
  const storage = new StorageClient(supabase, "generated-content");

  const pipeline = new GenerationPipeline({
    researchAgent, notebookLMClient, kokoroClient,
    jobRepo, limitRepo, storage, generatePdf, generateInfographicFallback,
  });

  const generatorCtrl = new GeneratorController(pipeline, jobRepo, limitRepo);
  const healthCtrl = new HealthController(
    config.serviceName,
    async () => { await prisma.$queryRaw`SELECT 1`; },
    (err) => logger.error("health check failed", { error: String(err) })
  );

  const authServiceClient = new AuthServiceClient(config.authServiceUrl, logger);
  const resolvedAuth = authResolver ?? {
    resolveAccess: (req: any, ctx: any) =>
      authServiceClient.resolveActorFromAuthorizationHeader(req.headers.authorization, ctx.requestId),
  };

  return createRouter(
    [...registerHealthRoutes(healthCtrl), ...registerGeneratorRoutes(generatorCtrl)],
    logger,
    { authResolver: resolvedAuth, requestTimeoutMs: 120_000 }
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
createServer(app).listen(config.port, () => {
  logger.info("content_generator_service listening", { port: config.port });
});
```

- [ ] **Step 8: Ejecutar todos los tests**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
pnpm test
```
Esperado: PASS — todos los tests passing.

- [ ] **Step 9: Probar el servicio en dev**

```powershell
# Copiar .env.example → .env y rellenar valores
cd C:\Trabajo\CUMBRE_PLATFORM\services\content_generator_service
pnpm dev
```

```powershell
# Test con token válido de CUMBRE
$body = '{"topic":"fotosíntesis","depth":"summary","sources":[],"outputs":["pdf"]}'
Invoke-WebRequest -Uri "http://localhost:3004/generate" -Method POST `
  -Headers @{Authorization="Bearer TU_TOKEN"; "Content-Type"="application/json"} `
  -Body $body | Select-Object -ExpandProperty Content
```
Esperado: `{"jobId":"..."}` — job creado.

- [ ] **Step 10: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add services/content_generator_service/
git commit -m "feat(content-generator): pipeline with NotebookLM primary + fallbacks, routes, app, server"
```

---

## Fase 3 — UI en CUMBRE (web_student)

### Task 11: Componente GeneratorPage

**Files:**
- Create: `apps/web_student/services/generator-api.ts`
- Create: `apps/web_student/components/generator/generator-form.tsx`
- Create: `apps/web_student/components/generator/job-status-poller.tsx`
- Create: `apps/web_student/components/generator/results-panel.tsx`
- Create: `apps/web_student/app/generator/page.tsx`

- [ ] **Step 1: Crear generator-api.ts**

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
  results?: { pdfUrl?: string; podcastUrl?: string; infographicUrl?: string };
  errorMsg?: string;
  createdAt: string;
}

export async function startGeneration(req: GenerateRequest, token: string): Promise<{ jobId: string }> {
  const res = await fetch(`${GENERATOR_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as any;
    throw new Error(err?.message ?? `Generation failed: ${res.status}`);
  }
  return res.json();
}

export async function getJob(jobId: string, token: string): Promise<GenerationJob> {
  const res = await fetch(`${GENERATOR_URL}/generate/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Job fetch failed: ${res.status}`);
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
    const sources = extraText.trim() ? [{ type: "text" as const, data: extraText.trim() }] : [];
    onSubmit({ topic: topic.trim(), depth, sources, outputs });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tema *</label>
        <input
          type="text" value={topic} onChange={e => setTopic(e.target.value)}
          placeholder="Ej: La fotosíntesis en plantas tropicales"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Texto adicional (opcional)</label>
        <textarea
          value={extraText} onChange={e => setExtraText(e.target.value)}
          placeholder="Pega aquí notas o extractos de texto de referencia..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profundidad</label>
        <div className="flex gap-3">
          {(["summary", "deep"] as const).map(d => (
            <button key={d} type="button" onClick={() => setDepth(d)}
              className={`flex-1 py-2 px-4 rounded-lg border font-medium transition-colors ${
                depth === d ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-700 border-gray-300 hover:border-violet-400"
              }`}>
              {d === "summary" ? "📝 Resumen" : "🔬 Investigación profunda"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Outputs deseados *</label>
        <div className="flex gap-3 flex-wrap">
          {[
            { key: "pdf", label: "📄 PDF Académico" },
            { key: "podcast", label: "🎙️ Podcast (NotebookLM)" },
            { key: "infographic", label: "🖼️ Infografía" },
          ].map(o => (
            <button key={o.key} type="button" onClick={() => toggleOutput(o.key)}
              className={`py-2 px-4 rounded-lg border font-medium transition-colors ${
                outputs.includes(o.key) ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-700 border-gray-300 hover:border-violet-400"
              }`}>
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" disabled={isLoading || !topic.trim() || outputs.length === 0}
        className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        {isLoading ? "Iniciando..." : "✨ Generar contenido"}
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
    const dotInterval = setInterval(() => setDots(d => d.length >= 3 ? "." : d + "."), 500);
    const pollInterval = setInterval(async () => {
      try {
        const job = await getJob(jobId, token);
        setStatus(job.status);
        if (job.status === "done") { clearInterval(pollInterval); clearInterval(dotInterval); onDone(job); }
        else if (job.status === "error") { clearInterval(pollInterval); clearInterval(dotInterval); onError(job.errorMsg ?? "Error desconocido"); }
      } catch { /* ignorar errores de red */ }
    }, 3000);
    return () => { clearInterval(pollInterval); clearInterval(dotInterval); };
  }, [jobId, token, onDone, onError]);

  const labels: Record<string, string> = { pending: "En cola", processing: "Generando", done: "Listo", error: "Error" };

  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-6 animate-pulse">✨</div>
      <p className="text-xl font-semibold text-gray-700">{labels[status] ?? status}{dots}</p>
      <p className="text-sm text-gray-500 mt-3">
        {status === "processing" && outputs?.includes("podcast")
          ? "El podcast de NotebookLM puede tardar 3-5 minutos. ¡Vale la pena esperar!"
          : "Esto puede tomar 1-3 minutos."}
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

interface Props { job: GenerationJob; onReset: () => void; }

export function ResultsPanel({ job, onReset }: Props) {
  const { results } = job;
  if (!results) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">✅ {job.topic}</h2>
        <button onClick={onReset} className="text-sm text-violet-600 hover:text-violet-800 font-medium">← Generar otro</button>
      </div>

      {results.pdfUrl && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b">
            <span className="font-medium text-gray-700">📄 PDF Académico</span>
            <a href={results.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-600 hover:underline">Descargar</a>
          </div>
          <iframe src={results.pdfUrl} className="w-full h-96" title="PDF preview" />
        </div>
      )}

      {results.podcastUrl && (
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="font-medium text-gray-700 mb-3">🎙️ Podcast (generado con NotebookLM)</p>
          <audio controls className="w-full">
            <source src={results.podcastUrl} type="audio/mpeg" />
          </audio>
          <a href={results.podcastUrl} download className="mt-2 inline-block text-sm text-violet-600 hover:underline">Descargar MP3</a>
        </div>
      )}

      {results.infographicUrl && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b">
            <span className="font-medium text-gray-700">🖼️ Infografía</span>
            <a href={results.infographicUrl} download className="text-sm text-violet-600 hover:underline">Descargar PNG</a>
          </div>
          <img src={results.infographicUrl} alt="Infografía generada" className="w-full" />
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
import { useAuth } from "../../hooks/use-auth";

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

  const handleDone = useCallback((job: GenerationJob) => { setDoneJob(job); setPhase("done"); }, []);
  const handleError = useCallback((msg: string) => { setErrorMsg(msg); setPhase("error"); }, []);

  function reset() { setPhase("form"); setJobId(null); setDoneJob(null); setErrorMsg(null); }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">✨ Generador de Contenido</h1>
        <p className="text-gray-500 mt-2">Genera PDFs académicos, podcasts reales e infografías sobre cualquier tema.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {phase === "form" && <GeneratorForm onSubmit={handleSubmit} isLoading={false} />}
        {phase === "polling" && jobId && token && (
          <JobStatusPoller jobId={jobId} token={token} onDone={handleDone} onError={handleError} />
        )}
        {phase === "done" && doneJob && <ResultsPanel job={doneJob} onReset={reset} />}
        {phase === "error" && (
          <div className="text-center py-8">
            <p className="text-red-600 font-medium mb-4">❌ {errorMsg}</p>
            <button onClick={reset} className="text-violet-600 hover:underline">← Intentar de nuevo</button>
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Agregar env var y nav**

En `apps/web_student/.env.local`:
```env
NEXT_PUBLIC_GENERATOR_SERVICE_URL=http://localhost:3004
```

Buscar el archivo de navegación de `web_student` y agregar la ruta:
```tsx
{ href: "/generator", label: "✨ Generador" }
```

- [ ] **Step 7: Verificar que la página carga**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM\apps\web_student
pnpm dev
```
Navegar a `http://localhost:3000/generator` — debe mostrar el formulario.

- [ ] **Step 8: Commit**

```powershell
cd C:\Trabajo\CUMBRE_PLATFORM
git add apps/web_student/
git commit -m "feat(web-student): content generator page — form, polling, results with NotebookLM podcast"
```

---

## Self-Review

**Cobertura del spec v2:**
- ✅ notebooklm-server como motor principal (Task 1)
- ✅ Kokoro como fallback (Task 2)
- ✅ ngrok + auto-inicio (Task 3)
- ✅ content_generator_service scaffold (Task 4)
- ✅ Repositorios + límites configurables (Task 5)
- ✅ Research Agent con `fullText` para NotebookLM (Task 6)
- ✅ PDF/LaTeX generator (Task 7)
- ✅ NotebookLM client + Kokoro client + infographic fallback (Task 8)
- ✅ Supabase Storage client (Task 9)
- ✅ Pipeline con NotebookLM primario + fallbacks automáticos (Task 10)
- ✅ UI en web_student (Task 11)
- ✅ Cuenta Google `jaminyauricajas@gmail.com` documentada en spec

**Tipos consistentes:**
- `ResearchOutput.fullText` definido en Task 6 y usado en Task 10 (pipeline → NotebookLM client)
- `NotebookLMClient` usa `PodcastRequest` y `InfographicRequest` consistentemente
- `JobDepth`, `JobSource`, `JobResults`, `JobStatus` definidos en `generation-job-repository.ts` y usados en pipeline

**Sin placeholders:**
- Todos los steps tienen código completo y comandos con output esperado
- Fallbacks explícitos documentados en pipeline
