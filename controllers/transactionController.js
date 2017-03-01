var Transaction = require('../models/transaction')

module.exports = {
  createTransaction: function(req,res){
    Transaction.create({
      memberid: req.body.id,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: req.body.fine,
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateTransaction: function(req,res){
    Transaction.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteTransaction: function(req,res){
    Transaction.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTransactions: function(req,res){
    Transaction.find({})
      .populate('booklist')
      .exec(function(err,data){
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      });
  },
  readTransaction: function(req,res){
    Transaction.findOne({_id:req.params.id})
      .populate('booklist')
      .exec(function(err,data){
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      });
  },
  addBooksToCart : function (req, res) {
    Transaction.update(
        {_id: req.params.id},
        {$push: {booklist:{isbn: req.body.bookid}}},
        {upsert: true}, function(err,data){
          if(err){
            res.send(err)
          }else{
            res.send(data)
          }
        })
    },

  deleteBooksfromCart : function (req, res) {
    Transaction.update(
        {_id: req.params.id},
        {$pull: {booklist:{isbn: req.body.bookid}}},
        {upsert: true}, function(err,data){
          if(err){
            res.send(err)
          }else{
            res.send(data)
          }
        })
    }
}
