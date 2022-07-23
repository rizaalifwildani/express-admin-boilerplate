'use strict'

const uuid = require('uuid')
const PASSWORD = require('../../helper/password.helper')

module.exports = {
  async up(queryInterface, Sequelize) {
    const role = await queryInterface.rawSelect('Roles', {
      where: {
        code: 'SA',
      },
    }, ['id'])
    return queryInterface.bulkInsert('Admins', [{
      id: uuid.v4(),
      roleId: role,
      firstName: 'Riza',
      lastName: 'Alif',
      phone: '+6285920616342',
      email: 'admin@app.com',
      password: PASSWORD.generate('password'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admins', null, {})
  },
}
