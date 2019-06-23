

const express=require("express")
const course=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const Course=require('../model/course.model')
course.use(cors())

process.env.SECRET_KEY='secret'

course.post('/addcourse',(req, res)=>{
    const userData={
        coursename:req.body.coursename,
        modulename:req.body.modulename,
        moduleid:req.body.moduleid,
        instructorid:req.body.instructorid,
        fee:req.body.fee
    }
    Course.create(userData).then(user=> {
        res.json({status: 'registerd'})
    })
})

course.route('/').get(function (req, res) {
    Course.find(function (err, instructor) {

        if (err) {

            console.log(err);

        } else {


            res.json(instructor);

        }

    });
})


course.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Course.findById(id, function (err,course){
        res.json(course);
    });
});


course.route('/update/:id').post(function (req, res) {
    Course.findById(req.params.id, function(err, course) {
        if (!course)
            res.status(404).send("data is not found");
        else {

                course.coursename=req.body.coursename;
                course.modulename=req.body.modulename;
                course.moduleid=req.body.moduleid;
                course.instructorid=req.body.instructorid;
                course.fee=req.body.fee;


            course.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


course.route('/delete/:id').get(function (req, res) {
    Course.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else
            res.send("ft")
    });
});





module.exports=course