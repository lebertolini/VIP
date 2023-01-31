const bcrypt = require('bcrypt')
const crypto = require('crypto')

const authUser = userService => async (request, response, next) => {
  try {
    const user = await userService.getUserByUsername(
      request.body.login.username
    )
    if (
      !user ||
      !(await bcrypt.compare(request.body.login.password, user.login.password))
    ) {
      next({
        status: 401,
        message: 'Invalid credencial'
      })
    } else {
      const token = {
        value: crypto.randomBytes(32).toString('hex')
      }

      const expirationDate = new Date()
      expirationDate.setHours(expirationDate.getHours() + 12)
      token.expiresAt = expirationDate

      user.token = token
      await userService.updateUser(user)

      response.json({ token })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authUser
}
