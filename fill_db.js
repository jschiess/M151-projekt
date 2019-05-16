async function main() {
  const knex = require('./knex/knex.js');

  await knex('user').insert(
    {nick: "trz", created_at: Date.now()}
  )

  await knex('quiz').insert({name: 'JS Quiz 2'})
  let result = await knex('quiz').where('name', 'JS Quiz 2').limit(1)
  let quiz_id = result[0].id

  await knex('question').insert([
    {quiz_id: quiz_id, order: 3, question: 'Wann wurde JS erfunden?'},
    {quiz_id: quiz_id, order: 2, question: 'Gründungsdatum der Schweiz?'},
    {quiz_id: quiz_id, order: 1, question: 'Gründungsdatum der Schweiz?'},
  ])

  await knex('answer').insert([
    {question_id: 1, answer: '1990', is_correct: false},
    {question_id: 1, answer: '1995', is_correct: true},
    {question_id: 1, answer: '2000', is_correct: false},
    {question_id: 1, answer: '2005', is_correct: false},
    {question_id: 2, answer: '1981', is_correct: false},
    {question_id: 2, answer: '1874', is_correct: false},
    {question_id: 2, answer: '1848', is_correct: true},
    {question_id: 2, answer: '1291', is_correct: false},
    {question_id: 3, answer: '1981', is_correct: false},
    {question_id: 3, answer: '1874', is_correct: false},
    {question_id: 3, answer: '1848', is_correct: true},
    {question_id: 3, answer: '1291', is_correct: false},
  ])


  knex.destroy()
}

main()
