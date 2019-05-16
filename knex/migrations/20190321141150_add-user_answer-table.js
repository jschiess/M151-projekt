// Create a user_answer table

exports.up = async function(knex) {
  await knex.schema.createTable('user_answer', function(table) {
    table.increments('id')
    table.integer('user_id')
    table.foreign('user_id').references('user.id')
    table.integer('answer_id')
    table.foreign('answer_id').references('answer.id')
    table.timestamp('created_at')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable('user_answer')
};
