const bmiController = require('../controllers/bmiController')
const router = require('express').Router()

router.post('/', bmiController)

module.exports = router