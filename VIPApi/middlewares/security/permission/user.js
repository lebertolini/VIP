module.exports.create = (req, res, next) => {
  User.findOne(
    { 'informations.username': request.body.informations.username },
    { _id: 1 }
  )
    .lean()
    .then(user => {
      if (user) {
        next({
          status: 409,
          message: 'O usuário já existe'
        })
      } else {
        next()
      }
    })
    .catch(err => next(err))
}
