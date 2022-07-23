'use strict'
const uuid = require('uuid')
const PASSWORD = require('../../helper/password.helper')
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      id: uuid.v4(),
      firstName: 'John',
      lastName: 'Doe',
      phone: '+6285920616342',
      email: 'user@app.com',
      password: PASSWORD.generate('password'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
