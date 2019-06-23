const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentManagementSystem', {userNewUrlParser: true},(err,db)=>{
    if(!err){console.log('MongoDB connection succeeded')}
    else{console.log('Failed: ' +err)}
});


require('./Assignment.model');
require('./Exam.model');