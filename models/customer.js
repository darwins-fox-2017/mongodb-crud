'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var customerSchema = Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

var customer = mongoose.model('Customer', customerSchema)

module.exports = customer
