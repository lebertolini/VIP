const authUser = userService => async (request, response, next) => {
  try {
    const user = await userService.generateToken(request.user)
    response.set({
      Authorization: `Bearer ${user.token.value}`
    })
    response.json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authUser
}
