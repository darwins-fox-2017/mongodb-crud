var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionsSchema = new Schema({
  memberid : { type: Schema.Types.ObjectId, ref: 'Customer' },
  days : Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{isbn: {type: Schema.Types.ObjectId, ref: 'Book'}}]
},{
  timestamps:true
})

var Transaction = mongoose.model('Transaction', transactionsSchema);

module.exports = Transaction;
