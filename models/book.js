const mongoose = require('mongoose')
let db = require('../config/mongo.js')

let Schema = mongoose.Schema

let bookSchema = new Schema({
  isbn: {type: String, required: true},
  title: {type: String, required: true},
  author: String,
  category: String,
  stock: Number
}, {
  timestamps: true
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book
