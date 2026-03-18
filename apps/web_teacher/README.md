# web_teacher

Teacher-facing Next.js workspace for classroom visibility and baseline authoring in CUMBRE.

## Why This Structure

The app follows the same App Router + lightweight BFF pattern as `web_student`.

- `app/` owns routes and server-side API adapters
- `components/` contains reusable operational UI
- `features/` groups teacher-facing dashboard and authoring views
- `lib/` holds HTTP and environment helpers
- `services/` isolates backend integration from the UI

This baseline is intentionally split into two coherent surfaces:

- `/dashboard` for learner progress, adaptive guidance, tutor usage, and concept struggle patterns
- `/authoring` for lesson creation, content curation, concept mapping, and prerequisite review

The structure keeps operational analytics and content work in the same app while still preserving clean boundaries through the BFF routes and shared contracts.

Phase 10 adds role-aware protection on top of that structure:

- login is backed by `auth_service`
- the app stores a signed `httpOnly` teacher session cookie
- the dashboard and authoring workspace are protected before render
- the BFF forwards authenticated requests to `learning_service` and `content_service`
