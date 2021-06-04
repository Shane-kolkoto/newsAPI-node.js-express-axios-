
const express = require('express')
const axios = require('axios')
const newsAPI = express.Router()
// // import .env
require('dotenv').config();
// console.log(process.env);

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./storage');


const api = process.env.apiKey;

newsAPI.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=za&' +
          `apiKey=${api}`;

        const news_get =await axios.get(url)
        const articles = news_get.data.articles
        // console.log(articles)
        res.render('news',{articles:news_get.data.articles})
        
        // Store to localstorage
        localStorage.setItem('api', JSON.stringify(
            news_get.data.articles
        ));
        
        // console.log(localStorage.getItem('api'));

        // console.log(news_get);
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=newsAPI
