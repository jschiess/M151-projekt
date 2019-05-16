
exports.up = async function(knex, Promise) {
  await knex.schema.alterTable('user', function(table) {
    table.unique('nick')
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.alterTable('user', function(table) {
    table.dropUnique('nick')
  })
};
