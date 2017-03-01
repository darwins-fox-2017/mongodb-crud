var express = require('express');
var router = express.Router();
let Book = require('../models/book')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let stream = Book.find({}, function(err, docs) {
    if (!err) {
      // res.render('books/index', {Books: docs})
      res.send(docs)
    } else {throw err;}
  });
});

router.post('/', function(req, res, next) {
  Book.create(req.body, function(err, someInstance) {
    if(err) console.log(err);
    else {
      console.log(someInstance);
      res.redirect('/books')
    }
  })
})

router.delete('/:id', function(req, res, next) {
  Book.find({_id : req.params.id}).remove(function(err, data) {
    if(err) console.log(err);
    else {
      console.log(data)
      res.redirect('/books')
    }
  })
})

router.put('/:id', function(req, res, next) {
  Book.findOneAndUpdate({_id: req.params.id}, {title: req.body.title}, {upsert: false}, function(err, doc) {
    if(err) console.log(err);
    else {
      console.log("Update success");
      console.log(doc);
      res.send('success update')
    }
  })
})

module.exports = router;
