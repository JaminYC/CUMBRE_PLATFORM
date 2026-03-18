# retrieval_engine

Hybrid retrieval module for CUMBRE's advanced AI baseline.

This package intentionally avoids a heavy vector stack in Phase 11. Instead it provides:

- retrieval candidate assembly from lessons, topics, content items, graph signals, tutor history, and adaptive signals
- explainable ranking and selection
- prompt assembly helpers for tutor grounding
- adaptive retrieval context that downstream engines can consume without hiding the rationale

The design is RAG-ready: retrieval, ranking, prompt assembly, and response generation stay separated so the platform can later swap in embeddings or a vector database without rewriting tutor or adaptive flows.
