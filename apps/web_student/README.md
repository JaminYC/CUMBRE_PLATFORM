# web_student

Student-facing Next.js application for the first learner experience in CUMBRE.

## Why This Structure

This app uses Next.js App Router plus a lightweight frontend BFF layer.

- `app/` holds routes, layouts, and server-side API handlers
- `components/` contains reusable UI building blocks
- `features/` groups student-facing flows like auth, dashboard, learning, and progress
- `lib/` contains shared frontend infrastructure such as HTTP helpers and env resolution
- `services/` isolates backend integration so screens stay aligned with shared contracts
- `hooks/` holds client-side state and async orchestration helpers

The structure keeps backend contracts close to the UI while staying modular enough for future tutor, recommendation, and richer personalization features.

Phase 5.5 also adds shared UI state primitives, route-level breadcrumbs, and browser-side session persistence so the student journey survives refreshes and keeps a coherent "resume learning" path before the AI tutor exists.

Phase 6 layers the first tutor baseline on top of the lesson detail flow. The frontend keeps the tutor UI in `features/tutor`, the App Router BFF owns context fetching and API shape, and `@cumbre/tutor-engine` generates lesson-grounded responses without introducing a separate AI service runtime yet.

Phase 6.5 hardens that tutor experience with transcript continuity, persisted tutor sessions, clearer response presentation, and a first streaming-capable path for free-question interactions.

Phase 10 moves authentication out of browser storage and into signed `httpOnly` cookies owned by the App Router BFF. The student app now restores server-validated identity from `/api/auth/session`, protects lesson/dashboard routes before render, and forwards bearer access only from the server.

## Local Run

```bash
corepack pnpm install
Copy-Item .env.local.example .env.local
corepack pnpm dev:student
```

The app expects the backend services to be available on:

- `http://localhost:3001`
- `http://localhost:3002`
- `http://localhost:3003`
