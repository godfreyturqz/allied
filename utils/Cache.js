const Cache = new Map()

const CACHE_EXPIRATION = 5 //seconds

module.exports.has = (key) => {
    return Cache.has(key)
}

module.exports.get = (key) => {
    return Cache.get(key)
}

module.exports.set = (key, data) => {
    return Cache.set(key, { data, timeStamp: Date.now() })
}

module.exports.delete = (key) => {
    return Cache.delete(key)
}

module.exports.clear = (key) => {
    return Cache.clear(key)
}

module.exports.isExpired = (key) => {
    const { timeStamp } = Cache.get(key)

    return (Date.now() - timeStamp)/1000 >= CACHE_EXPIRATION
}