# Migrations

Gist is, use the hasura console to create / modify tables. Migration files will be created here automatically.

Note: The console on the hasura docker image must be off to auto gen migrations. Instead, you must launch the console with `hasura console`.

To manually create a migration, use `hasura migrate create "migration-name" --from-server`

For more info, see https://docs.hasura.io/1.0/graphql/manual/migrations/existing-database.html
