const express = require('express');
const CookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/routes');
const cookieParser = require('cookie-parser');

const app = express()

const port = process.env.PORT || 5000

mongoose.connect('mongodb://localhost:27017/app_financeiro', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log('Connected!')
    }
})

app.use(cors())

app.use(cookieParser())
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})
