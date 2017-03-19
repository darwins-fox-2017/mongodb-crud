var mongoose = require('mongoose');

// MEMBUAT SCHEMA
var costumer = mongoose.Schema({
    dataId: Number,
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: Number
});

var costumer = mongoose.model('costumer', costumer)
module.exports = costumer
