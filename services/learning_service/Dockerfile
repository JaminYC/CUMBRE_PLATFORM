FROM node:20-alpine

WORKDIR /app

RUN corepack enable

ENV NODE_ENV=production

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages
COPY ai ./ai
COPY services/learning_service ./services/learning_service

RUN pnpm install --frozen-lockfile --filter @cumbre/learning-service...

EXPOSE 3002

CMD ["pnpm", "--filter", "@cumbre/learning-service", "start"]
