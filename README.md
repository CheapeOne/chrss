# chrss

Chris RSS Reader

There are 3 parts of the application:

1. React frontend application (`/client` folder)
2. Hasura Graphql engine on top of a Postgres DB
   - Hasura autogenerates a Graphql api from the Postgres DB, using Hasura docker image: https://hasura.io/.
   - It provides a UI to manage the DB, accessible with the command `hasura console`.
   - It also manages / autogenerates DB migrations, in the `/migrations` folder.
3. Golang service (`/server` folder)
   - handles hasura actions, auth, as well as background jobs like updating feeds with new posts.
   
   See 3factor app architecture: https://3factor.app/
