'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var transactionSchema = Schema({
  memberid: String,
  days: Number,
  outdate: Date,
  duedate: Date,
  indate: Date,
  fine: Number,
  booklist:
  [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

var transaction = mongoose.model('Transaction', transactionSchema)

module.exports = transaction
