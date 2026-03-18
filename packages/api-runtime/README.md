# @cumbre/api-runtime

Shared HTTP runtime helpers for CUMBRE services.

This package provides:

- Ajv-backed request validation
- Shared API error classes
- Standard success and error envelopes
- Lightweight route registration and request handling

Validation library choice:

- `Ajv` fits the existing schema-driven design because `packages/schemas` already uses JSON-schema-like definitions
- It has strong TypeScript support, low runtime overhead, and works well for body, query, and path validation
