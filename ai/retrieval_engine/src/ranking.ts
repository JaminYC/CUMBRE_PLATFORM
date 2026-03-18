import type {
  RetrievedContextBundle,
  RetrievedContextItem,
  RetrievedContextSourceType
} from "@cumbre/types";

export interface RetrievalCandidate {
  id: string;
  sourceType: RetrievedContextSourceType;
  title: string;
  content: string;
  rationale: string;
  entityType?: RetrievedContextItem["entityType"];
  entityId?: string;
  tags?: string[];
  sourceWeight: number;
}

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "about",
  "after",
  "before",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "the",
  "this",
  "to",
  "what",
  "why"
]);

export function rankCandidates(input: {
  query: string;
  strategy: RetrievedContextBundle["strategy"];
  explanation: string[];
  candidates: RetrievalCandidate[];
  limit?: number;
}) {
  const queryTokens = tokenize(input.query);
  const rankedCandidates = input.candidates
    .map((candidate) => ({
      candidate,
      score: scoreCandidate(candidate, queryTokens)
    }))
    .filter(({ candidate }) => candidate.content.trim().length > 0)
    .sort((left, right) => right.score - left.score);

  const items = selectDiverseItems(rankedCandidates, input.limit ?? 6);

  return {
    query: input.query,
    strategy: input.strategy,
    explanation: input.explanation,
    items
  } satisfies RetrievedContextBundle;
}

export function truncateContent(content: string, maxLength = 240) {
  const normalized = content.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 3).trimEnd()}...`;
}

function scoreCandidate(candidate: RetrievalCandidate, queryTokens: string[]) {
  const contentTokens = new Set(tokenize(`${candidate.title} ${candidate.content}`));
  const overlapCount = queryTokens.filter((token) => contentTokens.has(token)).length;
  const overlapScore = queryTokens.length > 0 ? overlapCount / queryTokens.length : 0;
  const tagBoost = (candidate.tags ?? []).some((tag) => queryTokens.includes(tag)) ? 0.08 : 0;

  return round(candidate.sourceWeight + overlapScore * 0.45 + tagBoost);
}

function selectDiverseItems(
  rankedCandidates: Array<{ candidate: RetrievalCandidate; score: number }>,
  limit: number
) {
  const sourceCounts = new Map<string, number>();
  const items: RetrievedContextItem[] = [];

  for (const { candidate, score } of rankedCandidates) {
    const sourceCount = sourceCounts.get(candidate.sourceType) ?? 0;

    if (sourceCount >= 2) {
      continue;
    }

    items.push({
      id: candidate.id,
      sourceType: candidate.sourceType,
      title: candidate.title,
      content: truncateContent(candidate.content),
      score,
      rationale: candidate.rationale,
      entityType: candidate.entityType,
      entityId: candidate.entityId,
      tags: candidate.tags
    });
    sourceCounts.set(candidate.sourceType, sourceCount + 1);

    if (items.length >= limit) {
      break;
    }
  }

  return items;
}

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token && !STOP_WORDS.has(token));
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
