const asyncHandler = require('express-async-handler')


const CurrentGame = require('../model/currentGameModel')


// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getResults = asyncHandler(async (req, res) => {
    const result = await CurrentGame.find()
    res.status(200).json(result)
})

const getCurrentResult = asyncHandler(async (req, res) => {
    const result = await CurrentGame.findOne({_id:req.params.id})
    res.status(200).json(result)
})
// @desc        Set goal
// @route       POST /api/goals
// @access      Private
const setResult = asyncHandler(async (req, res) => {
    if (!req.body.player1) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await CurrentGame.create({
        player1: req.body.player1,
        player2: req.body.player2,
        setResult1: req.body.setResult1,
        setResult2: req.body.setResult2,
        gameResult1: req.body.gameResult1,
        gameResult2: req.body.gameResult2,
        serveSide: req.body.serveSide,
        playerSide: req.body.playerSide,
        tournament: req.body.tournament,
        completedGame: req.body.completedGame
    })
    res.status(200).json(goal)
})

const newGame = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { player1, player2, tournament, result1, result2, gameResult1, gameResult2 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { player1, player2, tournament, result1, result2, gameResult1, gameResult2 }, // Update only the `result` field
        { new: true } // Return the updated document
    );

    res.status(200).json(updatedGoal);
});

const updateResult1 = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { result1 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { result1 }, // Update only the `result` field
        { new: true } // Return the updated document
    );
    res.status(200).json(updatedGoal);
});

const updateResult2 = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { result2 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { result2 }, // Update only the `result` field
        { new: true } // Return the updated document
    );
    res.status(200).json(updatedGoal);
});

const updateGameResult1 = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { gameResult1 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { gameResult1 }, // Update only the `result` field
        { new: true } // Return the updated document
    );
    res.status(200).json(updatedGoal);
});

const updateGameResult2 = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { gameResult2 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { gameResult2 }, // Update only the `result` field
        { new: true } // Return the updated document
    );
    res.status(200).json(updatedGoal);
});

const updateCurrentResult = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { player1, player2 } = req.body; // Extract `result` from request body

    const updatedGoal = await CurrentGame.findByIdAndUpdate(
        id,
        { player1, player2 }, // Update only the `result` field
        { new: true } // Return the updated document
    );

    res.status(200).json(updatedGoal);
});

module.exports = {
    getCurrentResult,
    setResult,
    updateCurrentResult,
    getResults,
    newGame,
    updateResult1,
    updateResult2,
    updateGameResult1,
    updateGameResult2
}