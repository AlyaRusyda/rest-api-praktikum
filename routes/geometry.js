const {kubusController, balokController, bolaController, coneController} = require('../controllers/geometryController')
const router = require('express').Router()

router.post('/kubus', kubusController)
router.post('/balok', balokController)
router.post('/bola', bolaController)
router.post('/kerucut', coneController)

module.exports = router