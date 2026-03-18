# @cumbre/types

Canonical platform domain model for CUMBRE.

This package defines the shared language used by apps, services, and AI modules. It contains platform-level entities such as users, role profiles, learning objects, mastery states, recommendations, tutor sessions, notifications, and knowledge graph structures.

Design constraints:

- No business logic
- No persistence concerns
- No service-local duplication
- Extensible string unions where future domains may expand
