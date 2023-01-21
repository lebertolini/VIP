const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  login: {
    username: String,
    password: String
  },
  informations: {
    name: {
      first: String,
      last: String
    }
  }
})

module.exports = mongoose.model('User', userSchema)
