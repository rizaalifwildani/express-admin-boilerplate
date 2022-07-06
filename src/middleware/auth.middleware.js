const httpStatus = require('http-status')
const adminRepository = require('../database/repositories/admin.repository')
const JWT = require('../helper/jwt.helper')
const Response = require('../helper/response.helper')

const AUTH = async (req, res, next) => {
  const data = JWT.getData(req)
  let authorize = false
  if (data) {
    const admin = await adminRepository.findByID(data.id)
    if (admin && admin.expiryToken > 0) {
      authorize = true
    }
  }
  if (!authorize) {
    new Response(res)
        .setStatus(httpStatus.UNAUTHORIZED)
        .setMessage(httpStatus[httpStatus.UNAUTHORIZED])
        .get()
  } else {
    next()
  }
}

module.exports = AUTH
