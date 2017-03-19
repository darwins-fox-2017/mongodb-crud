var mongoose = require('mongoose');
// var db = mongoose.connection;

// MEMBUAT SCHEMA
var book = mongoose.Schema({
    dataId: Number,
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
});

var book = mongoose.model('book', book)
module.exports = book
