const { request } = require('express')
const { User } = require('../../db/index')

module.exports.create = (request, response, next) => {
  User.create(request.body)
    .then(user => {
      response.json(user)
    })
    .catch(err => next(err))
}
