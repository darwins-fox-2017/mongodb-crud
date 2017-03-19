// req express component
var express = require('express');
var router = express.Router();

// req mongoose component
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

// inisiasi models class setiap table
let Book = require("../models/bookSchema");
let Transaction = require("../models/transactionSchema");


/* GET home page. */
router.get('/', function (req, res) {
    Transaction.find()
        .populate('booklist')
        .then(function (result) {
            res.send(result);
        });
});


module.exports = router;
