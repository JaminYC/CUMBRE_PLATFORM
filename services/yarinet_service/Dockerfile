FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/yarinet_service ./services/yarinet_service

RUN pnpm install --frozen-lockfile --filter @cumbre/yarinet-service... \
  && pnpm --filter @cumbre/yarinet-service db:generate

ENV NODE_ENV=production

EXPOSE 3004

CMD ["pnpm", "--filter", "@cumbre/yarinet-service", "start"]
