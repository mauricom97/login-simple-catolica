const express = require("express")
const app = express()
const port = process.env.PORT || 3352
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true})); // support encoded bodies

app.use(cors())

require('./routes/index')(app)

app.listen(port, function(){
    console.log(`App in port ${port}`)
})