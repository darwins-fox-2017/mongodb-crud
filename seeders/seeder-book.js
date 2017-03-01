var Model = require('../models')

let seedBook = []
// seedBook.push({
//   isbn: '978-110-110-1112',
//   title: 'Tali Pocong Perawan',
//   author: 'Dewi Persik',
//   category: 'Mature (18+)',
//   stock: 100
// }, {
//   isbn: '978-110-110-1113',
//   title: 'Karya Ilmiah: Pengaruh Senyum Sapi Terhadap Tumbuh-tumbuhan',
//   author: 'Endi Pisang Goreng',
//   category: 'Science',
//   stock: 15
// }, {
//   isbn: '978-110-110-1114',
//   title: 'Makan Hati',
//   author: 'Asmin Nadin',
//   category: 'Novel',
//   stock: 50
// }, {
//   isbn: '978-110-110-1115',
//   title: 'Tutorial Dahsyat: Memakai Sabun',
//   author: 'Wahyu Hidayat',
//   category: 'Technology',
//   stock: 30
// }, {
//   isbn: '978-110-110-1113',
//   title: 'React Native Fundamentals',
//   author: 'Bambang Handoko',
//   category: 'Technology',
//   stock: 100
// })

Model.Book.create({
  isbn: '978-110-110-1112',
  title: 'Tali Pocong Perawan',
  author: 'Dewi Persik',
  category: 'Mature (18+)',
  stock: 100
})
