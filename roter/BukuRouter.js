const router = require('express').Router
const bookRouter = router()
const bookHandler = require('../penanganan/HelloBuku')

bookRouter.put('/:id', bookHandler.updateBookHandler)
bookRouter.delete('/:id', bookHandler.deleteBookHandler)
bookRouter.get('/:id', bookHandler.getBookHandler)
bookRouter.get('/', bookHandler.getBooksHandler)//
bookRouter.post('/', bookHandler.insertBookHandler)//

module.exports = bookRouter