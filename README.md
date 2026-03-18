# CUMBRE_PLATFORM

Monorepo scaffold for the CUMBRE adaptive learning platform.

## Architecture Truth

The source of truth for platform design lives in `docs/`.

Development flow:

1. `docs/` defines architecture and product intent
2. `prompts/` and AI context drive execution
3. Code implements the documented system

## Monorepo Areas

- `apps/`: student, teacher, admin, and mobile applications
- `apps/web_portal`: public landing page and centralized login gateway
- `services/`: service-oriented backend domains
- `ai/`: tutoring, retrieval, adaptation, recommendation, and evaluation modules
- `packages/`: shared types, schemas, config, SDK, UI, and prompts
- `infrastructure/`: docker, kubernetes, terraform, monitoring, and CI/CD

## Production Deployment

The initial production deployment baseline is now documented in [docs/production_deployment.md](docs/production_deployment.md).
The GitHub-based CI/CD and repository setup baseline is documented in [docs/github_deployment.md](docs/github_deployment.md).

Recommended production split:

- Vercel: `web_portal`, `web_student`, `web_teacher`, `web_admin`
- Railway: `auth_service`, `learning_service`, `content_service`
- Supabase PostgreSQL: shared production database, still managed through Prisma

Key production changes already wired into the codebase:

- role-app session cookies now support an optional shared cookie domain, which is required for portal login handoff across subdomains
- active Prisma schemas now support both `DATABASE_URL` and `DIRECT_URL`, so runtime traffic can stay pooled while migration commands use a direct Postgres connection
- frontend apps include committed `vercel.json` files for per-project monorepo builds
- backend Dockerfiles now copy the workspace dependencies they actually need and install with the committed lockfile

## Workspace

This repository uses a simple `pnpm` workspace scaffold so apps, services, AI modules, and shared packages can evolve under a single monorepo.

## Local Development

### Requirements

- Node.js 20+
- Corepack
- Docker Desktop or Docker Engine with Compose

### ORM Selection

The persistence layer uses `Prisma`.

Why Prisma:

- strong TypeScript support for a contract-driven monorepo
- first-class PostgreSQL compatibility
- built-in migration workflow
- easy service-by-service ownership with one schema per backend domain

### Validation Strategy

The runtime validation layer uses `Ajv`.

Why Ajv:

- `packages/schemas` already follows a JSON-schema-like structure, so the same contract can be used for runtime validation
- strong TypeScript compatibility and low runtime overhead
- works well for request body, query string, and path parameter validation across all services

Validation and error handling are centralized in `@cumbre/api-runtime`, which provides:

- request validation bound to shared schemas
- standard success envelopes: `{ "success": true, "data": ... }`
- standard error envelopes: `{ "success": false, "error": { "code": "...", "message": "..." } }`
- shared error classes for validation, domain, not-found, and internal failures

### Testing Framework

The integration test layer uses `Vitest`.

Why Vitest:

- TypeScript-first and easy to run inside a monorepo
- fast feedback for backend integration suites
- works cleanly with Node HTTP handlers, Prisma-backed services, and shared workspace packages

Shared test bootstrapping lives in `@cumbre/test-utils`.

### Browser E2E Framework

The browser journey layer uses `Playwright`.

Why Playwright:

- stable cross-browser automation for real role-based user flows
- good CI ergonomics for monorepos with multiple apps and backend services
- strong tracing, video, and screenshot support for debugging alpha issues

The end-to-end suite lives in `tests/e2e` and covers the student, teacher, and admin critical paths.

### Advanced AI Baseline

Phase 11 introduces a practical retrieval layer in `@cumbre/retrieval-engine`.

- hybrid retrieval over lesson/topic summaries, supporting content items, knowledge-graph signals, recent tutor turns, and adaptive signals
- explainable ranking and selection instead of opaque prompt stuffing
- prompt assembly separated from response generation so the tutor remains RAG-ready
- retrieved tutor context persisted per tutor turn for continuity and auditability

### External LLM Provider Baseline

AI modules that need external generation now use `@cumbre/llm-runtime`.

- reads `OPENAI_API_KEY`, `OPENAI_MODEL`, and `OPENAI_BASE_URL` from `process.env`
- loads the monorepo root `.env` into `process.env` when needed
- talks to an OpenAI-compatible `/chat/completions` endpoint
- returns typed fallback metadata instead of crashing when the API key is missing or the provider fails
- keeps generation grounded by requiring each AI module to pass a retrieval-engine context bundle
- stays in deterministic fallback mode during `NODE_ENV=test` unless `CUMBRE_ENABLE_LLM_IN_TESTS=true`

### Ecosystem Expansion Baseline

Phase 12 expands the platform from role-based visibility into role-based operational workspaces.

- `web_teacher` now includes an authoring studio for lesson creation, concept mapping, instructional content curation, and prerequisite review
- `web_admin` now includes a management workspace for topics, lessons, concepts, edges, integrity fixes, and knowledge exploration
- `content_service` exposes typed authoring and graph-management surfaces aligned with the shared contracts
- teacher and admin dashboards now surface richer analytics, integrity, and coverage signals

### Authentication And RBAC Baseline

Phase 10 hardens the platform around server-owned sessions.

- `auth_service` now issues opaque access and refresh tokens backed by PostgreSQL
- the web apps store signed `httpOnly` cookies instead of browser-readable auth tokens
- `learning_service` and `content_service` validate bearer tokens against `auth_service`
- route protection is role-aware for `student`, `teacher`, and `administrator`
- frontend pages are protected before rendering, and unauthorized users are redirected to `/login`

Phase 13 extends that baseline with scope-aware permissions while keeping role compatibility.

RBAC baseline:

- `web_student` and student-facing BFF routes require `student`
- `web_teacher` and `/learning/teacher/overview` allow `teacher` or `administrator`
- `web_admin` and `/content/admin/overview` require `administrator`

Scoped capability baseline:

- `analytics:read`
- `content:read`
- `content:write`
- `learning:read`
- `learning:write`
- `progress:read`
- `lesson:edit`
- `graph:manage`
- `concept:create`
- `tutor:use`
- `tutor:moderate`

Roles still gate coarse access, but routes can now additionally require scopes. Scope resolution is centralized in `@cumbre/types`, and web/server auth helpers live in `@cumbre/app-runtime`.

### Shared App Runtime

`@cumbre/app-runtime` now centralizes shared app concerns across `web_student`, `web_teacher`, and `web_admin`:

- backend HTTP access with auth refresh handling
- server session cookie helpers
- route/session auth guards with role and scope checks
- shared auth-server utilities for login, signup, logout, and current-user fetches

### Unified Entry Portal

`web_portal` is now the public-facing front door for CUMBRE.

- public Spanish-first landing page
- centralized login against the existing `auth_service`
- typed role-to-app redirect layer
- session bridge that writes the destination app cookie and sends the user to `web_student`, `web_teacher`, or `web_admin`

The role apps remain independent deployments internally; the portal only unifies branding and entry UX.

### Spanish-First UX Baseline

The platform now defaults to Spanish across all user-facing apps and AI-assisted copy.

- `web_student`, `web_teacher`, and `web_admin` render user-facing labels, navigation, form copy, system feedback, and dashboard text in Spanish by default
- `@cumbre/app-runtime/client` provides the shared locale context and message catalog used by the role apps
- the default locale is `es`, persisted client-side for future multilingual expansion
- AI tutor replies, adaptive guidance, module-generation copy, quiz-generation copy, and retrieval-grounded prompts are now Spanish-first

Technical structure remains in English: package names, folder names, service names, and contracts are unchanged.

### Operational Baseline

Phase 10 also adds production-minded runtime behavior:

- structured JSON logs with request correlation via `x-request-id`
- request timeout enforcement in `@cumbre/api-runtime`
- `/health` and `/ready` endpoints on core services
- CI validation workflow in `.github/workflows/ci.yml`
- root scripts `validate` and `ci:validate` for repeatable local and CI checks

### Install

```bash
corepack pnpm install
```

Do not add an `install` lifecycle script to this repository. `corepack pnpm install` is the correct bootstrap command, and an `install` script would recurse during dependency installation.

### Environment

Copy the service examples before starting the backend. All three services use the same local PostgreSQL instance during development and connect through `DATABASE_URL`.

For external AI generation, set these variables in the monorepo root `.env`:

```bash
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
OPENAI_BASE_URL=https://api.openai.com/v1
```

```bash
cp services/auth_service/.env.example services/auth_service/.env
cp services/learning_service/.env.example services/learning_service/.env
cp services/content_service/.env.example services/content_service/.env
```

On Windows PowerShell:

```powershell
Copy-Item services/auth_service/.env.example services/auth_service/.env
Copy-Item services/learning_service/.env.example services/learning_service/.env
Copy-Item services/content_service/.env.example services/content_service/.env
Copy-Item ai/tutor_engine/.env.example ai/tutor_engine/.env
Copy-Item apps/web_student/.env.local.example apps/web_student/.env.local
Copy-Item apps/web_teacher/.env.local.example apps/web_teacher/.env.local
Copy-Item apps/web_admin/.env.local.example apps/web_admin/.env.local
Copy-Item apps/web_portal/.env.local.example apps/web_portal/.env.local
```

Or prepare all missing local env files automatically:

```bash
corepack pnpm env:prepare
```

`env:prepare` now also creates a root `.env` from `.env.example` if it does not exist yet. If `OPENAI_API_KEY` is left empty, the AI modules stay operational and fall back to their local grounded baseline.

### Run

Start PostgreSQL locally:

```bash
docker compose -f infrastructure/docker/docker-compose.yml up -d postgres
```

Generate Prisma clients:

```bash
corepack pnpm db:generate
```

Apply committed migrations:

```bash
corepack pnpm db:migrate
```

Seed baseline development data:

```bash
corepack pnpm db:seed
```

Start all three core services in parallel:

```bash
corepack pnpm dev
```

Start one service at a time:

```bash
corepack pnpm dev:auth
corepack pnpm dev:learning
corepack pnpm dev:content
```

Start the role-based frontend apps:

```bash
corepack pnpm dev:portal
corepack pnpm dev:student
corepack pnpm dev:teacher
corepack pnpm dev:admin
```

Default local entry URLs:

- `web_portal`: `http://localhost:3000`
- `web_student`: `http://localhost:3100`
- `web_teacher`: `http://localhost:3110`
- `web_admin`: `http://localhost:3111`

The seeded role accounts are:

- `student@example.com / placeholder`
- `teacher@example.com / placeholder`
- `admin@example.com / placeholder`

### Validate

Typecheck the shared packages and core services:

```bash
corepack pnpm typecheck
```

Run the full production-baseline validation locally:

```bash
corepack pnpm validate
```

Run the integration suites:

```bash
corepack pnpm db:generate
corepack pnpm test
```

Run one service suite:

```bash
corepack pnpm db:generate
corepack pnpm test:auth
corepack pnpm test:learning
corepack pnpm test:content
```

Run the browser E2E suite:

```bash
corepack pnpm test:e2e:install
corepack pnpm test:e2e
```

`test:e2e` now prepares missing env files, applies migrations, reseeds the local baseline, and then starts the three services plus the three role apps automatically. Outside CI it still reuses already-running local servers on the dedicated E2E ports when available.

If Prisma schemas changed or this is a fresh local install, run `corepack pnpm db:generate` once before `test:e2e`. On Windows, keep service watchers stopped while generating clients.

### Smoke Tests

Health:

```bash
curl http://localhost:3001/health
curl http://localhost:3001/ready
curl http://localhost:3002/health
curl http://localhost:3002/ready
curl http://localhost:3003/health
curl http://localhost:3003/ready
```

Auth:

```bash
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","credential":"placeholder","displayName":"Student One","requestedRole":"student"}'

curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"student@example.com","credential":"placeholder","requestedRole":"student"}'

curl "http://localhost:3001/auth/me?userId=user-placeholder"
```

Learning:

```bash
curl -X POST http://localhost:3002/learning/session/start \
  -H "Content-Type: application/json" \
  -d '{"learnerUserId":"user-placeholder","learningPathId":"learning-path-placeholder","lessonId":"lesson-placeholder","topicId":"topic-learning-strategy","difficultyLevel":"intermediate"}'

curl -X POST http://localhost:3002/learning/session/update \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"learning-session-placeholder","status":"active","progressPercent":55,"difficultyLevel":"intermediate"}'

curl "http://localhost:3002/learning/progress?learnerUserId=user-placeholder&learningPathId=learning-path-placeholder"

curl "http://localhost:3002/learning/path?learningPathId=learning-path-placeholder"
```

Content:

```bash
curl "http://localhost:3003/content/topics"
curl "http://localhost:3003/content/lessons?topicId=topic-placeholder"
curl "http://localhost:3003/content/search?query=systems"
curl "http://localhost:3003/content/topic/topic-placeholder"
```

### Validation Smoke Tests

Auth validation error:

```bash
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"not-an-email"}'
```

Learning query validation error:

```bash
curl "http://localhost:3002/learning/path"
```

Content path validation error:

```bash
curl "http://localhost:3003/content/topic/"
```

Expected error shape:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid body payload."
  }
}
```

### Integration Test Workflow

The integration suites:

- start each service on an ephemeral local HTTP port
- connect to PostgreSQL using `DATABASE_URL`
- reset only the tables owned by the service under test
- verify success envelopes, validation failures, not-found cases, and persisted reads/writes

Safety note:

- the shared test helpers refuse to run against non-local PostgreSQL hosts
- the expected database is the local Docker-backed `cumbre` database
- because tests reset service-owned tables, run them against a disposable local development database

### Migration Workflow

1. `corepack pnpm db:up`
2. `corepack pnpm db:generate`
3. `corepack pnpm db:migrate`
4. `corepack pnpm db:seed`
5. `corepack pnpm dev`

### Windows Prisma Workflow

On Windows, Prisma can lock generated engine files if `tsx watch` processes are already running while another command tries to regenerate clients.

Use this workflow instead of forcing file cleanup:

1. stop running service watchers before `db:generate`
2. run `corepack pnpm db:generate` explicitly when Prisma schemas change
3. run `corepack pnpm test`, `corepack pnpm typecheck`, or `corepack pnpm build` after client generation

`test`, `typecheck`, and `build` no longer regenerate Prisma clients automatically for the core services, which makes the workflow safer and more predictable on Windows.

### Current Limitations

- PostgreSQL is local-development first; cloud deployment wiring is intentionally deferred
- Auth hardening is now server-backed, but enterprise SSO and advanced permission matrices are still deferred
- Recommendations and assessments are still placeholder-backed even though core persistence exists
- Service bootstrap utilities are intentionally lightweight and duplicated for now
- Integration tests assume a local PostgreSQL instance is already running and migrated
- Scoped permissions are baseline-level and not yet resource-instance aware
