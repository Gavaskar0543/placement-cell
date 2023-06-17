const express = require('express');
const port = 8000;
const app = express();
//path
const path = require('path');
//set view engine
app.set('view engine','ejs');
app.set('views','views');
//static pages
app.use(express.static('./assets'));
//db
const db = require('./config/mongoose');

//router
app.use('/',require('./router'));

app.listen(port,function(err){
    if(err){
        console.log('error in running server');
        return;
    }
    console.log(`Yup! server is up on port: ${port}`);
})