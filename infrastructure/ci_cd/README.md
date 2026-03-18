# ci_cd

Automation pipelines for validation, delivery, and deployment.

## Baseline workflow

- GitHub Actions workflow: `.github/workflows/ci.yml`
- Local equivalent: `corepack pnpm ci:validate`

The CI pipeline brings up PostgreSQL with Docker Compose, applies committed Prisma migrations, seeds baseline data, then runs:

- `corepack pnpm typecheck`
- `corepack pnpm build`
- `corepack pnpm test`

## Production Baseline

The initial production deployment plan is documented in [docs/production_deployment.md](../../docs/production_deployment.md).
The GitHub repository and automation setup is documented in [docs/github_deployment.md](../../docs/github_deployment.md).

Baseline target providers:

- Vercel for `web_portal`, `web_student`, `web_teacher`, and `web_admin`
- Railway for `auth_service`, `learning_service`, and `content_service`
- Supabase PostgreSQL for the production database

Recommended release workflow:

1. `corepack pnpm ci:validate`
2. deploy backend containers through Railway's GitHub-connected services
3. run Prisma migrations with `DIRECT_URL` through the protected GitHub Actions workflow
4. verify `/ready` for all services
5. deploy the four Vercel projects
6. run post-deploy smoke tests through the portal and role apps
