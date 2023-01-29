const create = userCreateService => (request, response, next) => {
  userCreateService(request.body)
    .then(user => {
      response.json(user)
    })
    .catch(err => next(err))
}

module.exports = {
  create
}
