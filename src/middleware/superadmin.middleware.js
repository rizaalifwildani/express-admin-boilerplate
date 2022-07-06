const httpStatus = require('http-status')
const JWT = require('../helper/jwt.helper')
const Response = require('../helper/response.helper')

const SUPERADMIN = async (req, res, next) => {
  const data = JWT.getData(req)
  let authorize = false
  if (data && data.role.code == 'SA') {
    authorize = true
  }
  if (!authorize) {
    new Response(res)
        .setStatus(httpStatus.FORBIDDEN)
        .setMessage(httpStatus[httpStatus.FORBIDDEN])
        .get()
  } else {
    next()
  }
}

module.exports = SUPERADMIN
