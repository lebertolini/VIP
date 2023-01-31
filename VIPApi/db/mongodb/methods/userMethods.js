const { User } = require('../entities/index')

module.exports.create = userPropeties => {
  return User.create(userPropeties)
}

module.exports.getUserByUsername = username => {
  return User.findOne({ 'login.username': username }).exec()
}

module.exports.updateUser = user => {
  return user.save()
}
