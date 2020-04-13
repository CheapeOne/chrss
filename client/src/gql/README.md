# Graphql Codegen

Graphql Codegen handles generating typescript types and react-apollo hooks from our graphql schema. Hasura must be running / reachable for the schema to be read and types to be generated. Autogenerate types by doing the following:

1. Make sure the hasura and postgres containers are up: `docker-compose up -d`
2. Run `yarn generate`
3. Output is in ./client/src/gql/codegen.tsx

Autogeneration is configured in `codegen.yml`. Docs here: https://github.com/dotansimha/graphql-code-generator

You can also run generate in watch mode: `yarn generate --watch`

## Usage

Import types / hooks from `./client/src/gql/types.tsx`:

```
import { withPosts } from #/gql/codegen

const MyComponent = (props) => {
    const { loading, error, data } = withPosts();
}

```
