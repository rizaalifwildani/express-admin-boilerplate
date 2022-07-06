const httpStatus = require('http-status')
const JWT = require('../../../helper/jwt.helper')
const Response = require('../../../helper/response.helper')
const adminRepository = require('../../../database/repositories/admin.repository')
const AdminResource = require('../../requests/resources/admin.resource')

/** */
class AuthController {
  /**
   * @method POST
   * @body :
   * email String | phone String
   * password String
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async login(req, res) {
    const token = await adminRepository.login(req.body)

    if (token) {
      new Response(res)
          .setData({token})
          .setMessage('Login Success')
          .get()
    } else {
      new Response(res)
          .setStatus(httpStatus.UNPROCESSABLE_ENTITY)
          .setMessage('Email/Phone or password doesn\'t match')
          .get()
    }
  }

  /**
   * @method PATCH
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static logout(req, res) {
    if (JWT.destroyToken(req)) {
      new Response(res)
          .setData(true)
          .setMessage('Logout Success')
          .get()
    } else {
      new Response(res)
          .setStatus(httpStatus.UNAUTHORIZED)
          .setMessage(httpStatus[httpStatus.UNAUTHORIZED])
          .get()
    }
  }

  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async me(req, res) {
    const data = AdminResource.resource(JWT.getData(req))
    new Response(res)
        .setData(data)
        .get()
  }
}

module.exports = AuthController
