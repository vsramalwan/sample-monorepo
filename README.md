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
