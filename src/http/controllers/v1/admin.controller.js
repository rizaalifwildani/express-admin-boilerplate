const AdminRepository = require('../../../database/repositories/admin.repository')
const Response = require('../../../helper/response.helper')
const AdminResource = require('../../requests/resources/admin.resource')

/** */
class AdminController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async index(req, res) {
    const {limit, page} = req.query
    const {count, rows} = await AdminRepository.findAllAndPaginate(limit, page)
    new Response(res)
        .setData(AdminResource.collection(rows))
        .setPagination(count, limit, page)
        .get()
  }
}

module.exports = AdminController
