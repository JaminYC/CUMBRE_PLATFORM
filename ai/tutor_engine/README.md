# tutor_engine

Conversational tutoring module for guided explanations, hints, and pedagogical support.

Phase 6.5 turns the tutor into a persisted module with:

- PostgreSQL persistence for tutor sessions and turns through Prisma
- lesson-aware grounding from lesson, topic, path, and related lessons
- a transcript retrieval path for continuity after refresh
- a streaming-ready response generator consumed through the `web_student` BFF

The engine still stays intentionally simple: no vector database, no long-term memory orchestration, and no separate AI service runtime yet.
