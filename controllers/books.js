const express = require('express');
const router = express.Router()
const Book = require('../models/book');

module.exports = {
  create : function(req, res, next) {
    Book.create({
      fullname : req.body.isbn,
      email : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock
    })
  },
  show : function(req, res) {
    Book.find().then(function(Bookdata) {
      res.send(Bookdata)
    })
  },
  update : function(req, res) {
    Book.findById(req.params._id, function (err, book) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
              // If that attribute isn't in the request body, default back to whatever it was before.
              book.isbn = req.body.isbn,
              book.title = req.body.title,
              book.author = req.body.author,
              book.category = req.body.category,
              book.stock = req.body.stock

            // Save the updated document back to the database
            book.save(function (err, book) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(book);
            });
        }
     });
  },
  delete : function(req, res) {
    Book.findByIdAndRemove(req.params._id, function (err, Bookdata) {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      var response = {
          message: "Todo successfully deleted",
          id : Bookdata._id
      };
      res.send(response);
    });
  }
}
