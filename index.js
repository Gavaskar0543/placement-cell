const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');



const sassMiddleware = require('node-sass-middleware');
const path = require('path');

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'assets', 'SCSS'), // Update the path to the SCSS source directory if necessary
    dest: path.join(__dirname, 'assets', 'CSS'), // Update the path to the CSS destination directory if necessary
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css',
  })
);


//set view engine
app.set('view engine','ejs');
app.set('views','views');
//layouts
app.use(expressLayouts);
//layout extract scripts
app.set("layout extractScripts", true)
//layout extaract style
app.set("layout extractStyles", true)
app.use(express.static('./assets'));

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