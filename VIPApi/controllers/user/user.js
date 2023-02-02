const bcrypt = require('bcrypt')

const create = userCreateService => async (request, response, next) => {
  try {
    const newUser = await userCreateService(request.body)
    response.json(newUser)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create
}
