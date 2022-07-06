const PASSWORD = require('../../helper/password.helper')
const JWT = require('../../helper/jwt.helper')
const Repository = require('../config/repository')
const {Admin} = require('../models/index')

/** */
class AdminRepository extends Repository {
  /**
   * @param {Model} Admin
  */
  constructor() {
    super(Admin, ['role'])
  }

  /**
   * @param {Object} data
   * @return {Promise} token.
   */
  async login(data) {
    const {
      email, phone, password,
    } = data

    let dataTemp = null

    if (email) {
      dataTemp = await this.findOne({email})
    } else {
      dataTemp = await this.findOne({phone})
    }

    let token = null

    if (dataTemp) {
      if (PASSWORD.verify(password, dataTemp.dataValues.password)) {
        delete dataTemp.dataValues.password
        token = JWT.generateToken(dataTemp.dataValues)
        if (token.length > 0) {
          const admin = await this.findByID(dataTemp.id)
          admin.expiryToken = 86400
          admin.save()
        }
      }
    }

    return token
  }
}

module.exports = new AdminRepository()
