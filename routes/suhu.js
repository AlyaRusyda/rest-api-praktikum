const {celciusController, reamurController, fahrenheitController, kelvinController} = require('../controllers/suhuController')
const router = require('express').Router()

router.post('/celcius/:c', celciusController)
router.post('/reamur/:r', reamurController)
router.post('/fahrenheit/:f', fahrenheitController)
router.post('/kelvin/:k', kelvinController)

module.exports = router