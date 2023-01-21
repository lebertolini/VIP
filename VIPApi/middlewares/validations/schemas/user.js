const Joi = require('joi')
const validate = require('./validate')

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    login: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    }).required(),
    informations: Joi.object({
      name: Joi.object({
        first: Joi.string().required(),
        last: Joi.string().required()
      }).required()
    }).required()
  })
  validate.joi(schema, req, next)
}
