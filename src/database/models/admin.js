'use strict'
const {
  Model,
} = require('sequelize')
const PASSWORD = require('../../helper/password.helper')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class Admin extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      Admin.belongsTo(models.Role, {
        foreignKey: 'roleId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        as: 'role',
      })
    }
  }
  Admin.init({
    roleId: DataTypes.UUID,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    expiryToken: DataTypes.DOUBLE,
  }, {
    hooks: {
      beforeCreate: async (data) => {
        const hashedPassword = PASSWORD.generate(data.password)
        data.id = uuid.v4()
        data.password = hashedPassword
        data.createdAt = new Date()
        data.updatedAt = new Date()
      },
    },
    sequelize,
    modelName: 'Admin',
  })
  return Admin
}
