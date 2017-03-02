# mongodb-crud

## Running:
> sudo service mongod start <br>
> connection @robomongo <br>
> mongo <br>
> npm run dev

## **Usage**
Menu URL
http://localhost:3000

Find All Books (GET): /books
Find By ISBN (GET): /book/search?isbn=
Create Book (POST): /book
Update Book (PUT): /book/:isbn
Delete Book (DELETE): /book/:isbn
Find All Customers (GET): /customers
Find By Member ID (GET): /customer/search?memberid=
Create Member (POST): /customer
Update Member (PUT): /customer/:memberid
Delete Member (DELETE): /customer/:memberid
Find All Transaction (GET): /transactions
Find By ID (GET): /transaction/search?id=
Create Transaction (POST): /transaction
Update Transaction (PUT): /transaction/:id
Delete Transaction (DELETE): /transaction/:id

## Create Schema
1. use library
2. db.createCollection("books")
3. db.createCollection("transactions")
4. db.books.insert([
   {
      isbn: '978-1-60309-057-5',
      title: 'Dragon Puncher',
      author: 'James Kochalka',
      category: 'All Ages',
      stock: 3
   },
   {
      isbn: '978-1-891830-77-8',
      title: 'Every Girl is the End of the World for Me',
      author: 'Jeffrey Brown',
      category: 'Mature (16+)',
      stock: 5
   }
])
5. db.getCollection('books').find({})
6. db.transactions.insert([
   {
      memberid: 'CL0001',
      days: 6,
      outdate: ISODate("2016-04-19T14:56:59.301Z"),
      duedate: ISODate("2016-04-25T14:56:59.301Z"),
      indate: ISODate("2016-04-27T14:56:59.301Z"),
      fine: 2000,
      booklist:
      [
        {
          "$ref": "books",
          "$isbn": "978-1-60309-057-5",
          "$db": "academic"
        },
        {
          "$ref": "books",
          "$isbn": "978-1-891830-77-8",
          "$db": "academic"
        }
      ]
   }
])
7. db.customers.insert([
   {
      name: 'Isumi Karina',
      memberid: 'CL0001',
      address: 'Jakarta',
      zipcode: '10340',
      phone: '08159070289'
   },
   {
     name: 'Aiko Diandra',
     memberid: 'CL0002',
     address: 'Bandung',
     zipcode: '12345',
     phone: '081234567'
   }
])
