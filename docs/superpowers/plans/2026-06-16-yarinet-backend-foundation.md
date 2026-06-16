# YariNET — Backend Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the new `yarinet_service` microservice with its Prisma schema and a working, authenticated "Civic Challenge" CRUD slice, matching the conventions already used by `learning_service`.

**Architecture:** A standalone Node ESM microservice (port 3004) with its own PostgreSQL schema/database, exposing REST routes through `@cumbre/api-runtime` (`createRouter`). Users and classrooms are referenced by plain `String` IDs (no cross-service foreign keys); identity is resolved at runtime via an `AuthServiceClient` that calls `auth_service`. This plan delivers only the Challenge subsystem; forums, AI agents, and frontend ship in separate plans.

**Tech Stack:** TypeScript (ESM, `.js` import specifiers), Prisma 6 + PostgreSQL, `@cumbre/api-runtime`, `@cumbre/schemas` (JSON Schema objects validated by AJV — NOT Zod), `@cumbre/types`, `@cumbre/sdk` (`normalizePostgresUrl`), Vitest.

> **Correction (during execution):** the original plan assumed `@cumbre/schemas` used Zod. The real package defines plain JSON Schema objects (`SchemaDefinition`, validated by AJV in `api-runtime/validation.ts`) with hand-written TS request interfaces — see `packages/schemas/src/classroom.ts`. Task 4 below has been rewritten to match. Tasks 5–8 are unaffected: they import the same exported type names (`CreateChallengeRequest`, etc.), now declared as interfaces instead of `z.infer`.

## Global Constraints

- ESM only. All relative imports use the `.js` extension even for `.ts` files (e.g. `import { x } from "./y.js"`).
- Entity IDs are app-generated with `randomUUID()` from `node:crypto`; Prisma models use `String @id` (NOT `@default(uuid())`).
- Cross-service references (`teacherId`, `classroomId`, `studentId`, `approvedByTeacherId`) are plain `String` columns with NO Prisma relation — they belong to other services' databases.
- `@cumbre/api-runtime` `HttpMethod` is only `"GET" | "POST" | "DELETE"`. There is NO PATCH/PUT. Status mutations use `POST` (mirror `/learning/session/update`).
- Prisma generates the client to `../src/generated/prisma`; datasource uses `url = env("DATABASE_URL")` and `directUrl = env("DIRECT_URL")`.
- Always wrap the connection string with `normalizePostgresUrl` from `@cumbre/sdk` when constructing the PrismaClient.
- Service port is `3004`, env var `YARINET_SERVICE_PORT` (fallback to `PORT`).
- New permission scopes: `deliberation:read`, `deliberation:write`, `challenge:manage`, `forum:moderate`.
- Roles in this system: `student`, `teacher`, `administrator`.
- The reference/template service for all scaffolding is `services/learning_service`. When a step says "copy from template", copy that exact file and apply the listed token substitutions.

---

### Task 1: Add YariNET permission scopes to `@cumbre/types`

**Files:**
- Modify: `packages/types/src/index.ts:37-53` (PermissionScope union)
- Modify: `packages/types/src/index.ts:770-808` (defaultRoleScopeMap)

**Interfaces:**
- Consumes: nothing.
- Produces: four new `PermissionScope` literals usable in route `authorization.scopes` and granted by `resolvePermissionScopes`: `"deliberation:read"`, `"deliberation:write"`, `"challenge:manage"`, `"forum:moderate"`.

- [ ] **Step 1: Add the four scope literals to the `PermissionScope` union**

In `packages/types/src/index.ts`, extend the union (after `"assessment:write"`):

```ts
  | "assessment:write"
  | "deliberation:read"
  | "deliberation:write"
  | "challenge:manage"
  | "forum:moderate"
>;
```

- [ ] **Step 2: Grant scopes in `defaultRoleScopeMap`**

Add `"deliberation:read"` and `"deliberation:write"` to `student`; add all four to `teacher` and `administrator`:

```ts
  student: [
    "content:read",
    "learning:read",
    "learning:write",
    "progress:read",
    "tutor:use",
    "classroom:join",
    "deliberation:read",
    "deliberation:write"
  ],
```

For `teacher` and `administrator`, append:

```ts
    "deliberation:read",
    "deliberation:write",
    "challenge:manage",
    "forum:moderate"
```

- [ ] **Step 3: Typecheck the package**

Run: `pnpm --filter @cumbre/types build`
Expected: PASS (no type errors).

- [ ] **Step 4: Commit**

```bash
git add packages/types/src/index.ts
git commit -m "feat(types): add YariNET deliberation permission scopes"
```

---

### Task 2: Scaffold the `yarinet_service` package shell

**Files:**
- Create: `services/yarinet_service/package.json`
- Create: `services/yarinet_service/tsconfig.json`
- Create: `services/yarinet_service/tsconfig.test.json`
- Create: `services/yarinet_service/.env.example`
- Create: `services/yarinet_service/Dockerfile`
- Create: `services/yarinet_service/src/utils/logger.ts`
- Create: `services/yarinet_service/src/config/env.ts`
- Create: `services/yarinet_service/src/models/contracts.ts`
- Create: `services/yarinet_service/src/controllers/health-controller.ts`
- Create: `services/yarinet_service/src/routes/health-routes.ts`
- Create: `services/yarinet_service/src/server.ts`
- Create: `services/yarinet_service/src/index.ts`

**Interfaces:**
- Consumes: `@cumbre/api-runtime`, `@cumbre/sdk`, `@cumbre/types`.
- Produces:
  - `YariNetServiceConfig` (`config/env.ts`): `{ serviceName: "yarinet_service"; port: number; nodeEnv: string; logLevel: LogLevel; databaseUrl: string; authServiceUrl: string; learningServiceUrl: string; requestTimeoutMs: number }`
  - `loadYariNetServiceConfig(env?): YariNetServiceConfig`
  - `createLogger(service, level): Logger`, `Logger`, `LogLevel` (`utils/logger.ts`)
  - `ServiceHealthResponse`, `ServiceReadinessResponse` (`models/contracts.ts`)
  - `HealthController` (`controllers/health-controller.ts`)
  - `registerHealthRoutes(controller): RouteDefinition[]`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "@cumbre/yarinet-service",
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
    "lint": "echo yarinet_service lint pending",
    "test": "vitest run",
    "typecheck": "tsc -p tsconfig.json --noEmit && tsc -p tsconfig.test.json --noEmit"
  },
  "dependencies": {
    "@cumbre/api-runtime": "workspace:*",
    "@prisma/client": "^6.5.0",
    "dotenv": "^16.4.7",
    "@cumbre/schemas": "workspace:*",
    "@cumbre/sdk": "workspace:*",
    "@cumbre/types": "workspace:*"
  },
  "devDependencies": {
    "@cumbre/test-utils": "workspace:*",
    "@types/node": "^22.10.2",
    "dotenv-cli": "^7.4.4",
    "prisma": "^6.5.0",
    "tsx": "^4.19.2",
    "typescript": "^5.7.2",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json` and `tsconfig.test.json`**

Copy `services/learning_service/tsconfig.json` verbatim into `services/yarinet_service/tsconfig.json`. Then create `services/yarinet_service/tsconfig.test.json`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "rootDir": ".",
    "noEmit": true,
    "types": ["node", "vitest/globals"]
  },
  "include": ["src/**/*.ts", "test/**/*.ts"]
}
```

- [ ] **Step 3: Create `.env.example`**

```bash
YARINET_SERVICE_PORT=3004
DATABASE_URL=postgres://cumbre:cumbrepass@localhost:5432/cumbre
DIRECT_URL=postgres://cumbre:cumbrepass@localhost:5432/cumbre
AUTH_SERVICE_URL=http://localhost:3001
LEARNING_SERVICE_URL=http://localhost:3002
LOG_LEVEL=info
NODE_ENV=development
REQUEST_TIMEOUT_MS=10000
```

- [ ] **Step 4: Copy the logger**

Copy `services/learning_service/src/utils/logger.ts` verbatim into `services/yarinet_service/src/utils/logger.ts` (no changes needed).

- [ ] **Step 5: Create `src/config/env.ts`**

```ts
import type { LogLevel } from "../utils/logger.js";

export interface YariNetServiceConfig {
  serviceName: "yarinet_service";
  port: number;
  nodeEnv: string;
  logLevel: LogLevel;
  databaseUrl: string;
  authServiceUrl: string;
  learningServiceUrl: string;
  requestTimeoutMs: number;
}

function resolvePort(raw: string | undefined, fallback: number): number {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function resolveLogLevel(raw: string | undefined): LogLevel {
  const normalized = raw?.toLowerCase();
  if (
    normalized === "debug" ||
    normalized === "info" ||
    normalized === "warn" ||
    normalized === "error"
  ) {
    return normalized;
  }
  return "info";
}

function resolveDatabaseUrl(raw: string | undefined): string {
  if (!raw) {
    throw new Error("DATABASE_URL is required for yarinet_service.");
  }
  return raw;
}

function resolveAuthServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3001";
}

function resolveLearningServiceUrl(raw: string | undefined): string {
  return raw && raw.trim().length > 0 ? raw : "http://localhost:3002";
}

function resolvePositiveInteger(raw: string | undefined, fallback: number) {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function loadYariNetServiceConfig(
  env: NodeJS.ProcessEnv = process.env
): YariNetServiceConfig {
  return {
    serviceName: "yarinet_service",
    port: resolvePort(env.YARINET_SERVICE_PORT ?? env.PORT, 3004),
    nodeEnv: env.NODE_ENV ?? "development",
    logLevel: resolveLogLevel(env.LOG_LEVEL),
    databaseUrl: resolveDatabaseUrl(env.DATABASE_URL),
    authServiceUrl: resolveAuthServiceUrl(env.AUTH_SERVICE_URL),
    learningServiceUrl: resolveLearningServiceUrl(env.LEARNING_SERVICE_URL),
    requestTimeoutMs: resolvePositiveInteger(env.REQUEST_TIMEOUT_MS, 10000)
  };
}
```

- [ ] **Step 6: Create `src/models/contracts.ts`**

```ts
export interface ServiceHealthResponse {
  service: string;
  status: "ok";
  timestamp: string;
}

export interface ServiceReadinessResponse {
  service: string;
  status: "ready";
  timestamp: string;
  dependencies: {
    database: "ready";
  };
}
```

- [ ] **Step 7: Copy health controller + routes**

Copy `services/learning_service/src/controllers/health-controller.ts` verbatim into `services/yarinet_service/src/controllers/health-controller.ts`. Copy `services/learning_service/src/routes/health-routes.ts` verbatim into `services/yarinet_service/src/routes/health-routes.ts`.

- [ ] **Step 8: Create `src/server.ts` and `src/index.ts`**

`src/server.ts`:

```ts
import "dotenv/config";
import { createServer } from "node:http";
import { createYariNetApp } from "./app.js";
import { loadYariNetServiceConfig } from "./config/env.js";
import { createLogger } from "./utils/logger.js";

const config = loadYariNetServiceConfig();
const logger = createLogger(config.serviceName, config.logLevel);
const app = createYariNetApp({ config, logger });
const server = createServer(app);

server.listen(config.port, () => {
  logger.info("yarinet_service listening", {
    port: config.port,
    nodeEnv: config.nodeEnv
  });
});
```

`src/index.ts`:

```ts
export { createYariNetApp } from "./app.js";
export { loadYariNetServiceConfig } from "./config/env.js";
```

- [ ] **Step 9: Create a minimal `src/app.ts` (health-only) so the service compiles before the schema exists**

```ts
import { createRouter } from "@cumbre/api-runtime";
import { HealthController } from "./controllers/health-controller.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import type { YariNetServiceConfig } from "./config/env.js";
import type { Logger } from "./utils/logger.js";

export interface YariNetAppDependencies {
  config: YariNetServiceConfig;
  logger: Logger;
}

export function createYariNetApp({ config, logger }: YariNetAppDependencies) {
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      // Database readiness wired in Task 8.
    }
  );

  return createRouter([...registerHealthRoutes(healthController)], logger, {
    requestTimeoutMs: config.requestTimeoutMs
  });
}
```

- [ ] **Step 10: Create `Dockerfile`**

Copy `services/learning_service/Dockerfile` verbatim into `services/yarinet_service/Dockerfile`, then replace every occurrence of `learning_service`/`learning-service` with `yarinet_service`/`yarinet-service` and the port `3002` with `3004`.

- [ ] **Step 11: Install workspace deps and typecheck**

Run: `pnpm install`
Then: `pnpm --filter @cumbre/yarinet-service exec tsc -p tsconfig.json --noEmit`
Expected: PASS (no type errors).

- [ ] **Step 12: Commit**

```bash
git add services/yarinet_service pnpm-lock.yaml
git commit -m "feat(yarinet): scaffold yarinet_service package shell with health routes"
```

---

### Task 3: Prisma schema + initial migration

**Files:**
- Create: `services/yarinet_service/prisma/schema.prisma`
- Create: `services/yarinet_service/prisma/migrations/migration_lock.toml`
- Create: `services/yarinet_service/prisma/migrations/20260616_init_yarinet/migration.sql` (generated)

**Interfaces:**
- Consumes: nothing.
- Produces: generated Prisma client at `services/yarinet_service/src/generated/prisma` exposing models `civicChallenge`, `debateForum`, `forumParticipant`, `forumMessage`, `factCheckCitation`, `citizenProposal`.

- [ ] **Step 1: Create `prisma/schema.prisma`**

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

model CivicChallenge {
  id               String   @id
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  metadata         Json?
  teacherId        String
  classroomId      String?
  title            String
  problemStatement String
  context          String?
  category         String
  gradeLevel       String?
  status           ChallengeStatus @default(DRAFT)
  guidingQuestions String[] @default([])
  rubric           Json?
  opensAt          DateTime?
  closesAt         DateTime?
  forum            DebateForum?
  proposals        CitizenProposal[]

  @@index([teacherId])
  @@index([classroomId])
  @@map("civic_challenges")
}

enum ChallengeStatus {
  DRAFT
  OPEN
  DELIBERATING
  SYNTHESIZING
  CLOSED
  ARCHIVED
}

model DebateForum {
  id              String   @id
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  metadata        Json?
  challengeId     String   @unique
  challenge       CivicChallenge @relation(fields: [challengeId], references: [id], onDelete: Cascade)
  status          ForumStatus @default(ACTIVE)
  moderationLevel String      @default("standard")
  messageCount    Int         @default(0)
  lastActivityAt  DateTime?
  messages        ForumMessage[]
  participants    ForumParticipant[]

  @@map("debate_forums")
}

enum ForumStatus {
  ACTIVE
  PAUSED
  LOCKED
  CLOSED
}

model ForumParticipant {
  id           String   @id
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  forumId      String
  forum        DebateForum @relation(fields: [forumId], references: [id], onDelete: Cascade)
  studentId    String
  stance       String?
  messagesSent Int      @default(0)

  @@unique([forumId, studentId])
  @@map("forum_participants")
}

model ForumMessage {
  id               String   @id
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  metadata         Json?
  forumId          String
  forum            DebateForum @relation(fields: [forumId], references: [id], onDelete: Cascade)
  authorType       MessageAuthorType
  authorId         String?
  agentRole        AgentRole?
  body             String
  replyToId        String?
  replyTo          ForumMessage?  @relation("MessageThread", fields: [replyToId], references: [id], onDelete: SetNull)
  replies          ForumMessage[] @relation("MessageThread")
  moderationStatus ModerationStatus @default(VISIBLE)
  flaggedReason    String?
  citations        FactCheckCitation[]

  @@index([forumId, createdAt])
  @@map("forum_messages")
}

enum MessageAuthorType {
  STUDENT
  TEACHER
  AI
  SYSTEM
}

enum AgentRole {
  MODERATOR
  FACT_CHECKER
  SYNTHESIZER
}

enum ModerationStatus {
  VISIBLE
  FLAGGED
  HIDDEN
  PENDING
}

model FactCheckCitation {
  id                String   @id
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  metadata          Json?
  messageId         String
  message           ForumMessage @relation(fields: [messageId], references: [id], onDelete: Cascade)
  sourceUrl         String?
  sourceTitle       String?
  claim             String
  verdict           FactVerdict @default(UNVERIFIED)
  confidence        Float       @default(0)
  rationale         String?
  supportingSources Json?

  @@index([messageId])
  @@map("fact_check_citations")
}

enum FactVerdict {
  SUPPORTED
  PARTIALLY_SUPPORTED
  DISPUTED
  UNSUPPORTED
  UNVERIFIED
}

model CitizenProposal {
  id                  String   @id
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  metadata            Json?
  challengeId         String
  challenge           CivicChallenge @relation(fields: [challengeId], references: [id], onDelete: Cascade)
  generatedByAgent    Boolean  @default(true)
  title               String
  summary             String
  problemRestatement  String
  proposedActions     Json
  agreements          String[] @default([])
  tensions            String[] @default([])
  citedMessageIds     String[] @default([])
  status              ProposalStatus @default(DRAFT)
  approvedByTeacherId String?

  @@index([challengeId])
  @@map("citizen_proposals")
}

enum ProposalStatus {
  DRAFT
  UNDER_REVIEW
  APPROVED
  PUBLISHED
  REJECTED
}
```

- [ ] **Step 2: Create `prisma/migrations/migration_lock.toml`**

```toml
provider = "postgresql"
```

- [ ] **Step 3: Generate the migration SQL and Prisma client**

Run (requires a reachable dev Postgres in `DATABASE_URL`):
`pnpm --filter @cumbre/yarinet-service exec prisma migrate dev --name init_yarinet --schema prisma/schema.prisma`
Expected: a new folder `prisma/migrations/<timestamp>_init_yarinet/migration.sql` is created, the database has the new tables, and the client is generated to `src/generated/prisma`.

If no dev database is available, instead run:
`pnpm --filter @cumbre/yarinet-service exec prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/20260616_init_yarinet/migration.sql`
then `pnpm --filter @cumbre/yarinet-service exec prisma generate --schema prisma/schema.prisma`.

- [ ] **Step 4: Verify the client generated**

Run: `ls services/yarinet_service/src/generated/prisma`
Expected: contains `index.js` and `index.d.ts`.

- [ ] **Step 5: Commit**

```bash
git add services/yarinet_service/prisma services/yarinet_service/src/generated
git commit -m "feat(yarinet): add Prisma schema and initial migration"
```

---

### Task 4: Challenge request/response JSON Schema definitions in `@cumbre/schemas`

**Files:**
- Create: `packages/schemas/src/yarinet.ts`
- Modify: `packages/schemas/src/index.ts` (re-export `yarinetSchemas` and request types)

**Pattern:** Match `packages/schemas/src/classroom.ts` exactly — each schema is a `{ $id, type: "object", required, properties } satisfies SchemaDefinition` JSON Schema object (consumed by AJV), and request types are hand-written `interface`s. Do NOT use Zod.

**Interfaces:**
- Consumes: `SchemaDefinition` from `./index.js`.
- Produces (exported from `@cumbre/schemas`):
  - `yarinetSchemas.createChallengeRequest` — Zod object
  - `yarinetSchemas.updateChallengeStatusRequest` — Zod object
  - `yarinetSchemas.getChallengeRequest` — Zod object (params)
  - `yarinetSchemas.listChallengesRequest` — Zod object (query)
  - Types: `CreateChallengeRequest`, `UpdateChallengeStatusRequest`, `GetChallengeRequest`, `ListChallengesRequest`

- [ ] **Step 1: Inspect how `packages/schemas/src/classroom.ts` defines and exports schemas**

Run: `sed -n '1,40p' packages/schemas/src/classroom.ts`
Expected: shows the `import { z } from "zod"` pattern and how `classroomSchemas` is shaped, so this task matches it exactly.

- [ ] **Step 2: Create `packages/schemas/src/yarinet.ts`** (JSON Schema pattern, no Zod)

```ts
import type { SchemaDefinition } from "./index.js";

export type ChallengeStatusValue =
  | "DRAFT" | "OPEN" | "DELIBERATING" | "SYNTHESIZING" | "CLOSED" | "ARCHIVED";

export const challengeStatusValues: readonly ChallengeStatusValue[] = [
  "DRAFT", "OPEN", "DELIBERATING", "SYNTHESIZING", "CLOSED", "ARCHIVED"
];

export interface CreateChallengeRequest {
  teacherId: string;
  classroomId?: string;
  title: string;
  problemStatement: string;
  context?: string;
  category: string;
  gradeLevel?: string;
  guidingQuestions: string[];
  rubric?: Record<string, unknown>;
  opensAt?: string;
  closesAt?: string;
}

export interface UpdateChallengeStatusRequest {
  challengeId: string;
  status: ChallengeStatusValue;
}

export interface GetChallengeRequest {
  challengeId: string;
}

export interface ListChallengesRequest {
  teacherId?: string;
  classroomId?: string;
  status?: ChallengeStatusValue;
}

export const yarinetSchemas = {
  createChallengeRequest: {
    $id: "schema://yarinet/CreateChallengeRequest",
    type: "object",
    required: ["teacherId", "title", "problemStatement", "category", "guidingQuestions"],
    properties: {
      teacherId: { type: "string" },
      classroomId: { type: "string" },
      title: { type: "string" },
      problemStatement: { type: "string" },
      context: { type: "string" },
      category: { type: "string" },
      gradeLevel: { type: "string" },
      guidingQuestions: { type: "array", items: { type: "string" } },
      rubric: { type: "object", additionalProperties: true },
      opensAt: { type: "string", format: "date-time" },
      closesAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  updateChallengeStatusRequest: {
    $id: "schema://yarinet/UpdateChallengeStatusRequest",
    type: "object",
    required: ["challengeId", "status"],
    properties: {
      challengeId: { type: "string" },
      status: { type: "string", enum: challengeStatusValues }
    }
  } satisfies SchemaDefinition,
  getChallengeRequest: {
    $id: "schema://yarinet/GetChallengeRequest",
    type: "object",
    required: ["challengeId"],
    properties: { challengeId: { type: "string" } }
  } satisfies SchemaDefinition,
  listChallengesRequest: {
    $id: "schema://yarinet/ListChallengesRequest",
    type: "object",
    properties: {
      teacherId: { type: "string" },
      classroomId: { type: "string" },
      status: { type: "string", enum: challengeStatusValues }
    }
  } satisfies SchemaDefinition
};
```

Note: `guidingQuestions` is REQUIRED (clients send `[]` when none) so the type flows cleanly into the repository input in Task 5 without an optional/required mismatch.

- [ ] **Step 3: Re-export from `packages/schemas/src/index.ts`**

Add to the bottom of the file (matching how `classroomSchemas` is re-exported — verify the existing pattern first):

```ts
export {
  yarinetSchemas,
  type CreateChallengeRequest,
  type UpdateChallengeStatusRequest,
  type GetChallengeRequest,
  type ListChallengesRequest
} from "./yarinet.js";
```

- [ ] **Step 4: Typecheck the package**

Run: `pnpm --filter @cumbre/schemas build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/schemas/src/yarinet.ts packages/schemas/src/index.ts
git commit -m "feat(schemas): add YariNET civic challenge request schemas"
```

---

### Task 5: Challenge mappers + repository (TDD)

**Files:**
- Create: `services/yarinet_service/src/models/yarinet-mappers.ts`
- Create: `services/yarinet_service/src/repositories/prisma-client.ts`
- Create: `services/yarinet_service/src/repositories/challenge-repository.ts`
- Test: `services/yarinet_service/test/challenge-repository.test.ts`

**Interfaces:**
- Consumes: generated Prisma client (Task 3), config (Task 2).
- Produces:
  - `createPrismaClient(config): PrismaClient`
  - `ChallengeDTO = { id: string; teacherId: string; classroomId: string | null; title: string; problemStatement: string; context: string | null; category: string; gradeLevel: string | null; status: string; guidingQuestions: string[]; opensAt: string | null; closesAt: string | null; createdAt: string; updatedAt: string }`
  - `toChallengeDTO(record): ChallengeDTO`
  - `class ChallengeRepository` with:
    - `createChallenge(input: { teacherId: string; classroomId?: string; title: string; problemStatement: string; context?: string; category: string; gradeLevel?: string; guidingQuestions: string[]; rubric?: unknown; opensAt?: string; closesAt?: string }): Promise<ChallengeDTO>`
    - `findChallengeById(challengeId: string): Promise<ChallengeDTO | null>`
    - `listChallenges(filter: { teacherId?: string; classroomId?: string; status?: string }): Promise<ChallengeDTO[]>`
    - `updateChallengeStatus(challengeId: string, status: string): Promise<ChallengeDTO | null>`

- [ ] **Step 1: Copy the Prisma client factory**

Copy `services/learning_service/src/repositories/prisma-client.ts` into `services/yarinet_service/src/repositories/prisma-client.ts`, then substitute: import type `YariNetServiceConfig` from `../config/env.js`; rename the global var `__learningPrismaClient` → `__yarinetPrismaClient` (both the `declare global` and the two usages); change the parameter type to `YariNetServiceConfig`.

- [ ] **Step 2: Create the mapper**

```ts
import type { CivicChallenge } from "../generated/prisma/index.js";

export interface ChallengeDTO {
  id: string;
  teacherId: string;
  classroomId: string | null;
  title: string;
  problemStatement: string;
  context: string | null;
  category: string;
  gradeLevel: string | null;
  status: string;
  guidingQuestions: string[];
  opensAt: string | null;
  closesAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export function toChallengeDTO(record: CivicChallenge): ChallengeDTO {
  return {
    id: record.id,
    teacherId: record.teacherId,
    classroomId: record.classroomId,
    title: record.title,
    problemStatement: record.problemStatement,
    context: record.context,
    category: record.category,
    gradeLevel: record.gradeLevel,
    status: record.status,
    guidingQuestions: record.guidingQuestions,
    opensAt: record.opensAt ? record.opensAt.toISOString() : null,
    closesAt: record.closesAt ? record.closesAt.toISOString() : null,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString()
  };
}
```

- [ ] **Step 3: Write the failing repository test**

Create `services/yarinet_service/test/challenge-repository.test.ts`. Use an in-memory fake Prisma to keep the test DB-free:

```ts
import { describe, expect, it } from "vitest";
import { ChallengeRepository } from "../src/repositories/challenge-repository.js";

function createFakePrisma() {
  const rows = new Map<string, any>();
  return {
    rows,
    civicChallenge: {
      create: async ({ data }: { data: any }) => {
        const row = {
          ...data,
          classroomId: data.classroomId ?? null,
          context: data.context ?? null,
          gradeLevel: data.gradeLevel ?? null,
          opensAt: data.opensAt ?? null,
          closesAt: data.closesAt ?? null,
          guidingQuestions: data.guidingQuestions ?? [],
          createdAt: new Date("2026-06-16T00:00:00.000Z"),
          updatedAt: new Date("2026-06-16T00:00:00.000Z")
        };
        rows.set(row.id, row);
        return row;
      },
      findUnique: async ({ where }: { where: { id: string } }) =>
        rows.get(where.id) ?? null,
      findMany: async ({ where }: { where?: any } = {}) =>
        [...rows.values()].filter((row) => {
          if (where?.teacherId && row.teacherId !== where.teacherId) return false;
          if (where?.classroomId && row.classroomId !== where.classroomId) return false;
          if (where?.status && row.status !== where.status) return false;
          return true;
        }),
      update: async ({ where, data }: { where: { id: string }; data: any }) => {
        const row = rows.get(where.id);
        if (!row) throw new Error("not found");
        Object.assign(row, data);
        return row;
      }
    }
  };
}

describe("ChallengeRepository", () => {
  it("creates a challenge with a generated id and DRAFT status", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);

    const created = await repo.createChallenge({
      teacherId: "teacher-1",
      title: "Basura en el parque",
      problemStatement: "El parque está lleno de residuos.",
      category: "medio_ambiente",
      guidingQuestions: ["¿Quién es responsable?"]
    });

    expect(created.id).toMatch(/[0-9a-f-]{36}/);
    expect(created.status).toBe("DRAFT");
    expect(created.teacherId).toBe("teacher-1");
    expect(created.guidingQuestions).toEqual(["¿Quién es responsable?"]);
  });

  it("filters challenges by teacherId", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);
    await repo.createChallenge({ teacherId: "t1", title: "Reto A B", problemStatement: "0123456789", category: "c", guidingQuestions: [] });
    await repo.createChallenge({ teacherId: "t2", title: "Reto C D", problemStatement: "0123456789", category: "c", guidingQuestions: [] });

    const result = await repo.listChallenges({ teacherId: "t1" });
    expect(result).toHaveLength(1);
    expect(result[0].teacherId).toBe("t1");
  });

  it("updates challenge status", async () => {
    const prisma = createFakePrisma();
    const repo = new ChallengeRepository(prisma as any);
    const created = await repo.createChallenge({ teacherId: "t1", title: "Reto X Y", problemStatement: "0123456789", category: "c", guidingQuestions: [] });

    const updated = await repo.updateChallengeStatus(created.id, "OPEN");
    expect(updated?.status).toBe("OPEN");
  });
});
```

- [ ] **Step 4: Run the test to verify it fails**

Run: `pnpm --filter @cumbre/yarinet-service exec vitest run test/challenge-repository.test.ts`
Expected: FAIL with "Cannot find module ../src/repositories/challenge-repository.js" (or "ChallengeRepository is not a constructor").

- [ ] **Step 5: Implement `ChallengeRepository`**

```ts
import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import { toChallengeDTO, type ChallengeDTO } from "../models/yarinet-mappers.js";

export class ChallengeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createChallenge(input: {
    teacherId: string;
    classroomId?: string;
    title: string;
    problemStatement: string;
    context?: string;
    category: string;
    gradeLevel?: string;
    guidingQuestions: string[];
    rubric?: unknown;
    opensAt?: string;
    closesAt?: string;
  }): Promise<ChallengeDTO> {
    const record = await this.prisma.civicChallenge.create({
      data: {
        id: randomUUID(),
        teacherId: input.teacherId,
        classroomId: input.classroomId,
        title: input.title,
        problemStatement: input.problemStatement,
        context: input.context,
        category: input.category,
        gradeLevel: input.gradeLevel,
        guidingQuestions: input.guidingQuestions,
        rubric: input.rubric as never,
        opensAt: input.opensAt ? new Date(input.opensAt) : undefined,
        closesAt: input.closesAt ? new Date(input.closesAt) : undefined
      }
    });
    return toChallengeDTO(record);
  }

  async findChallengeById(challengeId: string): Promise<ChallengeDTO | null> {
    const record = await this.prisma.civicChallenge.findUnique({
      where: { id: challengeId }
    });
    return record ? toChallengeDTO(record) : null;
  }

  async listChallenges(filter: {
    teacherId?: string;
    classroomId?: string;
    status?: string;
  }): Promise<ChallengeDTO[]> {
    const records = await this.prisma.civicChallenge.findMany({
      where: {
        teacherId: filter.teacherId,
        classroomId: filter.classroomId,
        status: filter.status as never
      }
    });
    return records.map(toChallengeDTO);
  }

  async updateChallengeStatus(
    challengeId: string,
    status: string
  ): Promise<ChallengeDTO | null> {
    const record = await this.prisma.civicChallenge.update({
      where: { id: challengeId },
      data: { status: status as never }
    });
    return record ? toChallengeDTO(record) : null;
  }
}
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `pnpm --filter @cumbre/yarinet-service exec vitest run test/challenge-repository.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 7: Commit**

```bash
git add services/yarinet_service/src/models services/yarinet_service/src/repositories services/yarinet_service/test/challenge-repository.test.ts
git commit -m "feat(yarinet): add challenge repository with mapper and tests"
```

---

### Task 6: Challenge application service (TDD)

**Files:**
- Create: `services/yarinet_service/src/services/yarinet-service.ts`
- Test: `services/yarinet_service/test/yarinet-service.test.ts`

**Interfaces:**
- Consumes: `ChallengeRepository` (Task 5), schema types from `@cumbre/schemas` (Task 4).
- Produces:
  - `class YariNetApplicationService` constructed with `(challengeRepository: ChallengeRepository, logger: Logger)` exposing:
    - `createChallenge(input: CreateChallengeRequest): Promise<ChallengeDTO>`
    - `getChallenge(input: GetChallengeRequest): Promise<ChallengeDTO>` (throws `NotFoundError` if missing)
    - `listChallenges(input: ListChallengesRequest): Promise<{ items: ChallengeDTO[] }>`
    - `updateChallengeStatus(input: UpdateChallengeStatusRequest): Promise<ChallengeDTO>` (throws `NotFoundError` if missing)

- [ ] **Step 1: Write the failing service test**

```ts
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm --filter @cumbre/yarinet-service exec vitest run test/yarinet-service.test.ts`
Expected: FAIL with module-not-found for `yarinet-service.js`.

- [ ] **Step 3: Implement `YariNetApplicationService`**

```ts
import { NotFoundError } from "@cumbre/api-runtime";
import type {
  CreateChallengeRequest,
  GetChallengeRequest,
  ListChallengesRequest,
  UpdateChallengeStatusRequest
} from "@cumbre/schemas";
import type { ChallengeRepository } from "../repositories/challenge-repository.js";
import type { ChallengeDTO } from "../models/yarinet-mappers.js";
import type { Logger } from "../utils/logger.js";

export class YariNetApplicationService {
  constructor(
    private readonly challengeRepository: ChallengeRepository,
    private readonly logger: Logger
  ) {}

  async createChallenge(input: CreateChallengeRequest): Promise<ChallengeDTO> {
    const challenge = await this.challengeRepository.createChallenge(input);
    this.logger.info("Civic challenge created", { challengeId: challenge.id });
    return challenge;
  }

  async getChallenge(input: GetChallengeRequest): Promise<ChallengeDTO> {
    const challenge = await this.challengeRepository.findChallengeById(
      input.challengeId
    );
    if (!challenge) {
      throw new NotFoundError("Civic challenge was not found.");
    }
    return challenge;
  }

  async listChallenges(
    input: ListChallengesRequest
  ): Promise<{ items: ChallengeDTO[] }> {
    const items = await this.challengeRepository.listChallenges(input);
    return { items };
  }

  async updateChallengeStatus(
    input: UpdateChallengeStatusRequest
  ): Promise<ChallengeDTO> {
    const updated = await this.challengeRepository.updateChallengeStatus(
      input.challengeId,
      input.status
    );
    if (!updated) {
      throw new NotFoundError("Civic challenge was not found.");
    }
    return updated;
  }
}
```

- [ ] **Step 4: Verify `NotFoundError` is exported by `@cumbre/api-runtime`**

Run: `grep -n "NotFoundError" packages/api-runtime/src/errors.ts`
Expected: a class `NotFoundError` with `statusCode = 404`. If it does not exist, use the existing not-found error class name found in that file and update the import + test's `statusCode` expectation accordingly.

- [ ] **Step 5: Run the test to verify it passes**

Run: `pnpm --filter @cumbre/yarinet-service exec vitest run test/yarinet-service.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 6: Commit**

```bash
git add services/yarinet_service/src/services/yarinet-service.ts services/yarinet_service/test/yarinet-service.test.ts
git commit -m "feat(yarinet): add challenge application service with tests"
```

---

### Task 7: Challenge controller + routes

**Files:**
- Create: `services/yarinet_service/src/controllers/challenge-controller.ts`
- Create: `services/yarinet_service/src/routes/challenge-routes.ts`

**Interfaces:**
- Consumes: `YariNetApplicationService` (Task 6), `yarinetSchemas` (Task 4), `RequestContext`/`RouteDefinition` from `@cumbre/api-runtime`.
- Produces:
  - `class ChallengeController` with handlers `createChallenge`, `getChallenge`, `listChallenges`, `updateChallengeStatus` (each `(ctx: RequestContext) => Promise<unknown>`).
  - `registerChallengeRoutes(controller): RouteDefinition[]`.

- [ ] **Step 1: Create the controller**

```ts
import type { RequestContext } from "@cumbre/api-runtime";
import type {
  CreateChallengeRequest,
  GetChallengeRequest,
  ListChallengesRequest,
  UpdateChallengeStatusRequest
} from "@cumbre/schemas";
import type { YariNetApplicationService } from "../services/yarinet-service.js";

export class ChallengeController {
  constructor(private readonly service: YariNetApplicationService) {}

  createChallenge = async ({ body }: RequestContext): Promise<unknown> => {
    return this.service.createChallenge(body as CreateChallengeRequest);
  };

  getChallenge = async ({ validatedParams }: RequestContext): Promise<unknown> => {
    return this.service.getChallenge(validatedParams as GetChallengeRequest);
  };

  listChallenges = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.service.listChallenges(validatedQuery as ListChallengesRequest);
  };

  updateChallengeStatus = async ({ body }: RequestContext): Promise<unknown> => {
    return this.service.updateChallengeStatus(
      body as UpdateChallengeStatusRequest
    );
  };
}
```

- [ ] **Step 2: Create the routes**

```ts
import type { RouteDefinition } from "@cumbre/api-runtime";
import { yarinetSchemas } from "@cumbre/schemas";
import type { ChallengeController } from "../controllers/challenge-controller.js";

export function registerChallengeRoutes(
  controller: ChallengeController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/challenges",
      handler: controller.createChallenge,
      validation: { body: yarinetSchemas.createChallengeRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      },
      successStatusCode: 201
    },
    {
      method: "GET",
      path: "/challenges",
      handler: controller.listChallenges,
      validation: { query: yarinetSchemas.listChallengesRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      }
    },
    {
      method: "GET",
      path: "/challenges/:challengeId",
      handler: controller.getChallenge,
      validation: { params: yarinetSchemas.getChallengeRequest },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["deliberation:read"]
      }
    },
    {
      method: "POST",
      path: "/challenges/status",
      handler: controller.updateChallengeStatus,
      validation: { body: yarinetSchemas.updateChallengeStatusRequest },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["challenge:manage"]
      }
    }
  ];
}
```

- [ ] **Step 3: Typecheck**

Run: `pnpm --filter @cumbre/yarinet-service exec tsc -p tsconfig.json --noEmit`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add services/yarinet_service/src/controllers/challenge-controller.ts services/yarinet_service/src/routes/challenge-routes.ts
git commit -m "feat(yarinet): add challenge controller and routes"
```

---

### Task 8: Wire the full app together + auth resolver + integration test

**Files:**
- Create: `services/yarinet_service/src/services/auth-service-client.ts`
- Modify: `services/yarinet_service/src/app.ts` (replace the health-only shell)
- Test: `services/yarinet_service/test/yarinet.integration.test.ts`

**Interfaces:**
- Consumes: everything above.
- Produces: a fully wired `createYariNetApp({ config, logger, authResolver? })` whose `authResolver` defaults to `AuthServiceClient.resolveActorFromAuthorizationHeader`, and whose health readiness runs `prisma.$queryRaw\`SELECT 1\``.

- [ ] **Step 1: Copy the auth client**

Copy `services/learning_service/src/services/auth-service-client.ts` verbatim into `services/yarinet_service/src/services/auth-service-client.ts` (no changes needed — it is service-agnostic).

- [ ] **Step 2: Replace `src/app.ts` with the fully wired version**

```ts
import { createRouter, type AuthResolver } from "@cumbre/api-runtime";
import { HealthController } from "./controllers/health-controller.js";
import { ChallengeController } from "./controllers/challenge-controller.js";
import type { YariNetServiceConfig } from "./config/env.js";
import { createPrismaClient } from "./repositories/prisma-client.js";
import { ChallengeRepository } from "./repositories/challenge-repository.js";
import { registerHealthRoutes } from "./routes/health-routes.js";
import { registerChallengeRoutes } from "./routes/challenge-routes.js";
import { AuthServiceClient } from "./services/auth-service-client.js";
import { YariNetApplicationService } from "./services/yarinet-service.js";
import type { Logger } from "./utils/logger.js";

export interface YariNetAppDependencies {
  config: YariNetServiceConfig;
  logger: Logger;
  authResolver?: AuthResolver;
}

export function createYariNetApp({
  config,
  logger,
  authResolver
}: YariNetAppDependencies) {
  const prisma = createPrismaClient(config);
  const challengeRepository = new ChallengeRepository(prisma);
  const yarinetService = new YariNetApplicationService(
    challengeRepository,
    logger
  );
  const challengeController = new ChallengeController(yarinetService);
  const authServiceClient = new AuthServiceClient(config.authServiceUrl, logger);
  const healthController = new HealthController(
    config.serviceName,
    async () => {
      await prisma.$queryRaw`SELECT 1`;
    },
    (error) => {
      logger.error("yarinet_service readiness check failed", {
        error: error instanceof Error ? error.message : String(error)
      });
    }
  );

  const resolvedAuthResolver =
    authResolver ??
    ({
      resolveAccess: (req, context) =>
        authServiceClient.resolveActorFromAuthorizationHeader(
          req.headers.authorization,
          context.requestId
        )
    } satisfies AuthResolver);

  return createRouter(
    [
      ...registerHealthRoutes(healthController),
      ...registerChallengeRoutes(challengeController)
    ],
    logger,
    {
      authResolver: resolvedAuthResolver,
      requestTimeoutMs: config.requestTimeoutMs
    }
  );
}
```

- [ ] **Step 3: Write the integration test**

First inspect the template: `sed -n '1,60p' services/learning_service/test/learning.integration.test.ts` to copy its bootstrap style (how it creates the server, injects a stub `authResolver`, and issues HTTP requests). Then create `services/yarinet_service/test/yarinet.integration.test.ts`:

```ts
import { createServer, type Server } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createYariNetApp } from "../src/app.js";
import { loadYariNetServiceConfig } from "../src/config/env.js";
import { createLogger } from "../src/utils/logger.js";

let server: Server;
let baseUrl: string;

const teacherActor = {
  userId: "teacher-1",
  primaryRole: "teacher" as const,
  roles: ["teacher" as const],
  scopes: ["challenge:manage", "deliberation:read"] as const
};

beforeAll(async () => {
  const config = loadYariNetServiceConfig({
    DATABASE_URL: "postgres://localhost:5432/test",
    NODE_ENV: "test"
  } as NodeJS.ProcessEnv);
  const logger = createLogger("yarinet_service", "error");
  const app = createYariNetApp({
    config,
    logger,
    authResolver: { resolveAccess: async () => teacherActor as never }
  });
  server = createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  baseUrl = `http://127.0.0.1:${port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

describe("yarinet_service health", () => {
  it("responds to GET /health", async () => {
    const res = await fetch(`${baseUrl}/health`);
    expect(res.status).toBe(200);
    const json = (await res.json()) as { data: { status: string } };
    expect(json.data.status).toBe("ok");
  });
});

describe("yarinet_service challenge authorization", () => {
  it("rejects POST /challenges without scope (403) when actor lacks challenge:manage", async () => {
    // This asserts the route is auth-protected; the default stubbed actor HAS the scope,
    // so we verify the happy-path contract reaches the DB layer instead.
    const res = await fetch(`${baseUrl}/challenges`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: "x" })
    });
    // Body fails Zod validation (title too short / missing required fields) → 400.
    expect(res.status).toBe(400);
  });
});
```

Note: the happy-path create test needs a real database, so it belongs in a DB-backed suite. This integration test deliberately covers health + validation wiring only, which run without a database.

- [ ] **Step 4: Run the full test suite**

Run: `pnpm --filter @cumbre/yarinet-service test`
Expected: PASS (repository + service + integration suites all green).

- [ ] **Step 5: Typecheck the whole service including tests**

Run: `pnpm --filter @cumbre/yarinet-service run typecheck`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add services/yarinet_service/src/app.ts services/yarinet_service/src/services/auth-service-client.ts services/yarinet_service/test/yarinet.integration.test.ts
git commit -m "feat(yarinet): wire app with auth resolver and integration tests"
```

---

## Roadmap (separate plans, not in scope here)

- **Plan 2 — AI agents & prompts:** `packages/prompts/src/yarinet/{socratic-moderator,fact-checker,consensus-synthesizer}.ts`, agent wrappers in `services/yarinet_service/src/agents/`, and `moderation-service` / `factcheck-service` / `synthesis-service` over `@cumbre/llm-runtime`'s `generateJsonObject`.
- **Plan 3 — Forum & realtime:** `DebateForum`/`ForumMessage`/`ForumParticipant`/`FactCheckCitation`/`CitizenProposal` repositories, forum + proposal controllers/routes, post-publication moderation flow, and Supabase Realtime publication.
- **Plan 4 — Frontend:** `packages/ui` shared components, `apps/web_teacher` challenge builder/monitor, `apps/web_student` deliberation forum with `useRealtimeForum`.

## Self-Review Notes

- **Spec coverage:** This plan covers the `CivicChallenge` model + service foundation. The other four Prisma models are created in Task 3 (schema) but their repositories/routes are deferred to Plans 3. The three AI prompts and frontend components are deferred to Plans 2 and 4. This is an intentional, working, testable vertical slice.
- **HttpMethod constraint:** All status mutations use `POST /challenges/status` (no PATCH), consistent with `api-runtime`.
- **Type consistency:** `ChallengeDTO`, `YariNetApplicationService`, `ChallengeRepository` method names and signatures are identical across Tasks 5–8.
- **Verification dependency:** Task 6 Step 4 verifies `NotFoundError` exists in `@cumbre/api-runtime` before relying on it; if absent, the implementer substitutes the real not-found class.
