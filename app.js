const express = require('express')
const app=express()

const port = process.env.PORT;

// // import .env
require('dotenv').config();
// console.log(process.env);

const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/',require('./routes/news'))
app.use('/',require('./routes/search'))


app.set('views','./views')

app.listen(port,()=> console.log("started"))
