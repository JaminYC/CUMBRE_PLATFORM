# auth_service

Foundational identity service for the CUMBRE platform.

## Scope

- Signup and login entrypoints
- Session refresh handling
- Current user lookup
- Access-token validation for downstream services
- Logout and session revocation
- Health and service bootstrap concerns

## Notes

- Uses `@cumbre/types`, `@cumbre/schemas`, and `@cumbre/sdk` as the shared contract source of truth
- Uses Prisma as the persistence layer for `User` plus server-backed `AuthSession` records
- Issues opaque access and refresh tokens instead of placeholder tokens
- Acts as the authorization validator for `learning_service` and `content_service`
