import { Model } from 'objection';
import * as Knex from 'knex';
import env from '../env';

const knexConfig = require('../../knexfile');

const initializeDb = () => {
  const envName = env.NODE_ENV;
  const dbConfigForEnv = knexConfig[envName];

  // Initialize knex.
  const knex = Knex(dbConfigForEnv);

  // Create or migrate:
  knex.migrate.latest();

  // Give the knex instance to objection.
  Model.knex(knex);
};

export default initializeDb;
