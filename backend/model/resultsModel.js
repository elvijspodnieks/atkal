const mongoose = require('mongoose')

const resultsSchema = mongoose.Schema(
    {
        result: {
            type: Number,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Results', resultsSchema)