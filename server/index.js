const express = require('express')
const cocktailRoutes = require('./routes/cocktailRoutes')
const cors = require('cors')

const app = express()

const PORT = 4000

app.use(express.json())
app.use(cors())

app.listen(PORT)

app.use('/', cocktailRoutes)