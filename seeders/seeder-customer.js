'use strict'

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

module.exports = { seedCustomer: seedCustomer}
