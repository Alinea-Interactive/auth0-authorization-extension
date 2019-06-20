## Analysis
see (https://github.com/auth0-extensions/auth0-extension-tools#records)

`server/lib/storage/database.js`
Defines functions called by client to retrieve data e.g. getGroups()
```javascript
  getRole(id) {
    return this.provider
      .get('roles', id);
  }
```

`server/lib/storage/providers.js`
Init specific underlying storage mechanism (e.g S3Storage, or WebStorage), used by database, an instance is referred to as a _provider_

`node_modules/auth0-extension-s3-tools/src/S3StorageContext.js`
Init'd by providers.js if S3Storage option is used.

`node_modules/auth0-extension-tools/src/blobRecordProvider.js`
Wraps a provider to support get, getAll type functions on providers. Specifically tailored for JSON objects (e.g. binary large object - blob)

`server/api/policy/routes/post_user.js`
Called by Auth0 rule to get user permissions, groups etc - defines getUserData function that returns all this information

`server/lib/queries.js`
Also Defines getUserData fn

## Progress

Installed postgres

```shell
npm install pg --save
```

## TODO