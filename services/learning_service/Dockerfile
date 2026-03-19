FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/learning_service ./services/learning_service

RUN pnpm install --frozen-lockfile --filter @cumbre/learning-service... \
  && pnpm --filter @cumbre/learning-service db:generate \
  && pnpm --filter @cumbre/tutor-engine db:generate

ENV NODE_ENV=production

EXPOSE 3002

CMD ["pnpm", "--filter", "@cumbre/learning-service", "start"]
