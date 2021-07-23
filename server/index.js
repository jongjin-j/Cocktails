const express = require('express')
const cocktailRoutes = require('./routes/cocktailRoutes')

const app = express()

const PORT = 4000

//app.use(express.json())

app.listen(PORT)

app.use('/', cocktailRoutes)