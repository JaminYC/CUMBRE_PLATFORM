# app-runtime

Shared Next.js server-side runtime helpers for the CUMBRE role applications.

## Purpose

This package centralizes the web app concerns that were repeated across `web_student`, `web_teacher`, and `web_admin`:

- signed server-session helpers
- backend BFF request forwarding
- auth-service login/logout helpers
- standard app-side success/error envelopes
- shared locale context and message catalogs for Spanish-first UX

## Locale Support

- default locale: `es`
- future-ready locale model: `es | en`
- client entrypoint: `@cumbre/app-runtime/client`

The apps consume the locale provider from this package so UI copy can stay Spanish-first today without renaming any technical modules.

It keeps the role apps structurally separate while removing duplicated operational plumbing.
