var express = require('express');
var router = express.Router();
let Customer = require('../models/customer')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let stream = Customer.find({}, function(err, docs) {
    if (!err) {
      res.send(docs)
      // res.render('customers/index', {Customers: docs})
    } else {throw err;}
  });
});

router.post('/', function(req, res, next) {
  Customer.create(req.body, function(err, someInstance) {
    if(err) console.log(err);
    else {
      console.log(someInstance);
      res.redirect('/customers')
    }
  })
})

router.delete('/:id', function(req, res, next) {
  Customer.find({_id : req.params.id}).remove(function(err, data) {
    if(err) console.log(err);
    else {
      console.log(data)
      res.redirect('/customers')
    }
  })
})

router.put('/:id', function(req, res, next) {
  Customer.findOneAndUpdate({_id: req.params.id}, {nama: req.body.nama}, {upsert: false}, function(err, doc) {
    if(err) console.log(err);
    else {
      console.log("Update success");
      console.log(doc);
      res.send('success update')
    }
  })
})

module.exports = router;
