FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/auth_service ./services/auth_service

RUN pnpm install --frozen-lockfile --filter @cumbre/auth-service...

ENV NODE_ENV=production

EXPOSE 3001

CMD ["pnpm", "--filter", "@cumbre/auth-service", "start"]
