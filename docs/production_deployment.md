# Production Deployment Baseline

This document defines the initial production deployment baseline for CUMBRE without changing the current monorepo architecture.

## Recommended Architecture

### Frontend

Deploy the four Next.js apps as separate Vercel projects:

- `apps/web_portal`
- `apps/web_student`
- `apps/web_teacher`
- `apps/web_admin`

Why this fits the current codebase:

- each app already has its own login, routing, BFF handlers, and runtime config
- role-specific deployments stay isolated
- Vercel is a strong fit for Next.js App Router and server-side BFF routes
- the portal remains the public entrypoint, not a replacement for the role apps

### Backend

Deploy the core backend services as separate containerized web services on Railway:

- `services/auth_service`
- `services/learning_service`
- `services/content_service`

Why Railway is the recommended baseline:

- the services are long-running Node HTTP servers, not serverless functions
- Docker deployment is already part of the repository
- health/readiness endpoints already exist
- Railway supports GitHub-connected service deployments, Dockerfile-based services, custom domains, and practical initial production operations without forcing the backend into serverless constraints

### Database

Use Supabase PostgreSQL as the production database.

Keep the current Prisma + PostgreSQL model:

- no Supabase Auth migration
- no backend boundary changes
- service-owned tables stay in the same database
- Prisma migrations remain the schema-management path

## Production Routing Model

Recommended domain strategy:

- `cumbre.app` -> `web_portal`
- `student.cumbre.app` -> `web_student`
- `teacher.cumbre.app` -> `web_teacher`
- `admin.cumbre.app` -> `web_admin`
- `auth-api.cumbre.app` -> `auth_service`
- `learning-api.cumbre.app` -> `learning_service`
- `content-api.cumbre.app` -> `content_service`

Recommended cookie strategy:

- set role-app session cookies with `domain=.cumbre.app`
- keep one cookie name per role app:
  - `cumbre_student_session`
  - `cumbre_teacher_session`
  - `cumbre_admin_session`
- keep cookies `httpOnly`, `secure`, `sameSite=lax`

Why this matters:

- `web_portal` authenticates the user and writes the destination app cookie
- a shared parent cookie domain lets the portal hand off the session cleanly to `student`, `teacher`, or `admin` subdomains
- the role apps remain independent deployments

## Vercel Project Setup

Create four separate Vercel projects pointing at the same repository.

For each project:

1. Set the project Root Directory to the corresponding app folder.
2. Ensure the project includes workspace files outside the app root.
3. Use the committed `vercel.json` in each app directory.
4. Add the production environment variables listed below.

Projects:

| Vercel project | Root directory | Custom domain |
| --- | --- | --- |
| `cumbre-portal` | `apps/web_portal` | `cumbre.app` |
| `cumbre-student` | `apps/web_student` | `student.cumbre.app` |
| `cumbre-teacher` | `apps/web_teacher` | `teacher.cumbre.app` |
| `cumbre-admin` | `apps/web_admin` | `admin.cumbre.app` |

### Frontend Environment Variables

#### `web_portal`

| Variable | Required | Example production value |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `STUDENT_APP_URL` | yes | `https://student.cumbre.app` |
| `TEACHER_APP_URL` | yes | `https://teacher.cumbre.app` |
| `ADMIN_APP_URL` | yes | `https://admin.cumbre.app` |
| `STUDENT_APP_SESSION_COOKIE_NAME` | yes | `cumbre_student_session` |
| `TEACHER_APP_SESSION_COOKIE_NAME` | yes | `cumbre_teacher_session` |
| `ADMIN_APP_SESSION_COOKIE_NAME` | yes | `cumbre_admin_session` |
| `STUDENT_APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |
| `TEACHER_APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |
| `ADMIN_APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |
| `STUDENT_APP_SESSION_SECRET` | yes | strong random secret |
| `TEACHER_APP_SESSION_SECRET` | yes | strong random secret |
| `ADMIN_APP_SESSION_SECRET` | yes | strong random secret |

#### `web_student`

| Variable | Required | Example production value |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `LEARNING_SERVICE_URL` | yes | `https://learning-api.cumbre.app` |
| `CONTENT_SERVICE_URL` | yes | `https://content-api.cumbre.app` |
| `DATABASE_URL` | yes | Supabase pooled runtime URL |
| `NEXT_PUBLIC_DEFAULT_LEARNING_PATH_ID` | recommended | platform default path id |
| `APP_SESSION_SECRET` | yes | strong random secret |
| `APP_SESSION_COOKIE_NAME` | yes | `cumbre_student_session` |
| `APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |
| `OPENAI_API_KEY` | recommended | provider secret |
| `OPENAI_MODEL` | recommended | `gpt-4o-mini` |
| `OPENAI_BASE_URL` | recommended | `https://api.openai.com/v1` |

#### `web_teacher`

| Variable | Required | Example production value |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `LEARNING_SERVICE_URL` | yes | `https://learning-api.cumbre.app` |
| `CONTENT_SERVICE_URL` | yes | `https://content-api.cumbre.app` |
| `NEXT_PUBLIC_DEFAULT_LEARNING_PATH_ID` | recommended | platform default path id |
| `APP_SESSION_SECRET` | yes | strong random secret |
| `APP_SESSION_COOKIE_NAME` | yes | `cumbre_teacher_session` |
| `APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |

#### `web_admin`

| Variable | Required | Example production value |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `CONTENT_SERVICE_URL` | yes | `https://content-api.cumbre.app` |
| `APP_SESSION_SECRET` | yes | strong random secret |
| `APP_SESSION_COOKIE_NAME` | yes | `cumbre_admin_session` |
| `APP_SESSION_COOKIE_DOMAIN` | recommended | `.cumbre.app` |

## Railway Service Setup

Create three Railway services using the committed Dockerfiles:

| Service | Dockerfile | Port | Health path |
| --- | --- | --- | --- |
| `auth-service` | `services/auth_service/Dockerfile` | provider `PORT` | `/ready` |
| `learning-service` | `services/learning_service/Dockerfile` | provider `PORT` | `/ready` |
| `content-service` | `services/content_service/Dockerfile` | provider `PORT` | `/ready` |

Railway deployment notes:

- use `runtime: docker`
- deploy from the monorepo root as build context
- keep one public HTTPS endpoint per service
- connect each service directly to the GitHub repository
- set production deploys to happen from the protected production branch only
- use `/ready` as the provider health check target
- prefer custom subdomains over default provider URLs in production app config
- keep one Railway service per backend boundary instead of merging services into a single container

### Backend Environment Variables

#### Shared backend variables

| Variable | Required | Notes |
| --- | --- | --- |
| `PORT` | provider-managed | Railway injects this automatically |
| `DATABASE_URL` | yes | Supabase pooled runtime connection |
| `DIRECT_URL` | yes | Supabase direct Postgres connection for Prisma CLI |
| `NODE_ENV` | yes | `production` |
| `LOG_LEVEL` | recommended | `info` or `warn` |
| `REQUEST_TIMEOUT_MS` | recommended | keep aligned with platform SLOs |

#### `auth_service`

| Variable | Required | Notes |
| --- | --- | --- |
| `AUTH_ACCESS_TOKEN_TTL_MINUTES` | recommended | e.g. `30` |
| `AUTH_REFRESH_TOKEN_TTL_DAYS` | recommended | e.g. `14` |

#### `learning_service`

| Variable | Required | Notes |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `CONTENT_SERVICE_URL` | yes | `https://content-api.cumbre.app` |

#### `content_service`

| Variable | Required | Notes |
| --- | --- | --- |
| `AUTH_SERVICE_URL` | yes | `https://auth-api.cumbre.app` |
| `OPENAI_API_KEY` | recommended | for material parsing, module generation, quiz generation |
| `OPENAI_MODEL` | recommended | default model name |
| `OPENAI_BASE_URL` | recommended | OpenAI-compatible base URL |

### AI and Tutor Runtime Variables

The following runtimes execute external LLM-backed generation:

- `web_student` for tutor generation paths
- `content_service` for teacher material parsing and generation flows

Variables:

| Variable | Required | Notes |
| --- | --- | --- |
| `OPENAI_API_KEY` | recommended | keep only in runtimes that execute AI generation |
| `OPENAI_MODEL` | recommended | default `gpt-4o-mini` |
| `OPENAI_BASE_URL` | recommended | default `https://api.openai.com/v1` |

## Supabase PostgreSQL Setup

Use two connection strings:

- `DATABASE_URL`: pooled runtime connection string
- `DIRECT_URL`: direct Postgres connection string used for Prisma migrations and other CLI operations

Recommended pattern:

- point application runtime traffic at Supabase pooler / Supavisor
- point Prisma CLI migration commands at the direct Postgres host

Why this matters:

- pooled runtime traffic is better for app and service concurrency
- Prisma migration commands should use the direct connection
- the repo now supports this with `directUrl = env("DIRECT_URL")` in all active Prisma schemas

Active Prisma runtimes:

- `services/auth_service/prisma/schema.prisma`
- `services/learning_service/prisma/schema.prisma`
- `services/content_service/prisma/schema.prisma`
- `ai/tutor_engine/prisma/schema.prisma`

## Production Migration Workflow

Run migrations in a controlled deployment step, not ad hoc from developer laptops.

Recommended order:

1. merge changes to the release branch after CI passes
2. build and deploy backend containers to a staging environment
3. run Prisma migrations against production using the protected GitHub Actions workflow and `DIRECT_URL`
4. verify `health` and `ready` endpoints for all three services
5. deploy the four Vercel frontend projects
6. smoke-test the portal login and the three role dashboards

Migration commands:

```bash
corepack pnpm db:generate
corepack pnpm --filter @cumbre/auth-service db:migrate
corepack pnpm --filter @cumbre/learning-service db:migrate
corepack pnpm --filter @cumbre/content-service db:migrate
corepack pnpm --filter @cumbre/tutor-engine db:migrate
```

Recommended production seeding:

- do not run the local baseline `db:seed` blindly against production
- create a separate curated production seed or one-off bootstrap script for initial operator accounts and baseline content

## Initial Production Release Workflow

### Before deploy

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm db:generate
corepack pnpm ci:validate
```

### Backend rollout

1. deploy `auth_service`
2. deploy `content_service`
3. deploy `learning_service`
4. confirm:
   - `/health`
   - `/ready`
   - service-to-service auth calls

### Frontend rollout

1. deploy `web_portal`
2. deploy `web_student`
3. deploy `web_teacher`
4. deploy `web_admin`
5. confirm portal login redirects correctly for:
   - student
   - teacher
   - administrator

## Rollback Notes

Use a cautious expand-contract approach:

- avoid destructive migrations in the same release as app changes
- rollback frontend apps first if the issue is UI/BFF-specific
- rollback Railway services to the previous healthy deployment if backend behavior regresses
- prefer forward-fix migrations over database rollback once data shape changes are live

## Remaining Gaps Before Public Launch

- centralized secret management and rotation policy
- rate limiting at the edge and service level
- a production-safe object storage strategy for uploaded teaching materials and exam scans
- background-job execution for long-running OCR and ingestion tasks instead of request/response processing
- external log aggregation and alerting beyond provider dashboards
- staging environment parity with production domains and cookie policy
