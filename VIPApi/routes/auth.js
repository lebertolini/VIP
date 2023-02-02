const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth/auth')
const { userService } = require('../services/index')
const validations = require('../middlewares/validations/schemas/index')
const permission = require('../middlewares/security/permission')

router.post(
  '/account',
  [validations.auth.login, permission.auth.login],
  authController.authUser(userService)
)

module.exports = router
