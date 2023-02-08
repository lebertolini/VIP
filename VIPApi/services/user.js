const crypto = require('crypto')
const bcrypt = require('bcrypt')

module.exports.UserService = userDb => {
  return {
    create: async userPropeties => {
      userPropeties.login.password = await bcrypt.hash(
        userPropeties.login.password,
        6
      )
      const user = await userDb.create(userPropeties)
      return user
    },
    getUserByUsername: async username =>
      await userDb.getUserByUsername(username),
    getUserByToken: async token => await userDb.getUserByToken(token),
    generateToken: async user => {
      const token = {
        value: crypto.randomBytes(32).toString('hex')
      }

      const expirationDate = new Date()
      expirationDate.setHours(expirationDate.getHours() + 12)
      token.expiresAt = expirationDate

      user.token = token
      return await userDb.updateUser(user)
    }
  }
}
