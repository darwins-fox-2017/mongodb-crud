var Transaction = require('../models/transaction')

module.exports = {
  createTransaction: function(req,res){
    Transaction.create({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateTransaction: function(){
    Transaction.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteTransaction: function(){
    Transaction.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTransactions: function(){
    Transaction.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTransaction: function(){
    Transaction.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
