import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('feeds', table => {
    table.increments('id').primary();
    table.string('rss_url');
    table.string('self_url');
    table.string('title');
    table.string('description');
    table.dateTime('last_build_date');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('feeds');
}
