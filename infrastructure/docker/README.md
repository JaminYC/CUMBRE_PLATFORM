# docker

Local container runtime for the CUMBRE platform.

## PostgreSQL

The local persistence baseline uses PostgreSQL in Docker for development.

Start the database:

```bash
docker compose -f infrastructure/docker/docker-compose.yml up -d postgres
```

Stop the database:

```bash
docker compose -f infrastructure/docker/docker-compose.yml down
```

Default local connection:

```text
postgres://cumbre:cumbrepass@localhost:5432/cumbre
```

## Production Note

This Docker Compose setup is local-development only.

For the initial production baseline:

- PostgreSQL moves to Supabase
- frontend apps deploy to Vercel
- backend services deploy as containerized web services on Railway

See [docs/production_deployment.md](../../docs/production_deployment.md) for the production environment model, `DATABASE_URL` / `DIRECT_URL` usage, and deployment workflow.
