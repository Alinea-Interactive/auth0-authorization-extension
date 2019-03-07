# Install Log

<details>
<summary>` $ npm install`</summary>
<p>

```shell
:
:
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules/chokidar/node_modules/fsevents):

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/webpack/node_modules/chokidar/node_modules/fsevents):

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

npm WARN auth0-extension-ui@1.1.7 requires a peer of react-router@^2.8.1 but none was installed.

npm WARN hapi-swagger@7.4.0 requires a peer of hapi@^14.0.0 || ^15.0.0  but none was installed.

npm WARN enzyme-adapter-react-15@1.3.0 requires a peer of react@^15.5.0 but none was installed.

npm WARN react-test-renderer@15.6.1 requires a peer of react@^15.6.1 but none was installed.

npm WARN react-dom@15.6.1 requires a peer of react@^15.6.1 but none was installed.

npm WARN uglifyjs-webpack-plugin@1.3.0 requires a peer of webpack@^2.0.0 || ^3.0.0 || ^4.0.0 but none was installed.

npm WARN auth0-authz-extension@2.6.1 No repository field.
```

</p>
</details> 

<details>
<summary>` $ npm run client:build`</summary>
<p>

```shell
> auth0-authz-extension@2.6.1 client:build /home/ubuntu/workspace

> cross-env NODE_ENV=production webpack --config ./build/webpack/config.prod.js --colors -p

Hash: 86213336879db357cc03
Version: webpack 1.15.0
Time: 194481ms
                              Asset       Size  Chunks             Chunk Names
    auth0-authz.ui.vendors.2.6.1.js    1.11 MB       0  [emitted]  vendors
            auth0-authz.ui.2.6.1.js    1.01 MB       1  [emitted]  app
           auth0-authz.ui.2.6.1.css    2.13 kB       1  [emitted]  app
auth0-authz.ui.vendors.2.6.1.js.map  315 bytes       0  [emitted]  vendors
        auth0-authz.ui.2.6.1.js.map  284 bytes       1  [emitted]  app
       auth0-authz.ui.2.6.1.css.map   90 bytes       1  [emitted]  app
                      manifest.json  112 bytes          [emitted]  
   [0] multi vendors 268 bytes {0} [built]
    + 1592 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
```

</p>
</details>

# Code Changes

/server/index.js line 48 change to:

```javascript
    host: '0.0.0.0',
```