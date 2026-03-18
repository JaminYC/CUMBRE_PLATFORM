CREATE TABLE "knowledge_nodes" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "nodeType" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "sourceEntityType" TEXT,
  "sourceEntityId" TEXT,
  CONSTRAINT "knowledge_nodes_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "knowledge_edges" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "sourceNodeId" TEXT NOT NULL,
  "targetNodeId" TEXT NOT NULL,
  "edgeType" TEXT NOT NULL,
  "label" TEXT,
  "weight" DOUBLE PRECISION,
  "directed" BOOLEAN NOT NULL DEFAULT TRUE,
  CONSTRAINT "knowledge_edges_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "knowledge_nodes_nodeType_sourceEntityType_sourceEntityId_idx"
  ON "knowledge_nodes"("nodeType", "sourceEntityType", "sourceEntityId");

CREATE INDEX "knowledge_edges_sourceNodeId_edgeType_idx"
  ON "knowledge_edges"("sourceNodeId", "edgeType");

CREATE INDEX "knowledge_edges_targetNodeId_edgeType_idx"
  ON "knowledge_edges"("targetNodeId", "edgeType");
