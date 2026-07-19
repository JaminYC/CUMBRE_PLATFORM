# ============================================================
# CUMBRE PLATFORM — Start Everything
# Doble-click o: powershell -ExecutionPolicy Bypass -File start-cumbre.ps1
# ============================================================

$DB  = "postgresql://postgres.wdxipattsdafutberkzj:saminelsamin12@aws-0-us-west-2.pooler.supabase.com:6543/postgres"
$DIR = "postgresql://postgres:saminelsamin12@db.wdxipattsdafutberkzj.supabase.co:5432/postgres"
$OPENAI_KEY = "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"   # ← reemplaza con tu key real
$env:DATABASE_URL = $DB
$env:DIRECT_URL   = $DIR
$ROOT = "C:\Trabajo\CUMBRE_PLATFORM"
$PRISMA = "$ROOT\services\content_service\node_modules\.bin\prisma.cmd"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  CUMBRE PLATFORM — Starting up" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# ── 1. DB PUSH (schema combinado — todas las tablas) ─────────
Write-Host "[1/3] Syncing database schema..." -ForegroundColor Yellow
$env:PRISMA_SKIP_POSTINSTALL_GENERATE = "1"
& $PRISMA db push --schema "$ROOT\prisma-combined\schema.prisma" --accept-data-loss --skip-generate 2>&1 | Where-Object { $_ -match "sync|Done|Error|error|already" } | Select-Object -First 3
Write-Host "      DB schema OK" -ForegroundColor Green

# ── 2. SEED (idempotente — ON CONFLICT DO NOTHING) ───────────
Write-Host "[2/3] Seeding data..." -ForegroundColor Yellow

$seedScript = @'
import { randomBytes, scryptSync } from "node:crypto";
import { PrismaClient } from "./services/content_service/src/generated/prisma/index.js";
const prisma = new PrismaClient({ datasources: { db: { url: process.env.DIRECT_URL } } });
const q = (sql,...a) => prisma.$executeRawUnsafe(sql,...a);
function hash(p) { const s=randomBytes(16).toString("hex"); return `scrypt$${s}$${scryptSync(p,s,64).toString("hex")}`; }

// Learning path
await q(`INSERT INTO learning_paths(id,"createdAt","updatedAt",title,summary,status,"audienceRoles","topicIds","skillIds","lessonIds","projectIds") VALUES('20000000-0000-0000-0000-000000000001',NOW(),NOW(),'Ruta de Aprendizaje General','Ruta principal','active','{}','{}','{}','{}','{}') ON CONFLICT(id) DO NOTHING`);

// Generation limits
await q(`INSERT INTO generation_limits(id,"createdAt","updatedAt",role,"dailyLimit","isActive") VALUES('limit-student-001',NOW(),NOW(),'student',3,true),('limit-teacher-001',NOW(),NOW(),'teacher',10,true),('limit-admin-001',NOW(),NOW(),'administrator',-1,true) ON CONFLICT(role) DO NOTHING`);

// Auth users
const h = hash("placeholder");
for (const [id,name,email,role] of [
  ["10000000-0000-0000-0000-000000000001","Demo Student","student@example.com","student"],
  ["10000000-0000-0000-0000-000000000002","Demo Teacher","teacher@example.com","teacher"],
  ["10000000-0000-0000-0000-000000000003","Demo Admin","admin@example.com","administrator"],
]) {
  const existing = await prisma.$queryRawUnsafe(`SELECT id FROM auth_users WHERE email=$1`, email);
  if (existing.length === 0) {
    await q(`INSERT INTO auth_users(id,"createdAt","updatedAt","displayName",email,"primaryRole",roles,status,locale,"preferredLanguage",timezone,"credentialHash") VALUES($1,NOW(),NOW(),$2,$3,$4,ARRAY[$5]::text[],'active','es-PE','es','America/Lima',$6)`, id,name,email,role,role,h);
  }
}

await prisma.$disconnect();
'@

$seedScript | Out-File "$ROOT\seed-run.mjs" -Encoding utf8
node "$ROOT\seed-run.mjs" 2>&1 | Out-Null
Remove-Item "$ROOT\seed-run.mjs" -Force
Write-Host "      Seed OK" -ForegroundColor Green

# ── 3. LEVANTAR SERVICIOS ────────────────────────────────────
Write-Host "[3/3] Starting services..." -ForegroundColor Yellow

function Start-Service($name, $cmd, $dir) {
    $p = New-Object System.Diagnostics.ProcessStartInfo
    $p.FileName = "cmd.exe"
    $p.Arguments = "/k `"cd /d `"$dir`" && $cmd`""
    $p.WorkingDirectory = $dir
    $p.UseShellExecute = $true
    $p.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Normal
    [System.Diagnostics.Process]::Start($p) | Out-Null
    Write-Host "      Started: $name" -ForegroundColor Gray
}

# Python
Start-Service "NotebookLM (8881)" "C:\notebooklm-server\venv\Scripts\python.exe -m uvicorn server:app --host 0.0.0.0 --port 8881" "C:\notebooklm-server"
Start-Service "Kokoro TTS (8880)" "C:\kokoro-server\venv\Scripts\python.exe -m uvicorn server:app --host 0.0.0.0 --port 8880" "C:\kokoro-server"

# Node — set env vars inline so each CMD window tiene las URLs
$envPrefix = "set DATABASE_URL=$DB && set DIRECT_URL=$DIR"
foreach ($svc in @("auth_service","learning_service","content_service")) {
    $tsxSvc = "$ROOT\services\$svc\node_modules\.bin\tsx.cmd"
    $svcDir = "$ROOT\services\$svc"
    Start-Service $svc "$envPrefix && `"$tsxSvc`" src/server.ts" $svcDir
}

# content_generator_service — también pasa OPENAI_API_KEY
$cgDir = "$ROOT\services\content_generator_service"
$cgTsx = "$cgDir\node_modules\.bin\tsx.cmd"
$cgEnv = "$envPrefix && set OPENAI_API_KEY=$OPENAI_KEY"
Start-Service "content_generator_service" "$cgEnv && `"$cgTsx`" src/server.ts" $cgDir

# Tutor engine (si tiene tsx)
$tutorTsx = "$ROOT\ai\tutor_engine\node_modules\.bin\tsx.cmd"
if (Test-Path $tutorTsx) {
    Start-Service "tutor_engine" "$envPrefix && `"$tutorTsx`" src/server.ts" "$ROOT\ai\tutor_engine"
}

Write-Host "`n      Waiting 15s for services to boot..." -ForegroundColor Gray
Start-Sleep -Seconds 15

# ── HEALTH CHECK ─────────────────────────────────────────────
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Health Check" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$wc = New-Object System.Net.WebClient
$all_ok = $true
foreach ($ep in @(
    @{n="NotebookLM  :8881"; u="http://localhost:8881/health"},
    @{n="Kokoro TTS  :8880"; u="http://localhost:8880/health"},
    @{n="Auth        :3001"; u="http://localhost:3001/health"},
    @{n="Learning    :3002"; u="http://localhost:3002/health"},
    @{n="Content     :3003"; u="http://localhost:3003/health"},
    @{n="Generator   :3004"; u="http://localhost:3004/health"}
)) {
    try {
        $wc.DownloadString($ep.u) | Out-Null
        Write-Host "  ✅ $($ep.n)" -ForegroundColor Green
    } catch {
        Write-Host "  ⚠️  $($ep.n) — still starting (normal for GPU models)" -ForegroundColor Yellow
        $all_ok = $false
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
if ($all_ok) {
    Write-Host "  ✅ ALL SYSTEMS GO" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  Most services up — GPU models may need 1-2 min more" -ForegroundColor Yellow
}
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`n  Student app: cd apps\web_student && pnpm dev" -ForegroundColor White
Write-Host "  Login: student@example.com / placeholder`n" -ForegroundColor White

Read-Host "Press Enter to exit"
