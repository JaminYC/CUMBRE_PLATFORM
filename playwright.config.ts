import { defineConfig } from "@playwright/test";

const reuseExistingServer = !process.env.CI;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  timeout: 90_000,
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  webServer: [
    {
      command: "corepack pnpm --filter @cumbre/auth-service start",
      url: "http://localhost:3001/health",
      reuseExistingServer,
      timeout: 120_000
    },
    {
      command: "corepack pnpm --filter @cumbre/learning-service start",
      url: "http://localhost:3002/health",
      reuseExistingServer,
      timeout: 120_000
    },
    {
      command: "corepack pnpm --filter @cumbre/content-service start",
      url: "http://localhost:3003/health",
      reuseExistingServer,
      timeout: 120_000
    },
    {
      command: "corepack pnpm --filter @cumbre/web-student exec next dev --port 3100",
      url: "http://localhost:3100/login",
      reuseExistingServer,
      timeout: 120_000
    },
    {
      command: "corepack pnpm --filter @cumbre/web-teacher exec next dev --port 3110",
      url: "http://localhost:3110/login",
      reuseExistingServer,
      timeout: 120_000
    },
    {
      command: "corepack pnpm --filter @cumbre/web-admin exec next dev --port 3111",
      url: "http://localhost:3111/login",
      reuseExistingServer,
      timeout: 120_000
    }
  ]
});
