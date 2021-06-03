
const express = require('express')
const axios = require('axios')
const newsAPI = express.Router()

// // import .env
require('dotenv').config();
// console.log(process.env);


const api = process.env.apiKey;

newsAPI.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=za&' +
          `apiKey=${api}`;

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

        // console.log(news_get);
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=newsAPI
