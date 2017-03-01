var express = require('express');
var router = express.Router();
let Book = require('../models/book')
let Customer = require('../models/customer')
let Transaction = require('../models/transaction')

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  Transaction.find({}, function(err, docs) {
    if(err) console.log(err);
    else {
      res.send(docs)
    }
  })
});

router.post('/', function(req, res, next) {
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: addDays(new Date(), -5),
    in_date: new Date(),
    due_date: addDays(new Date(), -1),
    fine: 2000,
    booklist: [{isbn : req.body.isbn, qty : req.body.qty}]
  }, function(err, docs) {
    if(err) console.log(err);
    else {
      res.redirect('/transactions')
    }
  })
})

router.delete('/:id', function(req, res, next) {
  Transaction.find({_id : req.params.id}).remove(function(err, data) {
    if(err) console.log(err);
    else {
      console.log(data)
      res.redirect('/transactions')
    }
  })
})

router.put('/:id', function(req, res, next) {
  Transaction.findOneAndUpdate({_id: req.params.id}, {title: req.body.title}, {upsert: false}, function(err, doc) {
    if(err) console.log(err);
    else {
      console.log("Update success");
      console.log(doc);
      res.send('success update')
    }
  })
})

router.post('/addbook/:id', function(req, res, next) {
  Transaction.findByIdAndUpdate(req.params.id,
    {$push: {booklist: {isbn: req.body.isbn, qty: req.body.qty}}},
    {upsert: false}, function(err, doc) {
    if(err) console.log(err);
    else {
      console.log("addbook success");
      console.log(doc);
      res.send('success update')
    }
  })
})

module.exports = router;
