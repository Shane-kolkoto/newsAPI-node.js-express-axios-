const express = require('express');
const { min } = require('moment');
const app = express()

require('dotenv').config();

const port = process.env.PORT;

const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }))


// Testing

app.use('/news', require('./routes/testing/allNews.js'))

app.use('/',require('./routes/news.js'))
app.use('/',require('./routes/search.js'))






app.set('views','./views')

app.listen(port,()=> console.log(`http://localhost:${port}`))



