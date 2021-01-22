const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')

//Middleware (reads req.body json)
app.use(express.json())

//connect database
connectDB()

//routes
app.use('/contacts', require('./routes/contact'))

//run server
const port = process.env.PORT || 5000
app.listen(port, err => err ? console.log(err) : console.log(`server is running on port ${port}`))

