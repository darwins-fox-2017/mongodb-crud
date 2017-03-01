// load
let mongoose = require('mongoose')

// define book schema
let TransactionSchema = new mongoose.Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: Array
}, {
  timestamps: true
})

// Export mongoose model
module.exports = mongoose.model('Transaction', TransactionSchema)
