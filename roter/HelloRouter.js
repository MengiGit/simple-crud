const router = require('express').Router
const helloRouter = router()
const helloHandler = require('../penanganan/HelloHandler')
//const helloBook = require('../penanganan/HelloBuku')

helloRouter.get('/', helloHandler.getHelloHandler)
//helloRouter.get('/', helloBook.getHelloBook)

module.exports = helloRouter