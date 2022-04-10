FROM node:17

# https://pnpm.io/cli/fetch#usage-scenario
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN mkdir /app
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
EXPOSE 4200

# RUN rm -rf node_modules
RUN pnpm install --frozen-lockfile
RUN pnpm install -g nx
COPY . /app/
RUN pnpm run build
CMD ["pnpm", "start"]
