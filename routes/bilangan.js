const bilanganController = require('../controllers/bilanganController')
const router = require('express').Router()

router.post('/', bilanganController)

module.exports = router