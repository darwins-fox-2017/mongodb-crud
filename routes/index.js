var express = require('express')
var router = express.Router()
var Controller = require('../controller')

/* GET home page. */
router.get('/', Controller.getIndex)
// Show Data
router.get('/getTransactions', Controller.getTransactions)
router.get('/getCustomers', Controller.getCustomers)
router.get('/getBooks', Controller.getBooks)
// Insert Data
router.post('/insertBook', Controller.insertBook)
router.post('/insertCustomer', Controller.insertCustomer)
router.post('/insertTransaction', Controller.insertTransaction)
// Delete Data
router.delete('/deleteBook/:isbn', Controller.deleteBook)
router.delete('/deleteCustomer/:id', Controller.deleteCustomer)
router.delete('/deleteTransaction/:id', Controller.deleteTransaction)
// Update Data
router.put('/updateBook/:id', Controller.updateBook)
router.put('/updateTransaction', Controller.updateTransaction)
router.put('/updateCustomer', Controller.updateCustomer)
// Insert Bulk
router.get('/bulkInsertBook', Controller.bulkInsertBook)
router.get('/bulkInsertCustomer', Controller.bulkInsertCustomer)
router.get('/bulkInsertTransaction', Controller.bulkInsertTransaction)

module.exports = router
