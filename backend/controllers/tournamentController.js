const asyncHandler = require('express-async-handler')

const Tournament = require('../model/tournamentModel')


// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getTournaments = asyncHandler(async (req, res) => {
    const tournaments = await Tournament.find()
    res.status(200).json(tournaments)
})

const getTournament = asyncHandler(async (req, res) => {
    const tournament = await Tournament.findOne({_id:req.params.id})
    res.status(200).json(tournament)
})
// @desc        Set goal
// @route       POST /api/goals
// @access      Private
const setTournament = asyncHandler(async (req, res) => {
    const goal = await Tournament.create({
        title: req.body.name,
        location: req.body.surname,
    })
    res.status(200).json(goal)
})


module.exports = {
    getTournament, 
    getTournaments,
    setTournament
}