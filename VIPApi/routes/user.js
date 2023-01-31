const express = require('express')
const router = express.Router()
const schemas = require('../middlewares/validations/schemas')
const permission = require('../middlewares/security/permission')
const usersController = require('../controllers/user/user')
const { userService } = require('../services/index.js')

router.post(
  '/',
  schemas.user.create,
  permission.user.create,
  usersController.create(userService.create)
)

module.exports = router
