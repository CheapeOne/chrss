# Migrations

Follow this guide to do migrations: https://docs.hasura.io/1.0/graphql/manual/migrations/existing-database.html

The docker console must be off to auto gen migrations. Instead, you must launch the console with `hasura console`

Gist is, use the hasura console to create / modify tables. Migration files will be created here automatically.

If not, you can do `hasura migrate create "migration-name" --from-server`
