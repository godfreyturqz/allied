const ReqIndexModel = require('../models/ReqIndexModel')


module.exports.create = async (req, res) => {
    try {
        const data = await ReqIndexModel.create(req.body)
        res.status(201).json({message: 'created successfully', data})
    } catch (error) {
        res.status(409).json(error)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const data = await ReqIndexModel.find({}).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.getDetails = async (req, res) => {
    try {
        const data = await ReqIndexModel.findById(req.params.id).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.update = async (req, res) => {
    try {
        const data = await ReqIndexModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => ReqIndexModel.findById(req.params.id))
        res.status(200).json({message: 'updated successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.delete = async (req, res) => {
    try {
        const data = await ReqIndexModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}