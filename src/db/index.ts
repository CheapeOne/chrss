import * as Knex from "knex";
import { Model } from "objection";

// Initialize knex
const knex = Knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  migrations: {
    directory: "./migrations",
    extension: "ts"
  }
});

// Bind all Models to a knex instance.
Model.knex(knex);

// Only connect once, reuse initial instance for lifetime of process
export function connect() {
  return knex;
}
