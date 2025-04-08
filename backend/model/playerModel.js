const mongoose = require('mongoose')

const playerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        surname: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        
        level: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        games: {
            type: String,
            required: [true, 'Please add a text value'],
        }
    },
  
  
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Player', playerSchema)

