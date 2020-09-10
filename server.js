const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('express')
const morgan = require('morgan')
dotenv.config()
const app = express()

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use('/', (req,res) => res.send('Hello'))

const PORT =  process.env.PORT

app.listen(PORT,console.log(`AF runing in:${process.env.NODE_ENV} on port :${PORT}`))