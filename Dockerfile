FROM node:17

# https://pnpm.io/cli/fetch#usage-scenario
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN mkdir /app
COPY package.json pnpm-lock.yaml ./
WORKDIR /app
EXPOSE 4200

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
CMD ["pnpm", "start"]
