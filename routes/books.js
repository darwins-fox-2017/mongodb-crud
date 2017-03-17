const express = require('express');
const router = express.Router();
const Controller = require('../controllers/books')

/* GET home page. */
router.post('/book', Controller.create);
router.get('/book', Controller.show)
router.put('/book/:_id', Controller.update);
router.get('/book/:_id', Controller.delete)

module.exports = router;
