const Joi = require('joi')
const validate = require('./validate')

module.exports.login = (req, res, next) => {
  const schema = Joi.object({
    login: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    }).required()
  })
  validate.joi(schema, req, next)
}
