const express = require('express')
const router = express.Router()
const schemas = require('../middlewares/validations/schemas')
const permission = require('../middlewares/security/permission')
const usersController = require('../controllers/user/user')

router.post(
  '/',
  schemas.user.create,
  permission.user.create,
  usersController.create
)

module.exports = router
