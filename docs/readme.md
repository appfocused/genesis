# Genesis

## Yarn workspaces

- yarn install on root
- yarn bootstrap  
  Bootstrap all dependencies. This will hoist shared packages to the root dir for a faster install.
  It will also link your dependencies together via symlinks.

NOTE - use yarn install on the root repository first to install the necessary devdependencies
(lerna)

yarn bootstrap

### ToDo

[] Reusable tsconfig  
[] focus-visible polifill for ui-components https://github.com/WICG/focus-visible

### References and inspiration

- https://github.com/palantir/blueprint
- https://github.com/a-tarasyuk/react-webpack-typescript-babel
- https://github.com/facebook/create-react-app
  https://martinfowler.com/articles/micro-frontends.html
- https://github.com/shakyShane/action-typed
