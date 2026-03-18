# @cumbre/app-auth

Shared cookie-signing and role-check helpers for the CUMBRE web apps.

## Why this package exists

`web_student`, `web_teacher`, and `web_admin` all need the same baseline session behavior:

- signed server-owned session cookies
- expiration checks
- role-aware route protection
- no auth secrets stored in browser JavaScript

This package keeps that logic in one place so the three apps stay consistent as authentication hardening evolves.
