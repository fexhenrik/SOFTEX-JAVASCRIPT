const express = require('express')
const rotas = express()

rotas.get("/", function(req, res) {
    res.send("Homepage")

}) 

rotas.get('/contract', (req, res) => {
    res.send('Contract page')
})

rotas.listen(3030, () => {
    console.log("Server host 3030: hhtp://localhost:3030/")
})