const BookController = require('../controller/BookController')


module.exports = {
    getBooksHandler: (req, res) => {
        const books = BookController.getAllBooks()
        const response = {
            status: 'success',
            data: books
        }

        res.json(response)
    },

    insertBookHandler: (req, res) => {
        const { title, description } = req.body
        const id = BookController.insertBook(title, description)

        const response = {
            status: 'success',
            book_id: id
        }
        res.json(response)
        res.status(201)

    },

    getBookHandler: (req, res) => {
        const { id } = req.params
        const book = BookController.getBookById(id)
        if (book != null) {
            const response = {
                status: 'success',
                book
            }
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "gaono bukune"
            }
            res.status(404)
            res.json(response)
        }


    },
    deleteBookHandler: (req, res) => {
        const { id } = req.params
        const book = BookController.deleteBookById(id)
        if (book != false) {
            const response = {
                status: 'success',
                message: 'buku dengan ID : ' + id + ' berhasil dihapus'
            }
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "gaono bukune"
            }
            res.status(404)
            res.json(response)
        }


    },
    updateBookHandler: (req, res) => {
        const { id } = req.params
        const { title, description } = req.body
        const book = BookController.updateBook(id, title, description)

        if (book == true) {
            const response = {
                status: 'berhasil diganti menjadi title :' + title + 'description :' + description,
                book
            }
            res.status(200)
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "gaono bukune"
            }
            res.status(404)
            res.json(response)
        }
    }
}