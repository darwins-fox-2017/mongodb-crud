var mongoose = require('mongoose');
var Schema = mongoose.Schema
// var book = require("./bookSchema")

// MEMBUAT SCHEMA
var transaction = mongoose.Schema({
    dataId: Number,
    memberid: String,
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        isbn: {
            type: Schema.Types.ObjectId,
            ref: 'book'
        },
        qty: Number
    }]
});

var transaction = mongoose.model('transaction', transaction)
module.exports = transaction
