# Auth0 Authorization Extension

## Running in Production

```bash
npm install
npm run client:build
npm run serve:prod
```

## Running in Development

Update the configuration file under `./server/config.json`:
(Stack Overflow)[https://stackoverflow.com/q/42217739]

```json
{
	"AUTHORIZE_API_KEY"	  : "mysecret",
	"EXTENSION_SECRET"	  : "mysecret",
	"AUTH0_DOMAIN"		  : "me.auth0.com",
	"AUTH0_CLIENT_ID"	  : "myclientid",
	"AUTH0_CLIENT_SECRET" : "myclientsecret",
	"PUBLIC_WT_URL"       : "public facing url",
    "WT_URL"    		  : "web task url" **
}
```
** Can be found in the Authorization extension API menu item -> 'url' text box

Then you can run the extension:

```bash
npm install
npm run serve:dev
```
