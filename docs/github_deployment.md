# GitHub Deployment Readiness

This document prepares CUMBRE for GitHub-based CI/CD without changing the existing monorepo architecture.

## GitHub As Source Of Truth

Recommended baseline:

- GitHub repository is the canonical source of code and deployment history
- pull requests are the only path into the protected production branch
- GitHub Actions validates the monorepo before deployable changes land
- Vercel and Railway connect directly to the repository for automated production deploys

## Required GitHub Repository Setup

### Branch protection

Protect the production branch (`main` or `master`) with:

- required pull request reviews
- required status checks:
  - `validate`
  - `e2e`
- restrict direct pushes
- require branches to be up to date before merge

### GitHub environments

Create at least:

- `production`
- `staging` if you add a staging rollout later

Use the `production` environment to protect:

- database migration workflow approvals
- production-only secrets

## Secrets Handling

Never commit secrets into:

- `.env`
- `.env.local`
- provider config files
- GitHub workflow YAML values

The repo already ignores secret-bearing env files. Keep only examples in version control.

### Recommended GitHub Actions secrets

#### Production database

- `PRODUCTION_DATABASE_URL`
- `PRODUCTION_DIRECT_URL`

#### Production backend service URLs

- `PRODUCTION_AUTH_SERVICE_URL`
- `PRODUCTION_CONTENT_SERVICE_URL`

#### Optional deploy-hook style frontend automation

If you use Vercel deploy hooks instead of only GitHub integration:

- `VERCEL_DEPLOY_HOOK_PORTAL`
- `VERCEL_DEPLOY_HOOK_STUDENT`
- `VERCEL_DEPLOY_HOOK_TEACHER`
- `VERCEL_DEPLOY_HOOK_ADMIN`

In the current baseline, direct provider GitHub integration is preferred over custom deploy-hook orchestration.

## Frontend Deployment Flow

Provider: Vercel

Projects:

- `web_portal`
- `web_student`
- `web_teacher`
- `web_admin`

Recommended flow:

1. connect each Vercel project to the GitHub repository
2. set the Root Directory to the corresponding app folder
3. configure the production environment variables in the Vercel dashboard
4. enable production deploys from the protected production branch
5. let preview deployments run automatically for pull requests

Practical mapping:

- `apps/web_portal` -> `cumbre.app`
- `apps/web_student` -> `student.cumbre.app`
- `apps/web_teacher` -> `teacher.cumbre.app`
- `apps/web_admin` -> `admin.cumbre.app`

## Backend Deployment Flow

Provider: Railway

Services:

- `auth_service`
- `learning_service`
- `content_service`

Recommended flow:

1. create one Railway service per backend service
2. connect each service to the GitHub repository
3. point each Railway service to its committed Dockerfile
4. configure production environment variables in Railway
5. use GitHub Actions for validation and protected migration execution
6. let Railway deploy after commits land on the protected production branch

This keeps deploy ownership clear:

- GitHub Actions validates and controls migration execution
- Railway runs the service containers
- Vercel deploys the Next.js apps

## Supabase Database Flow

Provider: Supabase PostgreSQL

Use:

- `DATABASE_URL` for pooled runtime traffic
- `DIRECT_URL` for Prisma CLI migration execution

Safe production rule:

- migrations run from the protected GitHub Actions workflow
- application runtimes do not run `migrate deploy` automatically on startup

## GitHub Actions In This Repo

### CI

[ci.yml](../.github/workflows/ci.yml) now:

- runs `typecheck`, `build`, and backend integration tests
- runs browser E2E in a separate dependent job
- uploads Playwright artifacts on failure
- uses concurrency protection to cancel outdated runs on the same branch

### Production migrations

[production-migrations.yml](../.github/workflows/production-migrations.yml) is a protected manual workflow for production database migrations.

It:

- installs dependencies
- writes temporary production env files from GitHub environment secrets
- generates Prisma clients
- runs the four active migration sets:
  - `auth_service`
  - `learning_service`
  - `content_service`
  - `tutor_engine`

Use it only after CI is green and before or during the coordinated production rollout window.

## Environment Variable Inventory

The detailed inventory by app and service lives in [production_deployment.md](./production_deployment.md).

Quick summary:

### Frontend apps

- auth/content/learning service URLs
- app session cookie name
- app session cookie domain
- app session secret
- portal target app URLs

### Backend services

- `DATABASE_URL`
- `DIRECT_URL`
- `PORT`
- `NODE_ENV`
- `LOG_LEVEL`
- `REQUEST_TIMEOUT_MS`
- service-to-service URLs

### AI runtimes

- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `OPENAI_BASE_URL`

## Working With Two GitHub Accounts

If you use two GitHub accounts, do not rely on a single global Git identity for this repo.

Use repository-local Git config plus SSH host aliases.

### Recommended SSH config

Add entries like these to `~/.ssh/config`:

```sshconfig
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
```

### Set the repo-local Git identity

For the work/org account:

```bash
git config user.name "Tu Nombre Trabajo"
git config user.email "tu-correo-trabajo@empresa.com"
git remote set-url origin git@github-work:ORG/CUMBRE_PLATFORM.git
```

For the personal account:

```bash
git config user.name "Tu Nombre Personal"
git config user.email "tu-correo-personal@example.com"
git remote set-url origin git@github-personal:USUARIO/CUMBRE_PLATFORM.git
```

This gives you the practical ability to choose which GitHub account signs and pushes for this repository without changing the codebase.

### Optional helper script

For Windows PowerShell, this repo now includes:

[select-github-account.ps1](../scripts/git/select-github-account.ps1)

Example:

```powershell
pwsh ./scripts/git/select-github-account.ps1 `
  -UserName "Tu Nombre Trabajo" `
  -UserEmail "tu-correo-trabajo@empresa.com" `
  -RemoteHostAlias "github-work" `
  -RemotePath "ORG/CUMBRE_PLATFORM.git"
```

## Remaining Manual Steps For First Production Deploy

1. create the GitHub repository or confirm the final org/repo target
2. configure branch protection rules
3. create the `production` GitHub environment and add the required secrets
4. connect the four Vercel projects to the repo
5. connect the three Railway services to the repo
6. configure all production env vars in Vercel and Railway
7. set custom domains and DNS
8. run the protected production migration workflow
9. merge the production-ready branch
10. smoke-test portal login, role redirects, and service readiness
