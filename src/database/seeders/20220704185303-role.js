'use strict'
const uuid = require('uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      id: uuid.v4(),
      name: 'Super Admin',
      code: 'SA',
      description: 'Can Manage All Data',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {})
  },
}
