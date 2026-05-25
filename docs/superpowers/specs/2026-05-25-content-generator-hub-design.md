# Content Generator Hub — Design Spec
**Fecha:** 2026-05-25  
**Proyecto:** CUMBRE PLATFORM  
**Estado:** Aprobado por usuario

---

## 1. Resumen

Sistema de generación automática de contenido educativo integrado en CUMBRE. Permite a estudiantes, profesores y administradores generar PDFs académicos con LaTeX, podcasts MP3 estilo NotebookLM y infografías visuales a partir de un tema libre, un PDF subido o contenido existente de la plataforma.

El motor de audio (Kokoro TTS) corre localmente en la PC del operador (RTX 4060 Ti) y se expone como servidor independiente consumible por cualquier aplicación del ecosistema Vastoria/CUMBRE.

---

## 2. Objetivos

- Automatizar la creación de materiales de estudio de alta calidad con un solo click
- Soportar investigación superficial (resumen) e investigación profunda (análisis extendido)
- Generar tres tipos de output en paralelo: PDF, podcast y/o infografía
- Costo de generación cercano a $0 (Kokoro local + Claude API por tokens)
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
│  │     - Recibe tema + PDFs subidos (base64)       │   │
│  │     - Genera investigación estructurada         │   │
│  │     - Depth: "summary" | "deep"                 │   │
│  └─────────────────────────────────────────────────┘   │
│                        │                               │
│          ┌─────────────┼──────────────┐               │
│          ▼             ▼              ▼               │
│  ┌──────────────┐ ┌─────────┐ ┌────────────────┐    │
│  │ PDF/LaTeX    │ │ Podcast │ │  Infografía    │    │
│  │ Generator    │ │ Script  │ │  Generator     │    │
│  │              │ │ (Claude)│ │  (HTML→PNG)    │    │
│  │ .tex → .pdf  │ │    ↓    │ │  Playwright    │    │
│  └──────────────┘ │ Kokoro  │ └────────────────┘    │
│                   │ TTS API │                        │
│                   │  → .mp3 │                        │
│                   └─────────┘                        │
│                        │                             │
└────────────────────────┼─────────────────────────────┘
                         │
                         ▼
                  Supabase Storage
                  (PDFs, MP3s, PNGs)
                         │
                         ▼
               URL pública → CUMBRE UI
```

---

## 4. Kokoro TTS — Servidor Global Local

Kokoro TTS se instala una sola vez en la PC del operador y se expone como microservicio independiente. Cualquier aplicación del ecosistema (CUMBRE, VASTORIA, futuras apps) puede consumirlo.

### Setup
- **Runtime:** Python FastAPI, puerto `8880`
- **GPU:** RTX 4060 Ti (generación rápida, ~5-10s por párrafo)
- **Acceso externo:** ngrok tunnel → URL pública configurable como env var en Railway
- **Voces disponibles:** `af_heart`, `af_bella`, `am_michael` (inglés/español)

### Endpoint
```
POST http://localhost:8880/synthesize
{
  "text": "...",
  "voice": "af_heart",
  "speed": 1.0
}
→ Response: audio/mpeg (MP3 binary)
```

### Arranque automático
Script `kokoro-server.bat` en startup de Windows para que levante con la PC.

---

## 5. Nuevo Servicio: `content_generator_service`

Nuevo microservicio en el monorepo bajo `services/content_generator_service/`.

### Stack
- **Runtime:** Node.js + TypeScript (consistente con el resto de CUMBRE)
- **Framework:** Fastify (ligero, ya usado en otros servicios)
- **PDF:** `pdflatex` via child_process + plantillas LaTeX predefinidas
- **Infografías:** Playwright (headless Chromium) renderiza HTML → PNG/PDF
- **TTS:** HTTP client al Kokoro server (env var `KOKORO_SERVER_URL`)
- **LLM:** Claude API (Anthropic SDK) para research + scripts

### Variables de entorno
```env
ANTHROPIC_API_KEY=...
KOKORO_SERVER_URL=https://xxxx.ngrok.io   # o localhost en dev
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
DATABASE_URL=...   # pooler Supabase
DIRECT_URL=...
```

### Schema Prisma (nuevo modelo)
```prisma
model GenerationJob {
  id          String   @id @default(cuid())
  userId      String
  topic       String
  depth       String   // "summary" | "deep"
  sources     Json     // array de { type: "pdf"|"text"|"cumbre_content", data: string }
  outputs     String[] // ["pdf", "podcast", "infographic"]
  status      String   // "pending" | "processing" | "done" | "error"
  results     Json?    // { pdfUrl, podcastUrl, infographicUrl }
  errorMsg    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model GenerationLimit {
  id        String @id @default(cuid())
  role      String @unique  // "student" | "teacher" | "admin"
  dailyLimit Int            // configurable desde admin panel
  updatedAt DateTime @updatedAt
}
```

---

## 6. API Routes del Servicio

```
POST /generate
  Body: { topic, depth, sources[], outputs[], userId, role }
  → { jobId }

GET /generate/:jobId
  → { status, results? }

GET /generate/history/:userId
  → GenerationJob[]

POST /generate/upload-pdf
  Body: multipart/form-data (PDF file)
  → { fileId, extractedText }
```

---

## 7. Módulo en CUMBRE — "Generador de Contenido"

### Ubicación en la UI
- **Estudiantes** (`web_student`): sección "Mis Materiales" → pestaña "Generar"
- **Profesores** (`web_teacher`): sección "Recursos" → "Generador"
- **Admin** (`web_admin`): sección "Herramientas" → "Generador"

### Flujo de usuario

1. **Paso 1 — Fuente**
   - Opción A: Escribir tema libre (text input)
   - Opción B: Subir PDF (drag & drop)
   - Opción C: Seleccionar contenido existente de CUMBRE (picker de lecciones)
   - Se pueden combinar múltiples fuentes

2. **Paso 2 — Profundidad**
   - `Resumen` — 1-2 páginas, podcast ~5 min, infografía compacta
   - `Investigación profunda` — 5-10 páginas, podcast ~10 min, infografía extendida

3. **Paso 3 — Outputs**
   - Checkboxes: [📄 PDF Académico] [🎙️ Podcast] [🖼️ Infografía]

4. **Paso 4 — Generando (progress UI)**
   - Estados en tiempo real via polling cada 3s
   - Indicadores por output: Research → Escribiendo → Compilando/Renderizando → Listo

5. **Paso 5 — Resultados**
   - Preview inline del PDF (iframe)
   - Player de audio del podcast
   - Vista de infografía con botón de descarga
   - Botón "Guardar en mis materiales"

### Límites por rol
Configurables en `GenerationLimit` table, editables desde admin panel:

| Rol | Default diario |
|-----|---------------|
| student | 5 generaciones/día |
| teacher | 20 generaciones/día |
| admin | Sin límite |

---

## 8. Pipeline de Generación (detalle interno)

### Step 1: Research Agent
```
Input: topic + sources[]
Prompt: "Eres un investigador académico. Genera una investigación 
         [summary|deep] sobre: {topic}. Fuentes adjuntas: {sources}"
Output: JSON estructurado {
  title, abstract, sections[{ heading, content, keyPoints[] }],
  bibliography[], infographicData{ stats[], timeline[], concepts[] }
}
```

### Step 2: PDF/LaTeX Generator
- Plantilla LaTeX base con estilos académicos CUMBRE
- Rellena secciones con el JSON del research agent
- Compila con `pdflatex` (2 pasadas para referencias)
- Sube resultado a Supabase Storage

### Step 3: Podcast Script Generator
```
Input: researchJSON
Prompt: "Genera un script de podcast educativo con 2 hosts 
         (Host A: didáctico, Host B: curioso) basado en esta investigación.
         Duración objetivo: [5|10] minutos. Formato: 
         [{ speaker: 'A'|'B', text: '...' }]"
Output: script[]
```
Cada fragmento del script se sintetiza con Kokoro TTS alternando voces:
- Host A → voz `af_heart`
- Host B → voz `am_michael`

Los MP3s se concatenan con `ffmpeg` → un solo archivo final.

### Step 4: Infographic Generator
- Claude genera HTML/CSS con los datos de `infographicData`
- Diseño: fondo oscuro, colores CUMBRE, tipografía clara
- Playwright renderiza a 1200x1600px → PNG
- También exporta a PDF de 1 página

---

## 9. Manejo de Errores

| Escenario | Comportamiento |
|-----------|---------------|
| Kokoro server offline | Fallback a OpenAI TTS API (con aviso al admin) |
| pdflatex error | Retry con LaTeX simplificado, notificar si falla 2 veces |
| Claude API timeout | Retry con backoff 3 veces, luego marcar job como error |
| PDF subido corrupto | Validar antes de procesar, error claro al usuario |
| Límite diario alcanzado | UI muestra cuándo se resetea (midnight UTC) |

---

## 10. Testing

- Unit tests para cada generador (PDF, podcast, infographic) con mocks de Claude y Kokoro
- Integration test del pipeline completo con topic simple
- E2E: usuario estudiante genera resumen → verifica 3 outputs disponibles
- Test de límites: verificar que se bloquea al alcanzar `dailyLimit`

---

## 11. Fases de Implementación

### Fase 1 — Infraestructura base
- Instalar Kokoro TTS + servidor local en PC
- Crear `content_generator_service` con esqueleto Fastify
- Schema Prisma + migraciones
- Endpoint `/generate` básico (solo research + PDF)

### Fase 2 — Outputs completos
- Podcast pipeline (script + TTS + ffmpeg concat)
- Infographic pipeline (Claude → HTML → Playwright → PNG)
- Supabase Storage upload para todos los outputs

### Fase 3 — UI en CUMBRE
- Componente generador en `web_student`, `web_teacher`, `web_admin`
- Polling de estado en tiempo real
- Panel de resultados con preview/player/descarga

### Fase 4 — Admin controls
- CRUD de límites por rol desde `web_admin`
- Dashboard de uso (cuántas generaciones por día/usuario)
- Configuración de URL del Kokoro server desde admin

---

## 12. Dependencias Externas

| Herramienta | Propósito | Costo |
|-------------|-----------|-------|
| Kokoro TTS | Síntesis de voz local | $0 (open-source) |
| Claude API (Anthropic) | Research + scripts | ~$0.01-0.05 por generación |
| pdflatex (TeX Live) | Compilar PDFs | $0 (open-source) |
| Playwright | Renderizar infografías | $0 (open-source) |
| ffmpeg | Concatenar audio | $0 (open-source) |
| Supabase Storage | Almacenar outputs | Incluido en plan actual |
| ngrok | Tunnel para Kokoro | $0 plan free (1 tunnel) |
| OpenAI TTS (fallback) | Si Kokoro offline | ~$0.015/min |
