var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Customer = require('../models/customer');
var Transaction = require('../models/transaction')

router.get('/transaction', function(req, res) {
  Transaction.create({
    'memberid' : String,
    'days' : Number,
    'out_date' : new Date(),
    'due_date' : Date,
    'in_date' : Date,
    'fine' : Number,
    'booklist' : [{ type: Schema.Types.ObjectId, ref: 'books' }]
  })
})

module.exports = router;
