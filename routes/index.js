var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController')
var customerController = require('../controllers/customerController')
var transactionController = require('../controllers/transactionController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//routing books
router.get('/api/book/:id', bookController.readBook)
router.get('/api/books', bookController.readBooks)
router.post('/api/book', bookController.createBook)
router.put('/api/book/:id', bookController.updateBook)
router.delete('/api/book/:id', bookController.deleteBook)

//routing customer
router.get('/api/customer/:id', customerController.readCustomer)
router.get('/api/customers', customerController.readCustomers)
router.post('/api/customer', customerController.createCustomer)
router.put('/api/customer/:id', customerController.updateCustomer)
router.delete('/api/customer/:id', customerController.deleteCustomer)

//routing transaction
router.get('/api/transaction/:id', transactionController.readTransaction)
router.get('/api/transactions', transactionController.readTransactions)
router.post('/api/transaction', transactionController.createTransaction)
router.put('/api/transaction/:id', transactionController.updateTransaction)
router.delete('/api/transaction/:id', transactionController.deleteTransaction)
router.post('/api/transaction/addbook/:id', transactionController.addBooksToCart)
router.post('/api/transaction/deletebook/:id', transactionController.deleteBooksfromCart)


module.exports = router;
