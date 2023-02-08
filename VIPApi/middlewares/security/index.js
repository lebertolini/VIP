const { userService } = require('../../services/index')

module.exports.auth = (req, res, next) => {
  const bearerToken = req.headers.authorization
  if (bearerToken) {
    if (bearerToken?.length === 71) {
      const bearerTokenValue = bearerToken.split(' ')[1]
      if (bearerTokenValue) {
        userService
          .getUserByToken(bearerTokenValue)
          .then(user => {
            if (user) {
              const now = new Date()
              if (now >= user.token.expiresAt) {
                next({
                  status: 401,
                  message: 'Expired token'
                })
              } else {
                next()
              }
            } else {
              next({
                status: 401,
                message: 'Invalid token value'
              })
            }
          })
          .catch(err => {
            next(err)
          })
      }
    } else {
      next({
        status: 401,
        message: 'Invalid token length'
      })
    }
  } else {
    next({
      status: 401,
      message: 'You cannot access this route without a token'
    })
  }
}

module.exports.permission = {
  user: require('./permission/user'),
  auth: require('./permission/auth')
}
