const express = require('express')
const knex = require('./knex/knex.js');

console.log('Willkomen zu unserem Quiz Backend!');

app.get('/api/quiz', async(req, res) => {
    result = await knex('quiz')
                    .select('*')
    res.json(result)
})
app.get('/api/quiz/:id', async(req, res) => {
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

app.get('/api/quiz/:id/questions', async(req, res) => {
    let result = await knex('question')
                        .select('answer.answer', 'answer.is_correct')
                        .leftJoin('answer', 'question.id', 'answer.question_id')
                        .where('question.quiz_id', req.params.id)
                        .orderBy('question.order')
 
    // Pro frage ein Objekt //Liste für anwtworten
    /*   let sendResult = []
    foreach(question.id in result){
        sendResult.push({})
    } */
    res.send([result])

})

app.post('/api/quiz', async(req, res) => {
    await knex('quiz').insert([
        {name: req.body.name},
    ]);
    res.send('OK!')
})

app.delete('/api/quiz/:id', async (req, res) => {
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

app.put('/api/quiz/:id', async(req, res) => {
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
