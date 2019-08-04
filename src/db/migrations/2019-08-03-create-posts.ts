export function up(knex) {
  return knex.schema.createTable("posts", table => {
    table.increments("id");
    table.string("title", 255);
    table.string("url", 255).notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable("posts");
}
