var express=require('express');
var cors=require('cors');
var bodyparser=require("body-parser");
var app=express();
var mongoose=require('mongoose');
var port=process.env.PORT||5000;
const todoRoutes=express.Router();

const nodemailer = require("nodemailer");
app.use(bodyparser.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/student_information_system').then(()=>{


    console.log("connect to the db");




}).catch(err=>{

    console.log(err);


});



const Users=require('./business/Student')
app.use('/users',Users)
const Instructor=require('./business/Instructor')
app.use('/instructor',Instructor);

const Course=require('./business/Course')
app.use('/course',Course);

const Admin=require('./business/Admin')
app.use('/Admin',Admin);

app.listen(port,()=>{

   console.log('server running on port:'+port)
});