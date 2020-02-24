# chrss

Chris RSS Reader

There are 4 parts of the application:

1. React frontend application (`/client` folder)
2. Postgres database (docker image)
3. Hasura Graphql engine
   - Hasura autogenerates a Graphql api from the Postgres DB, using Hasura docker image: https://hasura.io/.
   - It provides a UI to manage the DB, accessible with the command `hasura console`.
   - It also manages / autogenerates DB migrations, in the `/migrations` folder.
4. Golang service (`/server` folder)
   - handles auth, as well as background jobs like updating feeds with new posts.
