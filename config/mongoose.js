const mongoose = require('mongoose');
//mongoose.connect("mongodb+srv://gavaskar:V.gu2PSzC7cLWLa@cluster0.jivfwuj.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect('mongodb://127.0.0.1:8000/placementcell');
const db = mongoose.connection;

// db.on(console.error.bind(console,'error in connecting database'));
db.once('open',function(){
    console.log('mongodb::connected successfully');
})
module.exports = db;