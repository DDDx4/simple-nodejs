const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/page1',(req,res)=>{
    res.render('page1.ejs')
})

app.listen(port,()=>{
    console.log(`start sever on port ${port}`)
})