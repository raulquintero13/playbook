const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hello world!')
})


app.get('/launchx', ( req, res) => {
    res.send('Bienvenidos a launchx')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {anme: "explorer", msg: "hello"}
    res.send(explorer)
})

app.get('/explorers/:explorerName',(req, res) => {
    res.send(req.params)
})

app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
})




