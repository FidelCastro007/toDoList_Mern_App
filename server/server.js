const express = require('express')
const path = require('path') //we didn't use route it needs
const cors = require('cors')
const bodyParser = require('body-parser')
const ConnectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
console.log('Port:', process.env.PORT)

//Middleware
app.use(bodyParser.json())
app.use(cors());

ConnectDB()

//Routes

//Get USER_POST Route
app.use('/Api/todos',require('./Router/routeTodo'))

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})