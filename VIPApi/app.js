const express = require('express')
const routes = require('./routes/index.js')
const cors = require('cors')
const db = require('./db/index')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
  db.connect()
})
