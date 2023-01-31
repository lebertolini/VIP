module.exports.UserService = userDb => {
  return {
    create: userPropeties => {
      return userDb.create(userPropeties)
    },
    getUserByUsername: username => {
      return userDb.getUserByUsername(username)
    },
    updateUser: user => {
      return userDb.updateUser(user)
    }
  }
}
