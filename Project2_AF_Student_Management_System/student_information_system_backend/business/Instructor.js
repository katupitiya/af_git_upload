const express=require("express")
const users=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const nodemailer = require("nodemailer");
const Instructor=require('../model/Instructor.model')

users.use(cors())

process.env.SECRET_KEY='secret'
users.route('/add').post(function (req,res) {


    const userData={
        staffid:req.body.staffid,
        instructorname:req.body.instructorname,
        instructormobileno:req.body.instructormobileno,
        instrucoraddress:req.body.instrucoraddress,
        instructordob:req.body.instructordob,
        instructorstate:req.body.instructorstate,
        instuctorage:req.body.instuctorage,
        instructorgender:req.body.instructorgender,
        email:req.body.email,
        password:req.body.password
    }


    Instructor.findOne({
        email:req.body.email
    })


        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    userData.password=hash
                    Instructor.create(userData).then(user=>{
                        res.json({status:user.staffid+'registerd'})



                        let transporter=nodemailer.createTransport({

                            service:'gmail',
                            auth:{

                                user:'maneshmkw@gmail.com',
                                pass:'sudubula'


                            }


                        });

                        let mailOPtion={


                            from:'',
                            to:req.body.email,
                            // to:'jananisarada3@gmail.com',
                            subject:'Instructor Registration',
                            text:'You are succsfully registered by admin to the Texas Wesleyan University system.You can login to the system using ,' +
                                'your username:' +req.body.email+
                                '  your password:'+req.body.password


                        };
                        transporter.sendMail(mailOPtion,function (err,data) {
                            if(err)
                            {

                                console.log('error occur');
                            }

                            else{

                                console.log('mail sent');

                            }
                        });














                    })
                        .catch(err=>{
                            res.send('error:' +err)
                        })
                })
            }else{
                res.json({error:'user already exsists'})
            }
        })
        .catch(err=>{

            res.status(400).send('adding new todo failed');

        })});
users.route('/').get(function (req,res) {



    Instructor.find(function (err,instructor) {

        if(err)
        {

            console.log(err);

        }
        else{


            res.json(instructor);

        }

    });



});


users.route('/delete/:id').get(function (req, res) {
    Instructor.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else
            res.send("ft")
    });
});



users.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Instructor.findById(id, function (err,instructor){
        res.json(instructor);
    });
});

users.post('/update/:id', (req, res)=> {
    const me=req.params.id;

    Instructor.findById(req.params.id, function(err, business) {
        if (!business)
            res.status(404).send("data is not found");
        else {


            res.status(200).json(business);


            business.staffid =req.body.staffid,
            business.instructorname=req.body.instructorname,
            business.instructormobileno=req.body.instructormobileno,
            business.instrucoraddress=req.body.instrucoraddress,
            business.instructordob=req.body.instructordob,
            business.instructorstate=req.body.instructorstate,
            business.instuctorage=req.body.instuctorage,
            business.instructorgender=req.body.instructorgender,

            business.email=req.body.email,
            business.password=req.body.password,








                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    business.password=hash
                    business.save().then(business => {
                        res.json('Update complete');
                    })
                        .catch(err=>{
                            res.send('error:' +err)
                        })
                })








        }
    });
});





users.post('/login',(req,res)=>{

    Instructor.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload={

                        _id:user._id,
                        staffid:user.staffid,
                       instructorname:user.instructorname,
                        instructormobileno:user.instructormobileno,
                        instrucoraddress:user.instrucoraddress,
                        instructordob:user.instructordob,
                        instructorstate:user.instructorstate,
                        instuctorage:user.instructorage,
                        instructorgender:user.instructorgender,
                        email:user.email




                    }
                    let token=jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send("correct")
                }else{
                    //res.json({error:"user dose not exist"})
                    console.log("user dose not exist")

                  res.send("error")

                }
            }else{
                //res.json({error:"user does not exist"})
                console.log("user dose not exist")
                res.send("error")
            }
        })
        .catch(err=>{
            res.send('error:'+err)
        })
})


module.exports=users;

