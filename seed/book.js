'use strict'
var mongoose = require('mongoose');

var Book = require('../models/book')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library')

var newbook = new Book(
  {
    isbn: '978-1-60309-057-5',
    title: 'Dragon Puncher',
    author: 'James Kochalka',
    category: 'All Ages',
    stock: 3
  }
)

var newbook2 = new Book(
  {
     isbn: '978-1-891830-77-8',
     title: 'Every Girl is the End of the World for Me',
     author: 'Jeffrey Brown',
     category: 'Mature (16+)',
     stock: 5
  }
)

newbook.save()
newbook2.save()
console.log(newbook);
process.exit(1)
