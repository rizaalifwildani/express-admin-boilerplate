'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        autoIncrement: false,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles')
  },
}
