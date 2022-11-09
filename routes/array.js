const arrayController = require('../controllers/arrayController')
const router = require('express').Router()

router.post('/', arrayController)

module.exports = router