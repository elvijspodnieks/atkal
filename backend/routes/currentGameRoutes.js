const express = require('express')
const router = express.Router()
const { getCurrentResult, updateCurrentResult, setResult, getResults, newGame, updateResult1, updateResult2, updateGameResult1, updateGameResult2 } = require('../controllers/currentGameController')

router.route('/').post(setResult).get(getResults)
router.route('/:id').put(updateCurrentResult)
router.route('/currentgame/:id').get(getCurrentResult)
router.route('/newgame/:id').put(newGame)
router.route('/result1/:id').put(updateResult1)
router.route('/result2/:id').put(updateResult2)
router.route('/set1/:id').put(updateGameResult1)
router.route('/set2/:id').put(updateGameResult2)


module.exports = router