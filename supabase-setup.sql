-- ============================================================
-- CUMBRE PLATFORM — Full DB Setup (safe, idempotent)
-- ============================================================

-- AUTH SERVICE
CREATE TABLE IF NOT EXISTS auth_users (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  metadata JSONB,
  "primaryRole" TEXT NOT NULL,
  roles TEXT[] NOT NULL,
  status TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "givenName" TEXT,
  "familyName" TEXT,
  email TEXT UNIQUE,
  "avatarUrl" TEXT,
  locale TEXT,
  "preferredLanguage" TEXT,
  timezone TEXT,
  "externalRef" TEXT,
  "credentialHash" TEXT
);

CREATE TABLE IF NOT EXISTS auth_sessions (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "userId" TEXT NOT NULL REFERENCES auth_users(id) ON DELETE CASCADE,
  "primaryRole" TEXT NOT NULL,
  roles TEXT[] NOT NULL,
  "accessTokenHash" TEXT NOT NULL UNIQUE,
  "refreshTokenHash" TEXT NOT NULL UNIQUE,
  "accessTokenExpiresAt" TIMESTAMPTZ NOT NULL,
  "refreshTokenExpiresAt" TIMESTAMPTZ NOT NULL,
  "revokedAt" TIMESTAMPTZ,
  "lastUsedAt" TIMESTAMPTZ,
  "deviceId" TEXT,
  "userAgent" TEXT,
  "ipAddress" TEXT
);

-- LEARNING SERVICE
CREATE TABLE IF NOT EXISTS learning_paths (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS mastery_states (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "learnerId" TEXT NOT NULL,
  "learningPathId" TEXT NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
  "conceptId" TEXT,
  "masteryLevel" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "practiceCount" INTEGER NOT NULL DEFAULT 0,
  "lastPracticedAt" TIMESTAMPTZ,
  metadata JSONB
);

-- CONTENT SERVICE
CREATE TABLE IF NOT EXISTS content_topics (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  "learningPathId" TEXT,
  "orderIndex" INTEGER NOT NULL DEFAULT 0,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS content_lessons (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  content TEXT,
  "topicId" TEXT NOT NULL REFERENCES content_topics(id) ON DELETE CASCADE,
  "orderIndex" INTEGER NOT NULL DEFAULT 0,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS knowledge_nodes (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  content TEXT,
  "lessonId" TEXT REFERENCES content_lessons(id) ON DELETE SET NULL,
  "topicId" TEXT REFERENCES content_topics(id) ON DELETE SET NULL,
  metadata JSONB
);

-- CONTENT GENERATOR SERVICE
CREATE TABLE IF NOT EXISTS generation_jobs (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "userId" TEXT NOT NULL,
  topic TEXT NOT NULL,
  "contentType" TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  "pdfUrl" TEXT,
  "podcastUrl" TEXT,
  "infographicUrl" TEXT,
  error TEXT,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS generation_limits (
  id TEXT PRIMARY KEY,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  role TEXT NOT NULL UNIQUE,
  "dailyLimit" INTEGER NOT NULL DEFAULT 3
);

-- Fix existing generation_limits if updatedAt has no default
ALTER TABLE generation_limits ALTER COLUMN "updatedAt" SET DEFAULT NOW();
ALTER TABLE generation_limits ALTER COLUMN "createdAt" SET DEFAULT NOW();

-- ============================================================
-- SEED DATA
-- ============================================================

-- Learning path
INSERT INTO learning_paths (id, title, description)
VALUES ('20000000-0000-0000-0000-000000000001', 'Ruta de Aprendizaje General', 'Ruta principal de la plataforma')
ON CONFLICT (id) DO NOTHING;

-- Generation limits (with explicit timestamps)
INSERT INTO generation_limits (id, role, "dailyLimit", "createdAt", "updatedAt") VALUES
  ('limit-student-001', 'student',       3,  NOW(), NOW()),
  ('limit-teacher-001', 'teacher',       10, NOW(), NOW()),
  ('limit-admin-001',   'administrator', -1, NOW(), NOW())
ON CONFLICT (role) DO NOTHING;

-- Demo topics
INSERT INTO content_topics (id, title, description, "learningPathId", "orderIndex") VALUES
  ('topic-0000-0001', 'Matemáticas', 'Álgebra, cálculo y estadística', '20000000-0000-0000-0000-000000000001', 1),
  ('topic-0000-0002', 'Ciencias',    'Física, química y biología',      '20000000-0000-0000-0000-000000000001', 2)
ON CONFLICT (id) DO NOTHING;

-- Demo users (password: placeholder — scrypt hash generated by auth_service)
-- We insert a known hash; the correct one will be set by the seed script
INSERT INTO auth_users (id, "displayName", email, "primaryRole", roles, status, locale, "preferredLanguage", timezone) VALUES
  ('10000000-0000-0000-0000-000000000001', 'Demo Student', 'student@example.com', 'student',       ARRAY['student'],       'active', 'es-PE', 'es', 'America/Lima'),
  ('10000000-0000-0000-0000-000000000002', 'Demo Teacher', 'teacher@example.com', 'teacher',       ARRAY['teacher'],       'active', 'es-PE', 'es', 'America/Lima'),
  ('10000000-0000-0000-0000-000000000003', 'Demo Admin',   'admin@example.com',   'administrator', ARRAY['administrator'], 'active', 'es-PE', 'es', 'America/Lima')
ON CONFLICT (id) DO NOTHING;

SELECT 'Setup complete!' as result;
