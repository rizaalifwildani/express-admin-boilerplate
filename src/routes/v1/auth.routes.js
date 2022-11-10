const express = require('express')
const router = express.Router()
const GUEST = require('../../middleware/guest.middleware')
const AUTH = require('../../middleware/auth.middleware')
const AuthController = require('../../http/controllers/v1/auth.controller')

/**
 * @swagger
 * components:
 *  schemas:
 *    AdminLogin:
 *      type: object
 *      properties:
 *        email:
 *          required: true
 *          type: string
 *          description: The email of the admin
 *        password:
 *          required: true
 *          type: string
 *          description: The password of the admin
 *      example:
 *        email: jhon@example.com
 *        password: password
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    parameters:
 *      - in: header
 *        name: Origin
 *        required: true
 *        type: string
 *        example: http://localhost:5001
 *    summary: Login (Guest)
 *    tags: [Auth v1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            items:
 *              $ref: '#/components/schemas/AdminLogin'
 *          example:
 *            email: jhon@example.com
 *            password: password
 *    responses:
 *      200:
 *        description: Login Success
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                token:
 *                  type: string
 *                  description: The auto generated bearer token
 *              example:
 *                token: sdlkasldiweoqiekmsdksamdklsiwqekasmdlkasmda
 *      422:
 *        description: Unresponsible entitiy
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UnprocessibleEntity'
 */
router.post('/login', GUEST, AuthController.login)

/**
 * @swagger
 * /api/v1/auth/logout:
 *  patch:
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: header
 *        name: Origin
 *        required: true
 *        type: string
 *        example: http://localhost:5001
 *    summary: Logout for current session
 *    tags: [Auth v1]
 *    responses:
 *      200:
 *        description: Logout Success
 *        content:
 *          application/json:
 *            schema:
 *              type: boolean
 *              example:
 *                 true
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.patch('/logout', AUTH, AuthController.logout)

/**
 * @swagger
 * /api/v1/auth/me:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: header
 *        name: Origin
 *        required: true
 *        type: string
 *        example: http://localhost:5001
 *    summary: Return the object of admin
 *    tags: [Auth v1]
 *    responses:
 *      200:
 *        description: the object of admin
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Admin'
 *              example:
 *                id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *                firstName: Jhon
 *                lastName: Doe
 *                email: jhon@example.com
 *                phone: "+6285920616342"
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.get('/me', AUTH, AuthController.me)

module.exports = router
