# llm-runtime

Shared OpenAI-compatible LLM provider helpers for the CUMBRE AI modules.

## Purpose

This package centralizes:

- root `.env` loading into `process.env`
- OpenAI-compatible credential resolution
- safe typed provider errors
- grounded JSON-generation helpers with fallback-aware metadata

The AI modules still decide how to retrieve context and how to build their own fallback behavior. `@cumbre/llm-runtime` only handles provider access and safe response parsing.
