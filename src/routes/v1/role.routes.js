const express = require('express')
const RoleController = require('../../http/controllers/v1/role.controller')

const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Role:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The primary key of the role (uuid v4 value)
 *        name:
 *          type: string
 *          description: The name of the role
 *        code:
 *          type: string
 *          description: The code of the admin
 *        description:
 *          type: string
 *          description: The description of the admin
 *      example:
 *        id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *        name: Admin
 *        code: AD
 *        description: Can Access Admin Menu
 */

/**
 * @swagger
 * /api/v1/roles:
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
 *    summary: Return the array of roles
 *    tags: [Role v1]
 *    responses:
 *      200:
 *        description: the array of role
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Role'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.get('/', RoleController.index)

module.exports = router
