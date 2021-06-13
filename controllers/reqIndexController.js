const ReqIndexModel = require('../models/ReqIndexModel')
const Cache = require('../utils/Cache')

const CACHE_KEY = 'reqIndex'

module.exports.create = async (req, res) => {

    Cache.delete(CACHE_KEY)

    try {
        const data = await ReqIndexModel.create(req.body)
        res.status(201).json({message: 'created successfully', data})
    } catch (error) {
        res.status(409).json(error)
    }
}

module.exports.getAll = async (req, res) => {

    const isCached = Cache.has(CACHE_KEY)
    const cachedData = Cache.get(CACHE_KEY)

    try {
        if (isCached) {

            const isNotExpired = (Date.now() - cachedData.timeStamp) <= 60000

            if(isNotExpired) {
                res.status(200).json(cachedData.data)
                return
            }

        } 
        
        const data = await ReqIndexModel.find({}).lean()
        res.status(200).json(data)

        Cache.set(CACHE_KEY, data)
    
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

    Cache.delete(CACHE_KEY)

    try {
        const data = await ReqIndexModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}