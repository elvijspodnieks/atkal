const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        location: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Tournament', tournamentSchema)

