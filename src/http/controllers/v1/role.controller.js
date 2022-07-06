const RoleRepository = require('../../../database/repositories/role.repository')
const Response = require('../../../helper/response.helper')
const RoleResource = require('../../requests/resources/role.resource')

/** */
class RoleController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async index(req, res) {
    const {limit, page} = req.query
    const {count, rows} = await RoleRepository.findAllAndPaginate(limit, page)
    new Response(res)
        .setData(RoleResource.collection(rows))
        .setPagination(count, limit, page)
        .get()
  }
}

module.exports = RoleController
