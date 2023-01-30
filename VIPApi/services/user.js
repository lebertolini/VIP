const { User } = require('../db/index')
const { user } = require('../middlewares/validations/schemas')

const create = userPropeties => {
  return User.create(userPropeties).exec()
}

const getUserByUsername = username => {
  return User.findOne({ 'login.username': username }).exec()
}

const updateUser = user => {
  return user.save()
}

module.exports = {
  create,
  getUserByUsername
}
