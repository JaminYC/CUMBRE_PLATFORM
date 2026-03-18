# learning_service

Foundational learning orchestration service for the CUMBRE platform.

## Scope

- Learning session start and update
- Learning progress lookup
- Learning path lookup
- Health and bootstrap concerns
- Protected teacher overview route

## Notes

- Uses `@cumbre/types`, `@cumbre/schemas`, and `@cumbre/sdk` as shared contracts
- Uses Prisma as the persistence layer for `LearningPath`, `LearningSession`, and `MasteryState`
- Uses `@cumbre/adaptive-engine` and `@cumbre/recommendation-engine` for explainable mastery and next-step generation
- Reads recent tutor activity through `@cumbre/tutor-engine` to enrich adaptive signals without duplicating tutor persistence
- Phase 10 adds bearer-token validation via `auth_service`, request correlation IDs, and `/ready` diagnostics
