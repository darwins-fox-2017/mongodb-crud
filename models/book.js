'use strict'
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var book = mongoose.model('Book', bookSchema)

module.exports = book
