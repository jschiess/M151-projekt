const express = require('express')
const knex = require('./knex/knex')


console.log('Willkommen zu unserem Quiz-Backend!')

var gugus = "Gugus"

const app = express()

app.use(express.json())

app.get('/gugus', (req, res) => {
  console.log('Jemand will Gugus von uns!')
  //console.log(req)
  if (req.query.speziell === 'true') {
    res.json({ data: 'Spezieller ' + gugus })
  } else {
    res.json({ data: gugus })
  }
})


app.get('/user', async (req, res) => {
  var kek = await knex('user')
  console.log('better than not! '+ kek)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.send('ok')
    res.json(kek)
})


app.put('/gugus', (req, res) => {
  gugus = req.body.data
  res.send('OK')
})

async function test() {
  var test = await knex('quiz')
  var result = await knex('userb ')
  console.log(result);
}

// test()


/**
 * Josiah's trashy code;
 * TODO: 
 * 
 * 
 */


app.post('/quiz', async (req, res) => {
  console.log(req.body.name);

  await knex('quiz').insert([
    { 'name': req.body.name, creator_id: 1 },
  ])


  res.send('OK')
})





//using url to pass variables

app.delete('/quiz/:id', async (req, res) => {
  var result = await knex('quiz').where('id', req.params.id)

  if (result.length === 0) {
    res.status(404)
    res.send('quiz not found')
  } else{
    await knex('quiz').where({id: req.params.id}).del()
    res.send('OK')

  }

})


// test()


// app.get('quiz', async (req,res) => {
//   try {
//     await knex('quiz')

//   } catch (err) {
//     console.log(err);
//     res.send(err)
//   }

// })

app.listen(80)
