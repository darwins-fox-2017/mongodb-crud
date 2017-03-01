const mongoose = require('mongoose')
let db = require('../config/mongo.js')

let Schema = mongoose.Schema

let transactionSchema = new Schema({
  memberid: {type: String, required: true},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: Array
}, {
  timestamps: true
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
