'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class Role extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      Role.hasMany(models.Admin, {
        foreignKey: 'roleId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        as: 'admins',
      })
    }
  }
  Role.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    hooks: {
      beforeCreate: async (data) => {
        data.id = uuid.v4()
        data.createdAt = new Date()
        data.updatedAt = new Date()
      },
    },
    sequelize,
    modelName: 'Role',
  })
  return Role
}
