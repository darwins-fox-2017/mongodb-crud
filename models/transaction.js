'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaTransaction = Schema({
  'memberid' : String,
  'days' : Number,
  'out_date' : Date,
  'due_date' : Date,
  'in_date' : Date,
  'fine' : Number,
  'booklist' : [{ type: Schema.Types.ObjectId, ref: 'books' }]
})

let transaction = Mongoose.model('transaction', schemaTransaction)

module.exports = transaction
