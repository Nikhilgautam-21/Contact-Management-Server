const express = require("express");
const routes = require('./routes/api');
var app = express();
var bodyParser = require('body-parser');
const mongoose  = require('mongoose');  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/contact',{useNewUrlParser:true});
mongoose.Promise =global.Promise;

const port = process.env.port || "8000";
//CORS Solution

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, OPTIONS, PUT');
    next();
  });


app.use('/api',routes);



app.listen(port);
console.log("Server Listening at port "+port);