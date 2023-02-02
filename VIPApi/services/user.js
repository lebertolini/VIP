const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { rejects } = require('assert')

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
    getUserByUsername: username => {
      return userDb.getUserByUsername(username)
    },
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
