# content_service

Foundational content discovery and delivery service for the CUMBRE platform.

## Scope

- Topic listing and lookup
- Lesson listing
- Search placeholder for content discovery
- Health and service bootstrap concerns
- Protected admin overview route

## Notes

- Uses shared contracts from `@cumbre/types`, `@cumbre/schemas`, and `@cumbre/sdk`
- Uses Prisma as the persistence layer for `Topic`, `Lesson`, and `ContentItem`
- Search stays intentionally simple and PostgreSQL-backed for now
- Phase 10 adds bearer-token validation via `auth_service`, request correlation IDs, and `/ready` diagnostics
