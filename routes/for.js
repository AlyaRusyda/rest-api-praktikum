const forController = require('../controllers/forController')
const router = require('express').Router()

router.post('/', forController)

module.exports = router