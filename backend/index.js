const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const cors = require('cors');

//db
require('../backend/db/mongoose')

app.use(cors());


//parser
app.use(bodyParser.json())

//ścieżki. Dzięki temu, że zapisałem tu /api/ jest to automatycznie dodawane do wszystkich ścieżek
app.use('/api/', apiRouter)

//server
app.listen(port, function () {
  console.log(`nasłuchiwanie na porcie ${port}`)
})
