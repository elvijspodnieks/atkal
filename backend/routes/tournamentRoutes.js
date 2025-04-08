const express = require('express')
const router = express.Router()
const { getTournament, getTournaments, setTournament } = require('../controllers/tournamentController')

router.route('/').get(getTournaments).post(setTournament)
router.route('/:id').get(getTournament)

module.exports = router