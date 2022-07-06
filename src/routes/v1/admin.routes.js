const express = require('express')
const AdminController = require('../../http/controllers/v1/admin.controller')

const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Admin:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The primary key of the admin (uuid v4 value)
 *        firstName:
 *          type: string
 *          description: The first name of the admin
 *        lastName:
 *          type: string
 *          description: The last name of the admin
 *        email:
 *          type: string
 *          description: The email of the admin
 *        phone:
 *          type: string
 *          description: The phone of the admin
 *      example:
 *        id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *        role: Admin
 *        firstName: Jhon
 *        lastName: Doe
 *        email: jhon@example.com
 *        phone: "+6285920616342"
 */

/**
 * @swagger
 * /api/v1/admins:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: header
 *        name: Origin
 *        required: true
 *        type: string
 *        example: http://localhost:5001
 *      - in: query
 *        name: limit
 *        type: integer
 *        example: 10
 *      - in: query
 *        name: page
 *        type: integer
 *        example: 1
 *    summary: Return the array of admins
 *    tags: [Admin v1]
 *    responses:
 *      200:
 *        description: the array of admin
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Admin'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.get('/', AdminController.index)

module.exports = router
