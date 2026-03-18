FROM node:20-alpine

WORKDIR /app

RUN corepack enable

ENV NODE_ENV=production

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/auth_service ./services/auth_service

RUN pnpm install --frozen-lockfile --filter @cumbre/auth-service...

EXPOSE 3001

CMD ["pnpm", "--filter", "@cumbre/auth-service", "start"]
