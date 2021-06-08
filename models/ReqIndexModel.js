const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqIndexSchema = new Schema({ 
    reqLine: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('reqIndex', reqIndexSchema)