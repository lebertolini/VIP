const mongoose = require('mongoose')

const connect = async () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10
    })
    .then(() => {
      console.log('MongoDB connected.')
    })
    .catch(error => {
      console.error('MongoDB connection error: "' + error + '".')
    })

  mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected.')
    process.exit(0)
  })
}

const close = async () => {
  try {
    // Fechando conexão
    await mongoose.connection.close()
    console.log('MongoDB connection closed')
  } catch (error) {
    // Registrando erro no sistema de log
    console.log('Error closing MongoDB connection', error)
  }
}
// Escutando eventos de desligamento do servidor
process.on('SIGINT', () => {
  close()
  console.log('MongoDB connection disconnected due to server shutdown.')
  process.exit(0)
})

process.on('EHOSTUNREACH', () => {
  close()
  console.log('MongoDB connection disconnected due to server shutdown.')
  process.exit(0)
})

process.on('EADDRNOTAVAIL', () => {
  close()
  console.log(
    'MongoDB connection disconnected due to not being able to connect to the server.'
  )
  process.exit(0)
})

process.on('ETIMEDOUT', () => {
  close()
  console.log(
    'MongoDB connection disconnected due to not being able to connect to the server'
  )
  process.exit(0)
})

// Exportando instância de conexão
module.exports = {
  connect,
  User: require('./entities/user')
}
