var Model = require('../models')

module.exports = {
  getIndex: function (req, res, next) {
    res.send('MongoDB CRUD')
  },
  getTransactions: function (req, res, next) {
    Model.Transaction.find({}).populate('booklist').then(function (data) {
      res.send(data)
    })
  },
  getCustomers: function (req, res, next) {
    Model.Customer.find({}).then(function (data) {
      res.send(data)
    })
  },
  getBooks: function (req, res, next) {
    Model.Book.find({}).then(function (data) {
      res.send(data)
    })
  },
  deleteBook: function (req, res, next) {
    Model.Book.remove({isbn: req.params.isbn}).then(function (data) {
      res.send(data)
    })
  },
  deleteCustomer: function (req, res, next) {
    Model.Customer.remove({memberid: req.params.id}).then(function (data) {
      res.send(data)
    })
  },
  deleteTransaction: function (req, res, next) {
    Model.Transaction.remove({_id: req.params.id}).then(function (data) {
      res.send(data)
    })
  },
  updateBook: function (req, res, next) {
    Model.Book.update({isbn: req.params.id},
      {'$set': {
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        }
      }).then(function (data) {
      res.send(data)
    })
  },
  updateCustomer: function (req, res, next) {
    Model.Customer.update({memberid: req.params.id},
      {'$set': {
          name: req.body.name,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
        }
      }).then(function (data) {
      res.send(data)
    })
  },
  updateTransaction: function (req, res, next) {
    Model.Transaction.update({_id: req.params.id},
      {'$set': {
          memberid: req.body.member.id,
          days: req.body.days,
          out_date: new Date(),
          due_date: new Date(),
          in_date: new Date(),
          fine: req.body.fine,
          booklist: req.body.booklist
        }
      }).then(function (data) {
      res.send(data)
    })
  },
  insertBook: function (req, res, next) {
    Model.Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
  },
  insertCustomer: function (req, res, next) {
    Model.Customer.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.author,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
  },
  insertTransaction: function (req, res, next) {
    Model.Transaction.create({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: req.body.fine,
      booklist: req.body.booklist
    })
  },
  bulkInsertBook: function (req, res, next) {
    let seedBook = []
    seedBook.push({
      isbn: '978-110-110-1112',
      title: 'Tali Pocong Perawan',
      author: 'Dewi Persik',
      category: 'Mature (18+)',
      stock: 100
    }, {
      isbn: '978-110-110-1113',
      title: 'Karya Ilmiah: Pengaruh Senyum Sapi Terhadap Tumbuh-tumbuhan',
      author: 'Endi Pisang Goreng',
      category: 'Science',
      stock: 15
    }, {
      isbn: '978-110-110-1114',
      title: 'Makan Hati',
      author: 'Asmin Nadin',
      category: 'Novel',
      stock: 50
    }, {
      isbn: '978-110-110-1115',
      title: 'Tutorial Dahsyat: Memakai Sabun',
      author: 'Wahyu Hidayat',
      category: 'Technology',
      stock: 30
    }, {
      isbn: '978-110-110-1113',
      title: 'React Native Fundamentals',
      author: 'Bambang Handoko',
      category: 'Technology',
      stock: 100
    })
  // Model.Book.create(seedBook).then(function (data) {
  //   res.send(data)
  // })
  },
  bulkInsertCustomer: function (req, res, next) {
    var faker = require('faker')
    let seedCustomer = []

    for (let i = 0; i <= 20; i++) {
      seedCustomer.push({
        name: faker.name.findName(),
        memberid: `CL000${i}`,
        address: faker.address.streetAddress(),
        zipcode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber()
      })
    }
  // Model.Customer.create(seedCustomer).then(function (data) {
  //   res.send(data)
  // })
  },
  bulkInsertTransaction: function (req, res, next) {
    let seedTransaction = []
    seedTransaction.push({
      memberid: `CL0003`,
      days: 6,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: 2000,
      booklist: '58b69a21d12ed018495fe63f'
    }, {
      memberid: `CL0004`,
      days: 6,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: 2000,
      booklist: '58b69a21d12ed018495fe640'
    }, {
      memberid: `CL0005`,
      days: 6,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: 2000,
      booklist: '58b69a21d12ed018495fe640'
    })
  // Model.Transaction.create(seedTransaction).then(function (data) {
  //   res.send(data)
  // })
  }
}
