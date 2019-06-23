const express = require('express');
//const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

//const Assignment = require('../model/Assignment.model');
const mongoose = require('mongoose');
const exam = mongoose.model('Exam');
app.use(bodyParser.json());

app.route('/').get( function(req,res) {
    exam.find(function(err, exams){
        if(err){
            console.log(err);
        }
        else{
            res.json(exams)
        }
    });
});

app.post('/add', function(req, res){
    new exam({
        Question1: req.body.Question1,
        Question2: req.body.Question2,
        Question3: req.body.Question3,
    }).save(function(err, doc){
        if(err) res.json('you failed'+err);
        else res.send('Success');
    });
});

// app.put("/update/:id",function(req,res){
//     exam.update({_id:req.exam.params.id},
//         {
//             SubjectName: req.body.SubjectName,
//             AssignmentName: req.body.AssignmentName
//         },function(err){
//             if(err)res.json(err);
//             else res.redirect('/assignment/'+req.params.id);
//         });
//
// });
//
//
// app.delete("/delete/:id",async(req,res)=>{
//     try{
//         // const post = await Assignment.findByIdAndUpdate({
//
//         //})
//     }
//     catch(err){}
// })
//



module.exports = app;