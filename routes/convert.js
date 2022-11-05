const {desimalController, binerController, oktalController, hexadesimalController} = require('../controllers/convertController')
const router = require('express').Router()

router.post('/desimal', desimalController)
router.post('/biner', binerController)
router.post('/oktal', oktalController)
router.post('/hexadesimal', hexadesimalController)

module.exports = router