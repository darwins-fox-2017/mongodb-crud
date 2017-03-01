const mongoose = require('mongoose')
let db = require('../config/mongo.js')

let Schema = mongoose.Schema

let customerSchema = new Schema({
  nama: {type: String, required: true},
  memberid: {type: String, required: true},
  address: String,
  zipcode: String,
  phone: String
}, {
  timestamps: true
})

let Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
