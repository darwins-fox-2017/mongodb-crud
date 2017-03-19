// req express component
var express = require('express');
var router = express.Router();

// req mongoose component
var mongoose = require('mongoose');

// inisiasi models class setiap table
let Book = require("../models/bookSchema");


// READ
// http://localhost:3000/book (GET METHOD)
router.get('/', function (req, res) {
    Book.find()
        .then(function (result) {
            res.send(result)
        });
});

// CREATE
// http://localhost:3000/book/new (POST METHOD)
router.post('/new', function (req, res) {
    Book.find()
        .then(function (result) {
            let dataBook = new Book({
                dataId: result.length + 1,
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            });

            dataBook.save(function (err, respond) {
                if (err) return console.error(err);
                res.redirect("/")
            });
        });
});

// DELETE
// http://localhost:3000/book/delete/1 (DELETE METHOD)
router.delete('/delete/:bookId', function (req, res) {
    Book.findOneAndRemove({
        'dataId': req.params.bookId
    }, function (err, todo) {
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        var response = {
            message: `bookId ${req.params.bookId} successfully deleted`,
            id: Book._id
        };
        res.send(response);
    });
})

// UPDATE
router.put('/update/:bookId', function (req, res) {
    Book.findOneAndUpdate({
        'dataId': req.params.bookId
    }, {
        $set: {
            isbn: req.body.title,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
})

module.exports = router;
