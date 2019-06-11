/*
TODO:
    -Set /api before each /quiz

*/

const express = require('express')
const knex = require('./knex/knex.js');

const app = express()

var kek = -8
var gameState = true

console.log('Willkomen zu unserem Quiz Backend!');

app.use(express.json())



app.get('/api/quiz/users', async (req, res) => {

    let user = knex('user').select('*')

    let result = await knex('user')
        .join('user_answer', 'user.id', 'user_answer.user_id')
        .join('answer', 'user_answer.answer_id', 'answer.id')
        .select('user.nick')
        .where('is_correct', 1)
        .count('answer.is_correct as correct')
        .groupBy('user.nick')
        .orderBy('correct', 'desc')


    res.send(result)
})

// Get all active users
app.get('/api/quiz/active_users', async (req, res) => {

    let user = knex('user').select('*')

    let result = await knex('user')
        .join('user_answer', 'user.id', 'user_answer.user_id')
        .join('answer', 'user_answer.answer_id', 'answer.id')
        .select('user.nick')
        .where('is_active', 1)
        .count('answer.is_correct as correct')
        .groupBy('user.nick')
        .orderBy('correct', 'desc')


    if (result.length === 0) {
        res.status(404)
        res.send('NOT FOUND!\n')
        return
    } else {
        res.send(result)
    }

})




// Returns all quiz's in the database
app.get('/api/quiz', async (req, res) => {
    result = await knex('quiz')
        .select('*')
    res.json(result)
    console.log(result)
})

// Returns a spqcific quiz from the database
app.get('/api/quiz/:id', async (req, res) => {
    result = await knex('quiz')
        .select('*')
        .where('id', req.params.id)
    if (result.length === 0) {
        res.status(404)
        res.send('NOT FOUND!\n')
        return
    } else {
        res.send(result[0])
    }
})

// Gives you all the questions and answers for a quiz
app.get('/api/quiz/:id/questions', async (req, res) => {
    let queryresult = await knex('question')
        .leftJoin('answer', 'question.id', 'answer.question_id')
        .where('question.quiz_id', req.params.id)
        .orderBy('question.order')

    let result = []
    let questions = await knex('question').select('question', 'id').where('question.quiz_id', req.params.id)

    if (queryresult.length === 0) {
        res.status(404)
        res.send('NOT FOUND!\n')
        return
    } else {

        console.log(questions);

        for (question of questions) {

            // For each question an object with the question and an array with the answers
            let resobj = {
                question: "",
                question_id: question.id,
                answers: [],
            }
            resobj.question = question.question

            for (answer of queryresult) {
                if (answer.question === question.question) {

                    // For each answer an object with the answer and the boolean if its true or false
                    ansobj = {
                        answer: "",
                        answer_id: answer.id,
                        is_correct: true,
                    }
                    ansobj.answer = answer.answer
                    ansobj.is_correct = answer.is_correct
                    resobj.answers.push(ansobj)
                }
            }
            result.push(resobj)
        }

        res.send([result])
    }

})



// Insert a quiz to the database if the quiz doesen't already exists
/*
Required:
    {
        "name": "thisisaquiz",
    }

*/


app.post('/api/quiz', async (req, res) => {
    console.log(req.body.name)
    try {
        await knex('quiz').insert(req.body)
        res.send('OK\n')
    } catch (err) {
        console.log(err)
        res.status(400)
        res.send('FAIL\n')
    }
})

// Insert user to the database
/*
Requierd:
    {
        "nick": "nickname",
    }

*/


app.post('/api/quiz/user', async (req, res) => {
    console.log(req.body.nick)
    try {
        var result = await knex('user').insert({
            "nick": req.body.nick,
            "created_at": Date.now(),
            "is_active": true
        })
        res.json(result)

    } catch (err) {
        console.log(err)
        res.status(400)
        res.send('FAIL\n')
    }
})

// Changes the atribute is_active from true to false
app.put('/api/quiz/user/change_isactive', async (req, res) => {
    await knex('user').where({
        is_active: true
    }).update({
        is_active: false
    })
    res.send('OK\n')
})

// Insert the answers from the user for the question he solved
/*
Requiered:
    {
        "user_id": xy,
        "answer_id": xy, 
    }

*/
app.post('/api/quiz/useranswer', async (req, res) => {
    try {
        await knex('user_answer').insert({
            "user_id": req.body.user_id,
            "answer_id": req.body.answer_id,
            "created_at": Date.now()
        })
        res.send('OK\n')
    } catch (err) {
        console.log(err)
        res.status(400)
        res.send('FAIL\n')
    }
})

// Change the name of a quiz if you want
//TODO 
app.put('/api/quiz/:id', async (req, res) => {
    let result = await knex('quiz').where({
        id: req.params.id
    })
    if (result.length === 0) {
        res.status(404)
        res.send('NOT FOUND\n')
        return
    } else {
        let result = await knex('quiz')
            .where({
                id: req.params.id
            })
            .update({
                name: req.body.name
            })
        console.log(result)
        res.send('OK\n')
    }
})

// For deleting quizes
//TODO Delete this Section of code before releasing 
app.delete('/api/quiz/:id', async (req, res) => {
    let result = await knex('quiz').where({
        id: req.params.id
    })
    if (result.length === 0) {
        res.status(404)
        res.send('NOT FOUND\n')
        return
    }
    result = await knex('quiz')
        .where({
            id: req.params.id
        })
        .del()
    console.log(result)
    res.send('OK\n')
})

app.get('/api/kek', (req, res) => {

    res.send({ kek: kek })
})



// Josiah's trashy code






// Change the gameState


// name is like this becuase if quiz is in the name it does not work
// dont ask me why it just is like that 
app.get('/api/game/change_gameState', async (req, res) => {
    // var result = await knex('user');
    
    kek = 
    gameState = !gameState
    res.send('ok');
})

// Cheks if the border has passed the user 
app.put('/api/game/catchedbyborder', async (req, res) => {
    let users = await knex('user')
        .join('user_answer', 'user.id', 'user_answer.user_id')
        .join('answer', 'user_answer.answer_id', 'answer.id')
        .select('user.nick')
        .where('is_active', 1)
        .count('answer.is_correct as correct')
        .groupBy('user.nick')
        .orderBy('correct', 'desc')


    if (user.length === 0) {
        res.status(404)
        res.send('NOT FOUND\n')
    } else {

        // hier ist ein problem
        for (user of users) {
            // Set the user if passed to inactive
            if (kek > user.correct) {
                // kek ist eine zahl von 0 - 100 und correct ist anzahl richtige fragen
                //  :::TODO:::
                // user.correct zu einer zahl von 1 - 100 convertieren um dann mit kek zu vergleichen.
                // kann man mit dne 100/ maximalpunkte * user.correct
                await knex('user').where({
                    id: user.id
                }).update({
                    is_active: false
                })
            }
        }
    }

    res.send(result)
})



// Counter
var lol = setInterval(() => {

    if(gameState) {

        if (kek >= 100) {
            gameState = false
            kek = 100
        }

        kek += 1
        console.log(kek)
    } else {

    }

}, 1000);




app.listen(3000, () => console.log("Listening on port 3000"))