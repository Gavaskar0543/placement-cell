const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
//layouts
app.use(expressLayouts);
//layout extract scripts
app.set("layout extractScripts", true)
//layout extaract style
app.set("layout extractStyles", true)

//path
const path = require('path');
//set view engine
app.set('view engine','ejs');
app.set('views','views');
//static pages
app.use(express.static('./assets'));
//sass
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src:'/assets/SCSS',
    dest:'/assets/CSS',
   debug:true,
   outputStyle:'expanded',
   prefix:'/css'
}))
//db
//const db = require('./config/mongoose');

//router
app.use('/',require('./router'));

app.listen(port,function(err){
    if(err){
        console.log('error in running server');
        return;
    }
    console.log(`Yup! server is up on port: ${port}`);
})