const mongoose = require('mongoose')

const gameSchema = mongoose.Schema(
    {
        player1: String,
        player2:  String,
        result1:  Number,
        result2:  Number, 
        tournament:  String,
        winner:  Boolean,
        player1name: String,
        player2name: String
    },  
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Game', gameSchema)

