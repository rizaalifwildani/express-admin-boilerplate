const express = require('express')

const router = express.Router()
const AUTH = require('../../middleware/auth.middleware')
const auth = require('./auth.routes')
const admin = require('./admin.routes.js')
const role = require('./role.routes.js')
const SUPERADMIN = require('../../middleware/superadmin.middleware')

/**
 * @swagger
 * tags:
 *  name: Auth v1
 *  description: API Auth v1
 */
router.use('/auth', auth)

/**
 * @swagger
 * tags:
 *  name: Admin v1
 *  description: API Admin v1 (Only SUPERADMIN Role)
 */
router.use('/admins', [AUTH, SUPERADMIN], admin)

/**
 * @swagger
 * tags:
 *  name: Role v1
 *  description: API Role v1 (Only SUPERADMIN Role)
 */
router.use('/roles', [AUTH, SUPERADMIN], role)

module.exports = router
