var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Customer = require('../models/customer');
var Transaction = require('../models/transaction')

/* GET users listing. */
router.get('/customer', function(req, res) {
  Customer.create({
    'name' : 'Rubi Henjaya',
    'memberid' : 'CL0001',
    'address' : 'Bandung',
    'zipcode' : '40294',
    'phone' : '081123456578'
  })
})
module.exports = router;
