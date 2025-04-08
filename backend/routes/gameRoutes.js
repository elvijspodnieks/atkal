const express = require('express')
const router = express.Router()
const { createGame, getGame, getGames  } = require('../controllers/gameController')

router.route('/').post(createGame).get(getGames)
router.route('/game/:id').get(getGame)

module.exports = router