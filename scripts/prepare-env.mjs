import { copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, "..");

const envTargets = [
  [".env.example", ".env"],
  ["services/auth_service/.env.example", "services/auth_service/.env"],
  ["services/learning_service/.env.example", "services/learning_service/.env"],
  ["services/content_service/.env.example", "services/content_service/.env"],
  ["ai/tutor_engine/.env.example", "ai/tutor_engine/.env"],
  ["apps/web_portal/.env.local.example", "apps/web_portal/.env.local"],
  ["apps/web_student/.env.local.example", "apps/web_student/.env.local"],
  ["apps/web_teacher/.env.local.example", "apps/web_teacher/.env.local"],
  ["apps/web_admin/.env.local.example", "apps/web_admin/.env.local"]
];

let copiedCount = 0;

for (const [source, target] of envTargets) {
  const sourcePath = resolve(rootDir, source);
  const targetPath = resolve(rootDir, target);

  if (existsSync(targetPath)) {
    continue;
  }

  copyFileSync(sourcePath, targetPath);
  copiedCount += 1;
}

if (copiedCount > 0) {
  console.log(`Prepared ${copiedCount} missing environment file(s).`);
} else {
  console.log("Environment files already prepared.");
}
