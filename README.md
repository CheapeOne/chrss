# chrss

Chris RSS Reader

There are 4 parts of the application:

1. Vue frontend application (`/client` folder)
2. Postgres database (docker image)
3. Hasura Graphql engine
4. Golang service (`/server` folder)
   - handles auth, as well as background jobs like updating feeds with new posts.


## Hasura

- Hasura autogenerates a Graphql api from the Postgres DB, using Hasura docker image: https://hasura.io/.
- It provides a UI to manage the DB, accessible with the command `hasura console`.
- It also manages / autogenerates DB migrations, in the `/migrations` folder.

You'll need to setup a .env file to use hasura, reference the .env.sample for guidance on appropriate params here.

If you're using vscode, you shouold add the vscode extension + config here: https://hasura.io/docs/1.0/graphql/manual/guides/code-editor-integrations/visual-studio-code.html