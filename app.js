const express = require('express')
const app = express()
const { Client } = require('pg')
const port = process.env.PORT || 4000
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
app.get('/', (req, res) => res.sendStatus(200))
app.get('/dataurl', (req, res) => {
    res.setHeader('content-type', 'text/json')
    res.send({
        test: 5556
    })
})
app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)