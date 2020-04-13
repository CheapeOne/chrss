# Graphql Codegen

Graphql Codegen handles generating typescript types from our graphql schema. Hasura must be running / reachable for the schema to be read and types to be generated. Autogenerate types by doing the following:

1. Make sure the hasura and postgres containers are up: `docker-compose up -d`
2. Run `yarn graphql-codegen`
3. Output is in `codegen.ts` in this folder

Autogeneration is configured in `codegen.yml` in the top level of this project. Docs here: https://github.com/dotansimha/graphql-code-generator

## Usage


