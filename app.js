const express = require('express')
const knex = require('./knex/knex.js');

const app = express()

console.log('Willkomen zu unserem Quiz Backend!');

app.use(express.json())

app.get('/quiz', async(req, res) => {
    result = await knex('quiz')
                    .select('*')
    res.json(result)
    console.log(result)
})
app.get('/quiz/:id', async(req, res) => {
    result = await knex('quiz')
                    .select('*')
                    .where('id', req.params.id)
    if(result.length === 0){
        res.status(404)
        res.send('NOT FOUND!\n')
        return
    }else{
        res.send(result[0])
    }
})

app.get('/quiz/:id/questions', async(req, res) => {
    let queryresult = await knex('question')
                        .leftJoin('answer', 'question.id', 'answer.question_id')
                        .where('question.quiz_id', req.params.id)
                        .orderBy('question.order')
 
    // Pro frage ein Objekt //Liste für anwtworten

    let result = []
    let questions = await knex('question').select('question').where('question.quiz_id', req.params.id)

        for(question of questions){
            let resobj = {
                question: "",
                answers:[],
            }
            resobj.question = question.question

            for(answer of queryresult){
                if(answer.question === question.question){
                    ansobj = {
                        answer: "",
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

})

app.post('/quiz', async(req, res) => {
    await knex('quiz').insert([
        {name: req.body.name},
    ]);
    res.send('OK!')
})

app.delete('/quiz/:id', async (req, res) => {
    let result = await knex('quiz').where({id: req.params.id})
    if(result.length === 0) {
        res.status(404)
        res.send('NOT FOUND\n')
        return
    }
    result = await knex('quiz')
                .where({id: req.params.id})
                .del()
    console.log(result)
    res.send('OK\n')
})

app.put('/quiz/:id', async(req, res) => {
    let result = await knex('quiz').where({id: req.params.id})
    if(result.length === 0) {
        res.status(404)
        res.send('NOT FOUND\n')
        return
    }else{
        let result = await knex('quiz')
                            .where({id: req.params.id})
                            .update({name: req.body.name})
        console.log(result)
        res.send('OK\n')
    }   
})

app.listen(3000, () => console.log("Listening on port 3000"))
