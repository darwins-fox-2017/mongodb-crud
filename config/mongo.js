const mongoose = require('mongoose')
let mongoDB = 'mongodb://127.0.0.1/simplecrud'
mongoose.connect(mongoDB)
let db = mongoose.connection

module.exports = db
