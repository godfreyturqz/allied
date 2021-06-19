const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectIndexSchema = new Schema({ 
    uniqid: { type: String, required: true },
    reqLine: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('reqindex', projectIndexSchema)