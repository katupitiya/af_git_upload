const express=require("express")
const course=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const StudentD=require('./StudentDetailsSchema');
StudentD.use(cors())

process.env.SECRET_KEY='secret'

// course.post('/addcourse',(req, res)=>{
//     const userData={
//         coursename:req.body.coursename,
//         modulename:req.body.modulename,
//         moduleid:req.body.moduleid,
//         instructorid:req.body.instructorid,
//         fee:req.body.fee
//     }
//     Course.create(userData).then(user=> {
//         res.json({status: 'registerd'})
//     })
// })

StudentD.route('/').get(function (req, res) {
    StudentD.find(function (err, student) {

        if (err) {

            console.log(err);

        } else {


            res.json(student);

        }

    });
})


// course.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Course.findById(id, function (err,course){
//         res.json(course);
//     });
// });


StudentD.route('/update/:id').post(function (req, res) {
    Course.findById(req.params.id, function(err, StudentD) {
        if (!StudentD)
            res.status(404).send("data is not found");
        else {

            StudentD.student_name=req.body.student_name;
            StudentD.student_address=req.body.student_address;
            StudentD.student_state=req.body.student_state;
            StudentD.student_gender=req.body.student_gender;
            StudentD.student_bday=req.body.student_bday;
            StudentD.student_course=req.body.student_course;
            StudentD.student_email=req.body.student_email;


            StudentD.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


// course.route('/delete/:id').get(function (req, res) {
//     Course.findByIdAndRemove({_id: req.params.id}, function(err, business){
//         if(err) res.json(err);
//         else
//             res.send("ft")
//     });
// });





module.exports=StudentD