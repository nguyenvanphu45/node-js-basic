const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send(`I'm Phu!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://locahost:${port}`)
})