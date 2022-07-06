const express = require('express')
const httpStatus = require('http-status')
const Response = require('../helper/response.helper')

const router = express.Router()
const v1 = require('./v1/v1.routes')

/**
 * @swagger
 * components:
 *  schemas:
 *    Response:
 *      properties:
 *        data:
 *          type: object
 *          description: The response data
 *        pagination:
 *          type: object
 *          description: only shown when data is pagination
 *        header:
 *          type: object
 *          description: The response header like status or message
 *      example:
 *        data: null,
 *        pagination: null,
 *        header: {
 *          status: 200,
 *          message: "Success",
 *        }
 *
 *    UnprocessibleEntity:
 *      properties:
 *        value:
 *          type: string
 *          description: The request body value
 *        msg:
 *          type: string
 *          description: The error message
 *        param:
 *          type: string
 *          description: The request body key
 *        location:
 *          type: string
 *          description: The location of the request
 *      example:
 *        value: jhondoe
 *        msg: must be a valid email
 *        param: email
 *        location: body
 *
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * security:
 *  - bearerAuth: []
 */
router.use('/api/v1', v1)

router.use((req, res, next) => {
  if (!req.route) {
    new Response(res)
        .setStatus(httpStatus.NOT_FOUND)
        .setMessage('Request not found')
        .get()
  }
  next()
})

module.exports = router
