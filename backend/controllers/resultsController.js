const asyncHandler = require('express-async-handler')

const Result = require('../model/resultsModel')


// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getResults = asyncHandler(async (req, res) => {
    const result = await Result.find()
    res.status(200).json(result)
})

const getResult = asyncHandler(async (req, res) => {
    const result = await Result.findOne({_id:req.params.id})
    res.status(200).json(result)
})
// @desc        Set goal
// @route       POST /api/goals
// @access      Private
const setResult = asyncHandler(async (req, res) => {
    if (!req.body.result) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const result = await Result.create({
        result: req.body.result
    })
    res.status(200).json(result)
})

const updateResult = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { result } = req.body; // Extract `result` from request body

    const updatedGoal = await Result.findByIdAndUpdate(
        id,
        { result }, // Update only the `result` field
        { new: true } // Return the updated document
    );
    res.status(200).json(updatedGoal);
});

module.exports = {
    getResults,
    getResult,
    setResult,
    updateResult
}