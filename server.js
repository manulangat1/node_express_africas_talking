const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const UssdMenu = require('ussd-menu-builder')
dotenv.config()
const app = express()


var menu = new  UssdMenu()
// initialise africas talking 
const credentials = {
    apiKey: process.env.API_KEY,         // use your sandbox app API key for development in the test environment
    username: 'sandbox',      // use 'sandbox' for development in the test environment
};
const Africastalking = require('africastalking')(credentials);
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


// import your rooutes here 
const Men = require('./routes')
app.use('/',Men)


app.use('/', (req,res) => res.send('Hello'))

const PORT =  process.env.PORT

app.listen(PORT,console.log(`AF runing in:${process.env.NODE_ENV} on port :${PORT}`.yellow.underline))