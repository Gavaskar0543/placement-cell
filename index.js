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
//sass
const sassMiddleware = require('node-sass-middleware');
//config
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}))
//router
app.use('/',require('./router'));

app.listen(port,function(err){
    if(err){
        console.log('error in running server');
        return;
    }
    console.log(`Yup! server is up on port: ${port}`);
})