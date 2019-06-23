const express = require('express');
//const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

//const Assignment = require('../model/Assignment.model');
const mongoose = require('mongoose');
const assignment = mongoose.model('Assignment');
app.use(bodyParser.json());

app.route('/').get( function(req,res) {
    assignment.find(function(err, assignments){
        if(err){
            console.log(err);
        }
        else{
            res.json(assignments)
        }
    });
});

app.post('/add', function(req, res){
    new assignment({
        SubjectName: req.body.SubjectName,
        AssignmentName: req.body.AssignmentName,
        date : req.body.date
    }).save(function(err, doc){
        if(err) res.json('you failed'+err);
        else res.send('Success');
    });
});

app.post("/update",(req,res)=>{
    // assignment.update({_id:req.assignment.params.id},
    //     {
    //         SubjectName: req.body.SubjectName,
    //         AssignmentName: req.body.AssignmentName
    //     },function(err){
    //             if(err)res.json(err);
    //             else res.redirect('/assignment/'+req.params.id);
    //         });
    assignment.findOneAndUpdate({_id: req.body._id}, req.body,{new:true},(err,doc)=>{
        if(!err){
            res.send('updated')
        }else{
            console.log('Error during update')
        }
    })

});


app.delete("/delete/:id",async(req,res)=>{
    try{
        // const post = await Assignment.findByIdAndUpdate({

        //})
    }
    catch(err){}
})




module.exports = app;