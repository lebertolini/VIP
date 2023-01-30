const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth/auth')
const userService = require('../services/user')
const validations = require('../middlewares/validations/schemas/index')
router.get(
  '/account',
  [validations.auth.login],
  authController.authUser(userService)
)

module.exports = router
