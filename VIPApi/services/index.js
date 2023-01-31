const { UserMethods } = require('../db/mongodb/methods/index')
const { UserService } = require('./user')

const configureServices = () => {
  const userService = UserService(UserMethods)

  return {
    userService
  }
}

const { userService } = configureServices()

module.exports = {
  userService
}
