var express= require('express');
var studentRoute =express.Router();

let Student=require('./studentSchema');


studentRoute.route('./add').post(function (req,res) {

    let student =new Student(req.body);
    student.save()
        .then(student=>{

            res.status(200).json({'student':'added'});
        })
        .catch(err=>{

            res.status(400).send("failed");
        });

});

studentRoute.route('/delete/:id').get(function (req,res) {

    Student.findByIdAndRemove({_id:req.params.id},function (err,student) {

        if(err)res.json(err);
        else res.json('removed');
    });

});

module.exports=studentRoute;