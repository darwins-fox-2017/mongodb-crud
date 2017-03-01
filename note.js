db.books.insert([{
        isbn: "978-1-60309-057-5",
        title: "Dragon Puncher",
        author: "James Kochalka",
        category: "All Ages",
        stock: 3
    },
    {
        isbn: "978-1-891830-77-8",
        title: "Every Girl is the End of the World for Me",
        author: "Jeffrey Brown",
        category: "Mature (16+)",
        stock: 5
    }
]);

db.transactions.insert([{
    memberid: "CL0002",
    days: 6,
    out_date: ISODate("2016-04-19T14:56:59.301Z"),
    due_date: ISODate("2016-04-19T14:56:59.301Z"),
    in_date: ISODate("2016-04-19T14:56:59.301Z"),
    fine: 2000,
    booklist: [{
            $ref: "books",
            $id: ObjectId("58b682d3fc039b537a9e5ade"),
            $db: "library"
        },
        {
            $ref: "books",
            $id: ObjectId("58b682d3fc039b537a9e5adf"),
            $db: "library"
        }
    ]
}]);
