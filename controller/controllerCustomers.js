'use strict'
var Customer = require('../models/customer.js');

module.exports = {

    findAllCustomers : function(req, res, next) {
      Customer.find({}, function(err, customers){
        if (err) {
          res.send(err)
        } else {
          res.send(customers)
        }
      })
    },

    findByMemberId : function(req, res, next) {
      Customer.find(
        {
          memberid: req.query.memberid
        }, function(err, customers){
          if (err) {
            res.send(err)
          } else {
            res.send(customers)
          }
      })
    },

    createMember : function(req, res, next) {
      var newMember = Customer(
        {
          name: req.body.name,
          memberid: req.body.memberid,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
        })

      newMember.save(function(err){
        if (err) {
          res.send(err)
        } else {
          res.send(`User ${req.body.name} has been created`)
        }
      })
    },

    updateMember : function(req, res, next) {
      Customer.findOneAndUpdate(
        {
          memberid: req.params.memberid
        }, req.body, {new : true}, function(err, customers){
          if (err) {
            res.send(err)
          } else {
            res.send(customers)
          }
        })
    },

    deleteMember : function(req, res, next) {
      Customer.findOneAndRemove(
        {
          memberid: req.params.memberid
        }, function(err){
          if (err) {
            res.send(err)
          } else {
            res.send(`Member: ${req.params.memberid} has been removed`);
          }
        })
    }

}
