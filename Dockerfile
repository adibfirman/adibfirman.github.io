FROM node:20-alpine AS development-dependencies-env
RUN corepack enable
WORKDIR /app
COPY . /app
RUN pnpm install

FROM node:20-alpine AS production-dependencies-env
RUN corepack enable
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm install --prod

FROM node:20-alpine AS build-env
RUN corepack enable
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
COPY --from=development-dependencies-env /app/content /app/content
WORKDIR /app
RUN pnpm run build

FROM node:20-alpine
RUN corepack enable
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/content /app/content
WORKDIR /app
CMD ["pnpm", "run", "start"]
