const asyncHandler = require('express-async-handler')

const Player = require('../model/playerModel')


// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getPlayers = asyncHandler(async (req, res) => {
    const players = await Player.find()
    res.status(200).json(players)
})

const getPlayer = asyncHandler(async (req, res) => {
    const player = await Player.findOne({_id:req.params.id})
    res.status(200).json(player)
})
// @desc        Set goal
// @route       POST /api/goals
// @access      Private
const setPlayer = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Player.create({
        name: req.body.name,
        surname: req.body.surname,
        level: req.body.level,
        games: req.body.games
    })
    res.status(200).json(goal)
})

// @desc        Update goal
// @route       PUT /api/goals/:id
// @access      Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc        Delete goal
// @route       DELETE /api/goals/:id
// @access      Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getPlayer,
    setPlayer,
    updateGoal,
    deleteGoal,
    getPlayers
}