const express = require('express')
const axios = require('axios')
const newsr=express.Router()

const api = process.env.apiKey;


// // import .env
require('dotenv').config();
// console.log(process.env);

newsr.post('/',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${api}`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=newsr
