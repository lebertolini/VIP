const { getUserByUsername } = require('../../../db/mongodb/methods/userMethods')
const bcrypt = require('bcrypt')

module.exports.login = async (request, response, next) => {
  try {
    const user = await getUserByUsername(request.body.login.username)
    if (
      !user ||
      !bcrypt.compare(request.body.login.password, user.login.password)
    ) {
      next({
        status: 401,
        message: 'Invalid credencial'
      })
    } else {
      request.user = user
      next()
    }
  } catch (err) {
    next(err)
  }
}
