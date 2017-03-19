// req express component
var express = require('express');
var router = express.Router();

// req mongoose component
var mongoose = require('mongoose');

// inisiasi models class setiap table
let Costumer = require("../models/costumerSchema");

// READ
// http://localhost:3000/costumer (GET METHOD)
router.get('/', function (req, res) {
    Costumer.find()
        .then(function (result) {
            res.send(result)
        });
});

// CREATE
// http://localhost:3000/costumer/new (POST METHOD)
router.post('/new', function (req, res) {
    Costumer.find()
        .then(function (result) {
            let dataCostumer = new Costumer({
                dataId: result.length + 1,
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            });

            dataCostumer.save(function (err, respond) {
                if (err) return console.error(err);
                res.redirect("/")
            });
        });
});

// DELETE
// http://localhost:3000/costumer/delete/1 (DELETE METHOD)
router.delete('/delete/:bookId', function (req, res) {
    Costumer.findOneAndRemove({
        'dataId': req.params.bookId
    }, function (err, todo) {
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        var response = {
            message: `bookId ${req.params.bookId} successfully deleted`,
            id: Costumer._id
        };
        res.send(response);
    });
})

// UPDATE
router.put('/update/:bookId', function (req, res) {
    Costumer.findOneAndUpdate({
        'dataId': req.params.bookId
    }, {
        $set: {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
})


module.exports = router;
