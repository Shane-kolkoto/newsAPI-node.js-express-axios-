const { response } = require('express');
const express = require('express');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b2ee9e62e2314aeaa334dc22ebb22a95');

const allNews = express.Router();

// Setting the dates 
let today = new Date();
today.setMonth(today.getMonth() )
// console.log('today: ', today)

let month = new Date();
month.setMonth(month.getMonth() - 1)
// console.log('month: ', month)

// Get all post within a month apart
allNews.get('/', async (req, res)=>{
    newsapi.v2.everything({
        q: 'top-headlines',
        from: month,
        to: today,
        language: 'en',
        sortBy: 'relevancy',
        page: 1
      }).then(res => {           
         console.log(res)
      })

})
module.exports=allNews

