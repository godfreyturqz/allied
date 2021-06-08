require('dotenv/config')
const app = require('express')()
const mongoose = require('mongoose')

const middlewares = require('./middlewares')

//--------------------------------------------------------------
// MIDDLEWARES
//--------------------------------------------------------------
app.use(...middlewares)

//--------------------------------------------------------------
// DATABASE CONNECTION
//--------------------------------------------------------------
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(error => console.log(error.message))

//--------------------------------------------------------------
// ROUTES
//--------------------------------------------------------------
app.use('/api/v1', require('./routes/api'))
app.use('/', (req, res) => {
    res.send('allied API ver 1.0')
})
