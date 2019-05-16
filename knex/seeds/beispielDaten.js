
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_answer').del()
  await knex('answer').del()
  await knex('question').del()
  await knex('quiz').del()
  await knex('user').del()

  await knex('user').insert([
    {id: 1, nick: 'julia', created_at: Date.now()},
    {id: 2, nick: 'mr.mustard', created_at: Date.now()},
  ])
  await knex('quiz').insert([
    {id: 1, name: 'JS Quiz', creator_id: 1},
    {id: 2, name: 'Geographie-Quiz', creator_id: 2},
  ]);
  await knex('question').insert([
    {id: 1, question: 'Was ist besser, let oder var?', order: 1, quiz_id: 1},
    {id: 2, question: 'Wieviele Zahlentypen gibt es in JS?', order: 2, quiz_id: 1},
    {id: 3, question: 'Wer ist Brendan Eich?', order: 3, quiz_id: 1},
    {id: 4, question: 'Gibt es Klassen in JS?', order: 4, quiz_id: 1},
    {id: 5, question: 'Wie tief ist der Thunersee?', order: 1, quiz_id: 2},
    {id: 6, question: 'Wie lang ist das Matterhorn?', order: 2, quiz_id: 2},
  ]);

  await knex('answer').insert([
    {id: 1, question_id: 1, answer: 'let ist besser', is_correct: true},
    {id: 2, question_id: 1, answer: 'var ist besser', is_correct: true},

    {id: 3, question_id: 2, answer: 'Einen', is_correct: true},
    {id: 4, question_id: 2, answer: 'Zwei', is_correct: false},
    {id: 5, question_id: 2, answer: 'Fünf', is_correct: false},
    {id: 6, question_id: 2, answer: 'Unendlich viele', is_correct: false},

    {id: 7, question_id: 5, answer: '117 m', is_correct: false},
    {id: 8, question_id: 5, answer: '217 m', is_correct: true},
    {id: 9, question_id: 5, answer: '317 m', is_correct: false},
    {id: 10, question_id: 5, answer: '417 m', is_correct: false},
  ])

  await knex('user_answer').insert([
    {id: 1, user_id: 1, answer_id: 1, created_at: Date.now()},
    {id: 2, user_id: 1, answer_id: 4, created_at: Date.now()},
    {id: 3, user_id: 1, answer_id: 7, created_at: Date.now()},
    {id: 4, user_id: 1, answer_id: 8, created_at: Date.now()},
    {id: 5, user_id: 2, answer_id: 2, created_at: Date.now()},
    {id: 6, user_id: 2, answer_id: 1, created_at: Date.now()},
    {id: 7, user_id: 2, answer_id: 10, created_at: Date.now()},
  ])
};
