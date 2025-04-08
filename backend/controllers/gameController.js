const asyncHandler = require('express-async-handler')


const Game = require('../model/gameModel')


// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getGames = asyncHandler(async (req, res) => {
    sort = {'timestamp' : -1}
    const result = await Game.find().sort( { 'createdAt': -1 } ).limit(3)
    res.status(200).json(result)
})

const getGame = asyncHandler(async (req, res) => {
    const result = await Game.findOne({_id:req.params.id})
    res.status(200).json(result)
})
// @desc        Set goal
// @route       POST /api/goals
// @access      Private
const createGame = asyncHandler(async (req, res) => {
    
    const goal = await Game.create({
        player1: req.body.player1,
        player2: req.body.player2,
        result1: req.body.result1,
        result2: req.body.result2,
        tournament: req.body.tournament,
        winner: req.body.winner,
        player1name: req.body.player1name,
        player2name: req.body.player2name
    })
    res.status(200).json(goal)
})



module.exports = {
    getGames,
    getGame,
    createGame
}