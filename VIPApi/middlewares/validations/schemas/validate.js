module.exports.joi = (schema, req, next, status = 422, param = 'body') => {
  schema
    .validateAsync(req[param])
    .then(() => next())
    .catch(err => {
      next({
        status,
        message: err.message
      })
    })
}
