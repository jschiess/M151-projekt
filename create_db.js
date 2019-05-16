async function main() {
  const knex = require('./knex/knex.js');

  await knex.schema.createTable('user', table => {
    table.increments('id')
    table.string('nick')
    table.timestamp('created_at')
  })

  await knex.schema.createTable('question', table => {
    table.increments('id')
    table.text('question')
    table.integer('order')
    table.integer('quiz_id').notNullable()
    table.foreign('quiz_id').references('quiz.id')
  })

  await knex.schema.createTable('answer', table => {
    table.increments('id')
    table.text('answer')
    table.boolean('is_correct')
    table.integer('question_id').notNullable()
    table.foreign('question_id').references('question.id')
  })

  await knex.schema.createTable('quiz', table => {
    table.increments('id')
    table.text('name')
    table.integer('creator_id')
    table.foreign('creator_id').references('user.id')
  })
  knex.destroy()
}

main()
