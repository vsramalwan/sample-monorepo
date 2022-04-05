FROM node:17

# https://pnpm.io/cli/fetch#usage-scenario
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN mkdir /app
COPY package.json pnpm-lock.yaml ./
COPY . .
WORKDIR /app

RUN pnpm install
RUN pnpm run build

EXPOSE 4200
CMD ["pnpm", "start"]
