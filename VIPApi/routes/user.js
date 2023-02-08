const express = require('express')
const router = express.Router()
const schemas = require('../middlewares/validations/schemas')
const security = require('../middlewares/security')
const usersController = require('../controllers/user/user')
const { userService } = require('../services/index.js')

router.post(
  '/',
  schemas.user.create,
  security.permission.user.create,
  usersController.create(userService.create)
)

router.post('/asset', security.auth, schemas.user.addAsset)

module.exports = router
