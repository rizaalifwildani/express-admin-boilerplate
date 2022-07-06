const Repository = require('../config/repository')
const {Role} = require('../models/index')

/** */
class RoleRepository extends Repository {
  /**
   * @param {Model} Role
  */
  constructor() {
    super(Role)
  }
}

module.exports = new RoleRepository()
