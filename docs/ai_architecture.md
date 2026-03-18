# CUMBRE AI Architecture

## 1. AI Objectives

adaptive learning
AI tutoring
knowledge discovery
learning path optimization

## 2. AI Subsystems

Tutor Engine
Retrieval System
Adaptive Learning Engine
Evaluation System

## 3. LLM Orchestration

model routing
prompt templates
context management
session memory

## 4. Retrieval Architecture

RAG pipeline
knowledge graph integration
vector database
document ingestion

Phase 11 baseline:
- hybrid retrieval over lesson summaries, topic summaries, content items, graph signals, tutor history, and adaptive signals
- explainable ranking and context selection inside `ai/retrieval_engine`
- prompt assembly separated from response generation so future LLM/RAG upgrades stay modular
- tutor-turn persistence of retrieved context for continuity and auditability

## 5. Adaptive Learning

student model
knowledge mastery detection
difficulty adjustment
learning recommendations

Adaptive enrichment baseline:
- retrieval-aware mastery interpretation
- retrieval-backed recommendation rationale
- progress + tutor + graph signals consolidated into explainable adaptive context
