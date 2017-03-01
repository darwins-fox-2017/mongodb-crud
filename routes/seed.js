var express = require('express');
var router = express.Router();
var Book = require('../models/book')
var Transaction = require('../models/transaction')
var Customer = require('../models/customer')

/* GET home page. */
router.get('/books', function(req, res, next) {
  var newbooks = [
    {
      isbn: '978-1-60309-057-5',
      title: 'Dragon Puncher',
      author: 'James Kochalka',
      category: 'All Ages',
      stock: 3
    },
    {
       isbn: '978-1-891830-77-8',
       title: 'Every Girl is the End of the World for Me',
       author: 'Jeffrey Brown',
       category: 'Mature (16+)',
       stock: 5
    },
    {
       isbn: '978-1-891830-77-0',
       title: 'Perahu Kertas',
       author: 'Dee',
       category: 'Mature (16+)',
       stock: 4
    },
    {
       isbn: '978-1-891830-88-0',
       title: 'Madre',
       author: 'Dee',
       category: 'Mature (16+)',
       stock: 2
    }]

  Book.create(newbooks, function (err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
});

router.get('/transactions', function(req, res, next) {
  var newtransaction = new Transaction(
    {
      memberid: 'CL0001',
      days: 6,
      outdate: '2016-04-19',
      duedate: '2016-04-25',
      indate: '2016-04-27',
      fine: 2000,
      booklist: ["58b692a4e10c941ec093c671", "58b692a4e10c941ec093c672"]
    }
  )
  newtransaction.save()
  res.send('Seed Transaction Success!')
});

router.get('/customers', function(req, res, next) {
  var newcustomers = [
  {
     name: 'Isumi Karina',
     memberid: 'CL0001',
     address: 'Jakarta',
     zipcode: '10340',
     phone: '08159070289'
  },
  {
    name: 'Aiko Diandra',
    memberid: 'CL0002',
    address: 'Bandung',
    zipcode: '12345',
    phone: '081234567'
  }]

  Customer.create(newcustomers, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
});

module.exports = router;
