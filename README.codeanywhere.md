```shell
cabox@user-manager:~/workspace$ npm install

> spawn-sync@1.0.15 postinstall /home/cabox/workspace/node_modules/spawn-sync
> node postinstall


> caporal@0.4.1 postinstall /home/cabox/workspace/node_modules/caporal
> (test -f ./node_modules/husky/bin/install.js && node ./node_modules/husky/bin/install.js) || exit 0


> nodemon@1.18.4 postinstall /home/cabox/workspace/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate


> gifsicle@3.0.4 postinstall /home/cabox/workspace/node_modules/gifsicle
> node lib/install.js

  ✔ gifsicle pre-build test passed successfully

> jpegtran-bin@3.2.0 postinstall /home/cabox/workspace/node_modules/jpegtran-bin
> node lib/install.js

  ✔ jpegtran pre-build test passed successfully

> optipng-bin@3.1.4 postinstall /home/cabox/workspace/node_modules/optipng-bin
> node lib/install.js

  ✔ optipng pre-build test passed successfully

> auth0-styleguide@github:auth0/styleguide#7634baa62d5a393de3a9c5352c632fa1c6f9b78b postinstall /home/cabox/workspace/node_modules/auth0-styleguide
> gulp build

internal/util/inspect.js:31
const types = internalBinding('types');
              ^

ReferenceError: internalBinding is not defined
    at internal/util/inspect.js:31:15
    at req_ (/home/cabox/workspace/node_modules/natives/index.js:137:5)
    at require (/home/cabox/workspace/node_modules/natives/index.js:110:12)
    at util.js:25:21
    at req_ (/home/cabox/workspace/node_modules/natives/index.js:137:5)
    at require (/home/cabox/workspace/node_modules/natives/index.js:110:12)
    at fs.js:42:21
    at req_ (/home/cabox/workspace/node_modules/natives/index.js:137:5)
    at Object.req [as require] (/home/cabox/workspace/node_modules/natives/index.js:54:10)
    at Object.<anonymous> (/home/cabox/workspace/node_modules/vinyl-fs/node_modules/graceful-fs/fs.js:1:99)
npm WARN enzyme-adapter-react-15@1.4.0 requires a peer of react@^15.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-dom@15.6.1 requires a peer of react@^15.6.1 but none is installed. You must install peer dependencies yourself.
npm WARN react-test-renderer@15.6.1 requires a peer of react@^15.6.1 but none is installed. You must install peer dependencies yourself.
npm WARN auth0-authz-extension@2.6.1 No repository field.
npm WARN The package json-loader is included as both a dev and production dependency.
npm WARN The package request-promise is included as both a dev and production dependency.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! auth0-styleguide@github:auth0/styleguide#7634baa62d5a393de3a9c5352c632fa1c6f9b78b postinstall: `gulp build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the auth0-styleguide@github:auth0/styleguide#7634baa62d5a393de3a9c5352c632fa1c6f9b78b postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/cabox/.npm/_logs/2019-06-05T12_36_33_426Z-debug.log
```

```shell
$ npm install natives@1.1.6
npm WARN deprecated natives@1.1.6: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.

> gifsicle@3.0.4 postinstall /home/cabox/workspace/node_modules/gifsicle
> node lib/install.js

  ✔ gifsicle pre-build test passed successfully

> jpegtran-bin@3.2.0 postinstall /home/cabox/workspace/node_modules/jpegtran-bin
> node lib/install.js

  ✔ jpegtran pre-build test passed successfully

> optipng-bin@3.1.4 postinstall /home/cabox/workspace/node_modules/optipng-bin
> node lib/install.js

  ✔ optipng pre-build test passed successfully

> auth0-styleguide@github:auth0/styleguide#7634baa62d5a393de3a9c5352c632fa1c6f9b78b postinstall /home/cabox/workspace/node_modules/auth0-styleguide
> gulp build

[08:39:56] Using gulpfile ~/workspace/node_modules/auth0-styleguide/gulpfile.js
[08:39:56] Starting 'stylus-landing'...
[08:39:56] Starting 'stylus-lib'...
[08:39:56] Starting 'jade-landing'...
[08:39:56] Starting 'jade-lib'...
[08:39:56] Starting 'copy:landing-js'...
[08:39:56] Starting 'copy:landing-package'...
[08:39:56] Starting 'copy:lib'...
[08:40:01] Finished 'jade-landing' after 5.35 s
[08:40:01] Finished 'copy:landing-package' after 5.35 s
[08:40:01] Finished 'copy:landing-js' after 5.35 s
[08:40:01] Finished 'stylus-landing' after 5.38 s
[08:40:03] Finished 'stylus-lib' after 6.78 s
[08:40:03] Starting 'stylus'...
[08:40:03] Finished 'stylus' after 110 μs
[08:40:03] Starting 'cssmin'...
[08:40:04] Finished 'jade-lib' after 7.55 s
[08:40:04] Starting 'templates'...
[08:40:04] Finished 'templates' after 13 μs
[08:40:06] Finished 'cssmin' after 3.15 s
[08:40:06] Starting 'css'...
[08:40:06] Finished 'css' after 5.7 μs
[08:40:06] gulp-imagemin: ✔ logos/img/badge.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/favicon.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/logo-blue-200.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/logo-grey-100-blue.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/logo-grey-100-grey.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/transparent-dark.png (already optimized)
[08:40:06] gulp-imagemin: ✔ logos/img/transparent.png (already optimized)
[08:40:07] gulp-imagemin: ✔ logos/img/logo-blue.png (already optimized)
[08:40:07] gulp-imagemin: ✔ logos/img/logo-grey.png (already optimized)
[08:40:07] gulp-imagemin: Minified 0 images
[08:40:07] Finished 'copy:lib' after 11 s
[08:40:07] Starting 'copy'...
[08:40:07] Finished 'copy' after 76 μs
[08:40:07] Starting 'build'...
[08:40:07] Finished 'build' after 4.5 μs
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN auth0-extension-ui@1.1.7 requires a peer of react-dom@^15.3.2 but none is installed. You must install peer dependencies yourself.
npm WARN auth0-extension-ui@1.1.7 requires a peer of react-router@^2.8.1 but none is installed. You must install peer dependencies yourself.
npm WARN hapi-swagger@7.4.0 requires a peer of hapi@^14.0.0 || ^15.0.0  but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap@0.31.0 requires a peer of react-dom@^0.14.9 || >=15.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-json-tree@0.10.9 requires a peer of react-dom@^15.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-overlays@0.7.4 requires a peer of react-dom@^0.14.9 || >=15.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-select@1.3.0 requires a peer of react-dom@^0.14.9 || ^15.3.0 || ^16.0.0-rc || ^16.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-transition-group@1.2.1 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN redbox-react@1.6.0 requires a peer of react-dom@^0.14.0 || ^15.0.0 || ^16.0.0-beta || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN uglifyjs-webpack-plugin@1.3.0 requires a peer of webpack@^2.0.0 || ^3.0.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN auth0-authz-extension@2.6.1 No repository field.
npm WARN The package json-loader is included as both a dev and production dependency.
npm WARN The package request-promise is included as both a dev and production dependency.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ natives@1.1.6
added 477 packages from 272 contributors, removed 92 packages, updated 1 package and audited 37314 packages in 67.054s
found 933 vulnerabilities (98 low, 772 moderate, 59 high, 4 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
```