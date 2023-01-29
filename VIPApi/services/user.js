const { User } = require('../db/index')

const create = userPropeties => {
  return User.create(userPropeties).exec()
}

module.exports = {
  create
}
