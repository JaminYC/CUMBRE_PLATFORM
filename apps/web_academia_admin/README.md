# web_admin

Admin-facing Next.js workspace for platform oversight, graph management, and content integrity in CUMBRE.

## Why This Structure

The app mirrors the same App Router + lightweight BFF structure used in `web_student`.

- `app/` owns routes and server-side API adapters
- `components/` contains reusable operational UI
- `features/` groups admin-facing monitoring and management views
- `lib/` holds environment and HTTP helpers
- `services/` isolates backend integrations

This baseline is intentionally split into:

- `/dashboard` for platform-level counts, integrity issues, and coverage gaps
- `/management` for creating topics, lessons, concepts, edges, and running baseline integrity fixes

That keeps admin work operational and explainable without jumping to a full authoring suite or graph editor.

Phase 10 adds the operational hardening layer:

- login is backed by `auth_service`
- admin access is enforced with signed `httpOnly` session cookies
- `/dashboard` and `/management` are protected before render
- the BFF forwards authenticated requests to `content_service`
