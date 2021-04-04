# Sample Monorepo

React-based sample monorepo using Nx and pnpm.


### pnpm as package manager
Unlike npm or yarn, pnpm supports non-flat node_modules directory. It [uses symlinks](https://pnpm.js.org/motivation#creating-a-non-flat-node_modules-directory) and adds only direct dependencies to the root of node_modules directory. Due to this, pnpm is faster and saves more disk space ac compared to npm or yarn. Benchmark is available [here](https://github.com/pnpm/benchmarks-of-javascript-package-managers#lots-of-files) and can be easily used in [CI](https://pnpm.js.org/continuous-integration).

### Nx
Nx toolkit offers advance set of dev tools for monorepos with an opinionated project structure. It offers [incremental builds](https://nx.dev/latest/react/ci/incremental-builds) so that your code doesn't  rebuild or retest on every commit resulting in faster build times. Nx's (distributed) [computation cache](https://nx.dev/latest/react/core-concepts/computation-caching) doesn't recomputes the results of computation if already computed before. Nx's [code change analysis](https://nx.dev/latest/react/core-concepts/affected#code-changes-analysis) constructs a dependency graph of all projects in the workspace and then determines if what needs to be rebuilt and retested based on code changes. Apart from this, Nx community [community plugins](https://nx.dev/nx-community) offers several plugins.

#### How to start the app
0. Install pnpm globally `npm install -g pnpm` or `yarn global add pnpm`.
1. `pnpm nx serve page` or install nx globally `pnpm add -g nx` and run `nx serve page`
2. Following custom scripts help to create a React app/lib/story. _HINT_: Suffixing this command with `--dry-run` will show which files will be generated without writing to the disk. Also, default project is [page](https://github.com/vsramalwan/sample-monorepo/blob/130bc9514c0b426d028ec1cc9873c77c97c89f18/workspace.json#L6) so one can skip `--project=<project-name>` in following commands.
    * To create a new component run `pnpm create-component -- <component-name> --project=<project-name>`
    * To generate a new lib run `pnpm create-library -- <library-name> --project=<project-name>`
    * To generate a new app run `pnpm create-application -- <application-name> --project=<project-name>`
    * To generate a new storybook story for a component `pnpm create-component-story -- <component-name>`
    * To generate stories for all components in library run `pnpm create-stories`

#### Nx project structure explained
- /apps: Main entry point for the app. Must be light-weight!
- /libs: All heavy-lifting done here.
- /tools: Database scripts/deploy scripts and Nx schematics.
- Auto-generated prettier, eslint, jest and tsconfig for the workspace. Could be customised in respective directories of apps/libs.
- nx.json and workspace.json: Meta information related to all projects in the workspace.
- Dependency Graph: ![Dependency Graph](https://github.com/vsramalwan/sample-monorepo/blob/main/docs/dep-graph.png "dep-graph")

### Thanks/Inpiration
- [Sample Monorepo](https://github.com/wixplosives/sample-monorepo)- Sample monorepo setup with yarn workspaces, typescript, and lerna

-----------------------------------------------------------------------------------------


# SampleMonorepo

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@sample-monorepo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

