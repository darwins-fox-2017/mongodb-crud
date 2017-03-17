'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaBooks = Schema({
  'isbn' : String,
  'title' : String,
  'author' : String,
  'category' : String,
  'stock' : Number
})

let book = Mongoose.model('book', schemaBooks)

module.exports = book
