FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/content_service ./services/content_service

RUN pnpm install --frozen-lockfile --filter @cumbre/content-service...

ENV NODE_ENV=production

EXPOSE 3003

CMD ["pnpm", "--filter", "@cumbre/content-service", "start"]
