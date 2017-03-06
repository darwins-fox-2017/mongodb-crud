'use strict'
var Transaction = require('../models/transaction.js');

module.exports = {

    findAllTransactions : function(req, res, next) {
      Transaction.find({}, function(err, transactions){
        if (err) {
          res.send(err)
        } else {
          res.send(transactions)
        }
      })
    },

    findById : function(req, res, next) {
      Transaction.find(
        {
          _id: req.query.id
        }, function(err,transactions){
          if (err) {
            res.send(err)
          } else {
            res.send(transactions)
          }
      })
    },

    createTransaction : function(req, res, next) {
      var newTransaction = Transaction(
        {
          memberid: req.body.memberid,
          days: req.body.days,
          out_date: new Date(),
          due_date: new Date(),
          in_date: new Date(),
          fine: req.body.fine,
          booklist:[]
        })

      newTransaction.save(function(err){
        if (err) {
          res.send(err)
        } else {
          res.send(`Transaction: ${req.body.memberid} has been created`)
        }
      })
    },

    addBook : function (req, res) {
      Transaction.update(
        {
          _id: req.params.id
        },
        {
          $push: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
          {upsert: true}).then(function(data){
          res.send(data)
        })
    },

    deleteBook : function (req, res) {
      Transaction.update(
        {
          _id: req.params.id
        },
          {$pull: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
          {upsert: true}).then(function(data){
          res.send(data)
        })
    },

    updateTransaction : function(req, res, next) {
      Transaction.findOneAndUpdate(
        {
          _id: req.params.id
        }, req.body, {new : true}, function(err, data){
          if (err) {
            res.send(err)
          } else {
            res.send(data)
          }
        })
    },

    deleteTransaction : function(req, res, next) {
      Transaction.findOneAndRemove(
        {
          _id: req.params.id
        }, function(err){
          if (err) {
            res.send(err)
          } else {
            res.send(`Transaction: ${req.params.id} has been removed`);
          }
        })
    }

}
