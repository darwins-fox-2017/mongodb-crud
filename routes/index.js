var express = require('express');
var router = express.Router();
var controllerBooks = require('../controller/controllerBooks')
var controllerCustomers = require('../controller/controllerCustomers')
var controllerTransactions = require('../controller/controllerTransactions')

/* GET home page. */
router.get('/', function(req, res, next){
  res.send('Menu URL\nhttp://localhost:3000\n\nFind All Books (GET): /books\nFind By ISBN (GET): /book/search?isbn=\nCreate Book (POST): /book\nUpdate Book (PUT): /book/:isbn\nDelete Book (DELETE): /book/:isbn\nFind All Customers (GET): /customers\nFind By Member ID (GET): /customer/search?memberid=\nCreate Member (POST): /customer\nUpdate Member (PUT): /customer/:memberid\nDelete Member (DELETE): /customer/:memberid\nFind All Transaction (GET): /transactions\nFind By ID (GET): /transaction/search?id=\nCreate Transaction (POST): /transaction\nUpdate Transaction (PUT): /transaction/:id\nDelete Transaction (DELETE): /transaction/:id')
});

router.get('/books', controllerBooks.findAllBooks);

router.get('/book/search', controllerBooks.findByIsbn);

router.post('/book', controllerBooks.createBook);

router.put('/book/:isbn', controllerBooks.updateBook);

router.delete('/book/:isbn', controllerBooks.deleteBook);

router.get('/customers', controllerCustomers.findAllCustomers);

router.get('/customer/search', controllerCustomers.findByMemberId);

router.post('/customer', controllerCustomers.createMember);

router.put('/customer/:memberid', controllerCustomers.updateMember);

router.delete('/customer/:memberid', controllerCustomers.deleteMember);

router.get('/transactions', controllerTransactions.findAllTransactions);

router.get('/transaction/search', controllerTransactions.findById);

router.post('/transaction', controllerTransactions.createTransaction);

router.put('/transaction/addbook/:id', controllerTransactions.addBook);

router.put('/transaction/deletebook/:id', controllerTransactions.deleteBook);

router.put('/transaction/:id', controllerTransactions.updateTransaction);

router.delete('/transaction/:id', controllerTransactions.deleteTransaction);

module.exports = router;
