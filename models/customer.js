'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaCustomer = Schema({
  'name' : String,
  'memberid' : String,
  'address' : String,
  'zipcode' : String,
  'phone' : String
})

let customer = Mongoose.model('customer', schemaCustomer)

module.exports = customer
