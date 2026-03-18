# Knowledge Graph

## Goal

Provide a structured, explainable relationship layer for concepts, prerequisites, lessons, and topics so adaptive logic and tutoring can reason beyond flat metadata.

## Ownership

- `content_service` owns persistence of the baseline knowledge graph
- the graph is stored relationally in PostgreSQL using:
  - `knowledge_nodes`
  - `knowledge_edges`
- `learning_service` consumes graph insight over HTTP for adaptive recommendations
- `web_student` and `ai/tutor_engine` consume graph-aware insight for explanations and review guidance

## Baseline Node Types

- `concept`
- `topic`
- `lesson`
- `skill`
- `resource`

## Baseline Edge Types

- `prerequisite_of`
- `part_of`
- `reinforces`
- `relates_to`

## Current Modeling Pattern

- concept -> topic via `part_of`
- lesson -> concept via `reinforces`
- concept -> concept via `prerequisite_of`
- concept <-> concept via `relates_to`

This supports:

- lesson-to-concept mapping
- topic-to-concept grouping
- prerequisite inference
- related concept discovery
- review-before-advance explanations

## Current Query Patterns

- for a lesson:
  - which concepts does it reinforce?
  - which prerequisite concepts feed into those concepts?
  - what related concepts help explain the lesson?
  - what is the likely missing prerequisite behind current struggle?
- for a topic:
  - which concepts belong to it?
  - which prerequisite concepts should be reviewed first?
  - which related concepts expand the topic map?

## Notes

- this is a baseline graph layer, not a dedicated graph database
- the design is intentionally explainable and lightweight
- future phases can add richer graph traversal, authoring, and retrieval support without changing the current shared contracts
