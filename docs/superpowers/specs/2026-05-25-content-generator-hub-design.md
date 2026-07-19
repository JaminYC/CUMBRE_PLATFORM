# Content Generator Hub — Design Spec
**Fecha:** 2026-05-25  
**Proyecto:** CUMBRE PLATFORM  
**Estado:** Aprobado por usuario (v2 — NotebookLM-py integrado)

---

## 1. Resumen

Sistema de generación automática de contenido educativo integrado en CUMBRE. Permite a estudiantes, profesores y administradores generar PDFs académicos con LaTeX, podcasts MP3 de calidad real (via NotebookLM) e infografías visuales a partir de un tema libre, texto pegado o contenido existente de la plataforma.

**Motor principal de podcasts e infografías:** `notebooklm-py` — SDK no oficial que automatiza NotebookLM via Playwright usando la cuenta Google del operador (`jaminyauricajas@gmail.com`). Corre localmente en la PC del operador (RTX 4060 Ti) y se expone como microservicio HTTP.

**Motor de PDF:** Claude API + pdflatex (siempre disponible en Railway).

**Kokoro TTS:** se instala como fallback para cuando NotebookLM no está disponible, y para narración simple de PDFs si se desea en el futuro.

---

## 2. Objetivos

- Automatizar la creación de materiales de estudio de alta calidad con un solo click
- Soportar investigación superficial (resumen) e investigación profunda (análisis extendido)
- Generar tres tipos de output en paralelo: PDF, podcast y/o infografía
- Costo de generación cercano a $0 (NotebookLM gratuito + Claude API por tokens)
- Límites de uso configurables por rol desde el panel de admin, sin tocar código

---

## 3. Arquitectura General

```
CUMBRE (web_student / web_teacher / web_admin)
         │
         │  HTTP POST /api/generate
         │  { topic, depth, sources[], outputs[] }
         ▼
┌─────────────────────────────────────────────────────────┐
│         content_generator_service (Railway)              │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  1. Research Agent (Claude API)                 │   │
│  │     - Recibe tema + texto adicional             │   │
│  │     - Genera investigación estructurada         │   │
│  │     - Depth: "summary" | "deep"                 │   │
│  └─────────────────────────────────────────────────┘   │
│                        │                               │
│          ┌─────────────┼──────────────┐               │
│          ▼             ▼              ▼               │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │
│  │ PDF/LaTeX    │ │   Podcast    │ │  Infografía  │  │
│  │ Generator    │ │  Generator   │ │  Generator   │  │
│  │ (Railway)    │ │              │ │              │  │
│  │ .tex → .pdf  │ │  NotebookLM  │ │  NotebookLM  │  │
│  └──────────────┘ │  Server      │ │  Server      │  │
│                   │  (PC local)  │ │  (PC local)  │  │
│                   └──────────────┘ └──────────────┘  │
│                        │                             │
└────────────────────────┼─────────────────────────────┘
                         │ ngrok tunnel
                         ▼
              Tu PC (jaminyauricajas@gmail.com)
         ┌───────────────────────────────────────┐
         │  notebooklm-server (puerto 8881)       │
         │  ├─ POST /generate-podcast → MP3       │
         │  ├─ POST /generate-infographic → PNG   │
         │  └─ DELETE /cleanup-old-notebooks      │
         │                                        │
         │  kokoro-server (puerto 8880) [fallback]│
         │  └─ POST /synthesize → MP3             │
         └───────────────────────────────────────┘
                         │
                         ▼
                  Supabase Storage
                  (PDFs, MP3s, PNGs)
                         │
                         ▼
               URL pública → CUMBRE UI
```

---

## 4. NotebookLM Server — Motor Principal de Podcast e Infografía

`notebooklm-py` se instala en la PC del operador y se envuelve en un servidor FastAPI que expone endpoints simples. CUMBRE lo llama via ngrok.

### Setup
- **Runtime:** Python FastAPI, puerto `8881`
- **Auth:** cookies de sesión Google de `jaminyauricajas@gmail.com` (login una sola vez con `notebooklm login`)
- **Acceso externo:** ngrok tunnel → URL configurable como `NOTEBOOKLM_SERVER_URL` en Railway
- **Outputs disponibles:** podcast MP3, infografía PNG, mind map JSON, study guide MD

### Endpoints
```
POST /generate-podcast
  Body: { title, content, language?, instructions?, length? }
  → { url: "https://storage.../podcast.mp3" }

POST /generate-infographic  
  Body: { title, content }
  → { url: "https://storage.../infographic.png" }

GET /health
  → { status: "ok", notebooklm: "connected" }
```

### Flujo interno por request
1. Crear notebook temporal en NotebookLM
2. Agregar contenido de la investigación como fuente de texto
3. Solicitar generación del artifact (audio / infografía)
4. Esperar a que complete (polling interno)
5. Descargar el archivo
6. Subir a Supabase Storage
7. Eliminar el notebook temporal (limpieza automática)
8. Retornar la URL pública

### Límite de notebooks
- NotebookLM gratuito: ~100 notebooks
- Cada generación crea y elimina el notebook automáticamente → sin acumulación

### Arranque automático
Script `start-notebooklm-server.bat` en startup de Windows.

---

## 5. Kokoro TTS — Fallback y Narración Simple

Se instala en la misma PC, puerto `8880`. Entra en acción cuando:
- `notebooklm-server` está offline o la sesión Google expiró
- Se necesita narración rápida sin el overhead de NotebookLM

```
POST http://localhost:8880/synthesize
{ "text": "...", "voice": "af_heart", "speed": 1.0 }
→ Response: audio/mpeg
```

---

## 6. Nuevo Servicio: `content_generator_service`

Nuevo microservicio en el monorepo bajo `services/content_generator_service/`.

### Stack
- **Runtime:** Node.js + TypeScript (consistente con el resto de CUMBRE)
- **PDF:** `pdflatex` via child_process + plantillas LaTeX predefinidas
- **Podcast:** HTTP client al NotebookLM server → fallback a Kokoro
- **Infografía:** HTTP client al NotebookLM server → fallback a Playwright+HTML
- **LLM:** Claude API (Anthropic SDK) para research

### Variables de entorno
```env
ANTHROPIC_API_KEY=...
NOTEBOOKLM_SERVER_URL=https://xxxx.ngrok-free.app   # servidor NotebookLM local
KOKORO_SERVER_URL=https://yyyy.ngrok-free.app        # fallback TTS
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
DATABASE_URL=...   # pooler Supabase port 6543
DIRECT_URL=...
```

### Schema Prisma
```prisma
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
  results   Json?    // { pdfUrl?, podcastUrl?, infographicUrl? }
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

---

## 7. API Routes del Servicio

```
POST /generate
  Body: { topic, depth, sources[], outputs[] }
  → { jobId }

GET /generate/:jobId
  → { status, results? }

GET /generate/history
  → GenerationJob[]

GET /generate/admin/limits
  → GenerationLimit[]

POST /generate/admin/limits
  Body: { role, dailyLimit }
  → GenerationLimit
```

---

## 8. Módulo en CUMBRE — "Generador de Contenido"

### Ubicación en la UI
- **Estudiantes** (`web_student`): sección "Mis Materiales" → pestaña "Generar"
- **Profesores** (`web_teacher`): sección "Recursos" → "Generador"
- **Admin** (`web_admin`): sección "Herramientas" → "Generador"

### Flujo de usuario

1. **Paso 1 — Fuente**
   - Opción A: Escribir tema libre (text input)
   - Opción B: Pegar texto adicional (textarea)
   - Se pueden combinar ambas

2. **Paso 2 — Profundidad**
   - `Resumen` — 1-2 páginas, podcast ~5 min, infografía compacta
   - `Investigación profunda` — 5-10 páginas, podcast ~10 min, infografía extendida

3. **Paso 3 — Outputs**
   - Checkboxes: [📄 PDF Académico] [🎙️ Podcast] [🖼️ Infografía]

4. **Paso 4 — Generando (progress UI)**
   - Polling cada 3s al endpoint `GET /generate/:jobId`
   - Estados: En cola → Investigando → Generando → Listo

5. **Paso 5 — Resultados**
   - Preview inline del PDF (iframe)
   - Player de audio del podcast (calidad NotebookLM)
   - Vista de infografía + botón descarga
   - Botón "Guardar en mis materiales"

### Límites por rol (configurables desde admin, no hardcodeados)

| Rol | Default diario |
|-----|---------------|
| student | 5 generaciones/día |
| teacher | 20 generaciones/día |
| administrator | Sin límite (-1) |

---

## 9. Pipeline de Generación (detalle interno)

### Step 1: Research Agent (Claude)
```
Input: topic + sources[]
Output: JSON {
  title, abstract,
  sections[{ heading, content, keyPoints[] }],
  bibliography[],
  fullText  // texto plano para enviar a NotebookLM
}
```

### Step 2: PDF Generator (siempre en Railway)
- Plantilla LaTeX + datos del research JSON
- `pdflatex` 2 pasadas → PDF
- Upload a Supabase Storage

### Step 3: Podcast (NotebookLM Server)
```
POST NOTEBOOKLM_SERVER_URL/generate-podcast
{ title, content: research.fullText, language: "es", length: "STANDARD"|"SHORT" }
→ descarga MP3 → upload Supabase → URL
```
Fallback si NotebookLM offline:
```
POST KOKORO_SERVER_URL/synthesize (script generado por Claude)
→ MP3 concatenado con ffmpeg
```

### Step 4: Infografía (NotebookLM Server)
```
POST NOTEBOOKLM_SERVER_URL/generate-infographic
{ title, content: research.fullText }
→ descarga PNG → upload Supabase → URL
```
Fallback si NotebookLM offline:
```
Claude genera HTML → Playwright screenshot → PNG
```

---

## 10. Manejo de Errores

| Escenario | Comportamiento |
|-----------|---------------|
| NotebookLM server offline | Fallback automático a Kokoro TTS + Playwright |
| Sesión Google expirada | Admin recibe alerta; regenerar con `notebooklm login` |
| pdflatex error | Retry con LaTeX simplificado; error claro si falla 2 veces |
| Claude API timeout | Retry con backoff exponencial 3 veces |
| Límite diario alcanzado | UI muestra cuándo se resetea (midnight UTC) |
| NotebookLM límite notebooks | Limpieza automática post-generación |

---

## 11. Fases de Implementación

### Fase 1 — Servidores locales en PC
- Instalar `notebooklm-py` + servidor FastAPI (puerto 8881)
- Instalar Kokoro TTS + servidor FastAPI (puerto 8880, fallback)
- Scripts de arranque automático (startup Windows)
- ngrok con 2 tunnels (o Cloudflare Tunnel para URLs fijas)

### Fase 2 — `content_generator_service`
- Scaffold TypeScript (mismo patrón que `content_service`)
- Schema Prisma + migraciones + seed de límites
- Research Agent (Claude API)
- PDF/LaTeX generator
- NotebookLM client + Kokoro client (fallback)
- Pipeline orquestador con límites por rol

### Fase 3 — UI en CUMBRE
- Componente generador en `web_student`, `web_teacher`, `web_admin`
- Polling de estado en tiempo real
- Panel de resultados con preview/player/descarga

### Fase 4 — Admin controls
- CRUD de límites por rol desde `web_admin`
- Dashboard de uso
- Configuración de URLs de servidores locales desde admin

---

## 12. Dependencias Externas

| Herramienta | Propósito | Costo |
|-------------|-----------|-------|
| `notebooklm-py` | Podcasts + infografías via NotebookLM | $0 (cuenta Google gratuita) |
| Kokoro TTS | Fallback TTS local | $0 (open-source) |
| Claude API (Anthropic) | Research + contenido | ~$0.01-0.05 por generación |
| pdflatex (MiKTeX) | Compilar PDFs | $0 (open-source) |
| Playwright | Fallback infografías | $0 (open-source) |
| ffmpeg | Concatenar audio fallback | $0 (open-source) |
| Supabase Storage | Almacenar outputs | Incluido en plan actual |
| ngrok | Tunnels para servidores locales | $0 plan free (2 tunnels) |
| notebooklm-py deps | Playwright (browser automation) | $0 |

---

## 13. Notas de Cuenta Google

- **Cuenta:** `jaminyauricajas@gmail.com`
- **Login:** una sola vez con `notebooklm login --browser-cookies chrome`
- **Relogin:** necesario si la sesión expira (estimado: cada 30-90 días)
- **Notebooks:** se crean y eliminan automáticamente por generación
- **Idioma:** español nativo soportado (50+ idiomas en notebooklm-py)
