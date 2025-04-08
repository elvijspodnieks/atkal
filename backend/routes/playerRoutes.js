const express = require('express')
const router = express.Router()
const { getPlayer, setPlayer, getPlayers } = require('../controllers/playerController')

router.route('/').get(getPlayers).post(setPlayer)
router.route('/:id').get(getPlayer)

module.exports = router