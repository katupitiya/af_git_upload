var express= require('express');
var mongooes =require('mongoose');
var bodyParser= require('body-parser');
var cors= require('cors');

var app=express();
var PORT=5000;

app.use(cors());
app.use(bodyParser.json());

mongooes.connect('mongodb://127.0.0.1:27017/student',{useNewUrlParser:true});

var connection=mongooes.connection;

connection.once('open',function(){

    console.log("Mongo db established successfully");

});

app.listen(PORT,function(){

    console.log("server is running"+PORT);
})

