const ProjectIndexModel = require('../models/ProjectIndexModel')
const Cache = require('../utils/Cache')

const CACHE_KEY = 'reqIndex'

module.exports.create = async (req, res) => {

    Cache.delete(CACHE_KEY)

    try {
        const data = await ProjectIndexModel.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(409).json(error)
    }
}

module.exports.getAll = async (req, res) => {

    const isCached = Cache.has(CACHE_KEY)
    const cachedData = Cache.get(CACHE_KEY)

    try {
        if (isCached) {
            const isNotExpired = (Date.now() - cachedData.timeStamp) <= 60000 * 5 // 5 min
            if(isNotExpired) return res.status(200).json(cachedData.data)
        } 
        
        const data = await ProjectIndexModel
        .find({})
        .select({
            uniqid: 1,
            reqLine: 1,
            description: 1,
            createdAt: 1
        })
        .lean()
        .sort({createdAt: -1})

        res.status(200).json(data)
        Cache.set(CACHE_KEY, data)
    
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.getDetails = async (req, res) => {
    try {
        const data = await ProjectIndexModel.findById(req.params.id).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.update = async (req, res) => {
    try {
        const data = await ProjectIndexModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => ProjectIndexModel.findById(req.params.id))
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.delete = async (req, res) => {

    Cache.delete(CACHE_KEY)

    try {
        const data = await ProjectIndexModel.findOneAndRemove({uniqid: req.params.id})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}