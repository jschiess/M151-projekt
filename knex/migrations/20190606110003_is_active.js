exports.up = async function(knex, Promise) {
    await knex.schema.alterTable('user', function(table) {
      table.boolean('is_active')
    })
  };
  
  exports.down = async function(knex, Promise) {
    await knex.schema.alterTable('user', function(table) {
      table.dropColumn('is_active')
    })
  };