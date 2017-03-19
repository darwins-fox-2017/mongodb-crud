var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

let book = require("./models/bookSchema");
let transaction = require("./models/transactionSchema");
let costumer = require("./models/costumerSchema");


// INISIASI MODELS
function insertBook() {
    let data1 = new book({
        dataId: 1,
        isbn: "978-1-60309-057-5",
        title: "Dragon Puncher",
        author: "James Kochalka",
        category: "All Ages",
        stock: 3
    });

    let data2 = new book({
        dataId: 2,
        isbn: "978-1-891830-77-8",
        title: "Every Girl is the End of the World for Me",
        author: "Jeffrey Brown",
        category: "Mature (16+)",
        stock: 3
    });

    data1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data1 berhasil dimasukkan`);
    });

    data2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data2 sberhasil dimasukkan`);
    });
}
insertBook()

function insertTransaction() {
    let transaction1 = new transaction({
        dataId: 1,
        memberid: "CL0002",
        days: 6,
        out_date: "2016-04-19",
        due_date: "2016-04-19",
        in_date: "2016-04-19",
        fine: 2000,
        booklist: [{
            isbn: "58b6adbb2c378c3418544ce8",
            qty: 1
        }]
    })

    transaction1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data1 berhasil dimasukkan`);
    });
}
insertTransaction()

function insertCostumer() {
    let costumer1 = new costumer({
        dataId: 1,
        name: "Rubi henjaya",
        memberid: "CL0001",
        address: "Ujung Berung Bandung",
        zipcode: "40294",
        phone: "08112237788"
    })

    let costumer2 = new costumer({
        dataId: 1,
        name: "Riza Fahmi",
        memberid: "CL0001",
        address: "Something in Jakarta",
        zipcode: "50022",
        phone: "081122336655"
    })

    costumer1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data1 berhasil dimasukkan`);
    });

    costumer2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data2 berhasil dimasukkan`);
    });
}
insertCostumer()
