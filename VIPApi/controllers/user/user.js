const bcrypt = require('bcrypt')

const create = userCreateService => async (request, response, next) => {
  try {
    request.body.login.password = await bcrypt.hash(
      request.body.login.password,
      6
    )
    const newUser = await userCreateService(request.body)
    response.json(newUser)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create
}
