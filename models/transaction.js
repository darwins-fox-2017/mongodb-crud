var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = mongoose.Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  // booklist: [{
  //   isbn: { type: Schema.Types.ObjectId, ref: 'book' },
  //   qty: Number
  // }]
  booklist: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
