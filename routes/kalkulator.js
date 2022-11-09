const kalkulatorController = require('../controllers/kalkulatorController')
const router = require('express').Router()

router.post('/kalkulator/:nilai1/:nilai2', kalkulatorController)

module.exports = router