const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal, getGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)
router.route('/goal/:id').get(getGoal)

module.exports = router