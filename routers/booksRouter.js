const express = require('express')
const { getAllBooks, bookAdd } = require('../controllers/booksController')
const router = express.Router()

router.get("/getallbooks",getAllBooks)
router.post("/bookadd",bookAdd)



module.exports = router