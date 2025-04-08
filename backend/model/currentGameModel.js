const mongoose = require('mongoose')

const currentGameSchema = mongoose.Schema(
    {
        player1: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        player2: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        result1: {
            type: Number,
            required: [true, 'Please add a text value'],
        },
        result2: {
            type: Number,
            required: [true, 'Please add a text value'],
        },
        gameResult1: {
            type: Number,
            required: [true, 'Please add a text value'],
        },
        gameResult2: {
            type: Number,
            required: [true, 'Please add a text value'],
        },
        serveSide: {
            type: Boolean,
            required: [true, 'Please add a text value'],
        },
        playerSide: {
            type: Boolean,
            required: [true, 'Please add a text value'],
        },
        tournament: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        completedGame: {
            type: Boolean,
            required: [true, 'Please add a text value'],
        }
    },  
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('CurrentGame', currentGameSchema)

