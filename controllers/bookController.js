var Book = require('../models/book')

module.exports = {
  createBook: function(req,res){
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateBook: function(){
    Book.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteBook: function(){
    Book.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readBooks: function(){
    Book.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readBook: function(){
    Book.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
