const express = require('express')
const app = express()
const port = 5152

const helloRouter = require('./roter/HelloRouter')
const bookRouter = require('./roter/BukuRouter')

function onServerConnect() {
    console.log("server running at port " + port)
}
app.use(express.json())

app.use('/hello', helloRouter)
app.use('/book', bookRouter)
app.listen(port, onServerConnect)




