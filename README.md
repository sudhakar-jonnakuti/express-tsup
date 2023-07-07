# express-tsup
```
Output:

C:\git-repo\express-tsup> npm run dev

> express-tsup@1.0.0 dev
> nodemon

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src\**\*        
[nodemon] watching extensions: ts,js,json
[nodemon] starting `tsup && node -r tsconfig-paths/register dist/index.js`
CLI Building entry: src/app.ts, src/index.ts, src/route/app.route.ts, src/module/health/health.controller.ts, src/module/health/health.route.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v7.1.0
CLI Using tsup config: C:\git-repo\express-tsup\tsup.config.ts
CLI Target: es2022
CJS Build start
CJS dist\app.js                             5.81 KB
CJS dist\index.js                           5.76 KB
CJS dist\route\app.route.js                 4.04 KB
CJS dist\module\health\health.controller.js 963.00 B
CJS dist\module\health\health.route.js      2.21 KB
CJS ⚡️ Build success in 228ms
App listening on port 5000

Reference:

TSUP WIKI
https://tsup.egoist.dev/#bundle-files

Build Better and Faster Bundles with TypeScript and Express using tsup
https://plusreturn.com/blog/build-better-and-faster-bundles-with-typescript-and-express-using-tsup/

Bundle Buddy
https://www.bundle-buddy.com/esbuild

Additional

How to configure and resolve path alias with a Typescript Project
https://plusreturn.com/blog/how-to-configure-and-resolve-path-alias-with-a-typescript-project/

A Comprehensive Guide to Building Node APIs with esbuild
https://dev.to/franciscomendes10866/how-to-build-a-node-api-with-esbuild-8di

```