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
                            subject:'testing script',
                            text:'it works'


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
            }
        })
        .catch(err=>{
            res.send('error:'+err)
        })
})


module.exports=users;

/*
const express=require("express")
const users=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const User=require('./User')
users.use(cors())

process.env.SECRET_KEY='secret'

users.post('/register',(req,res)=>{
    const userData={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password
    }

    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    userData.password=hash
                    User.create(userData).then(user=>{
                        res.json({status:user.first_name+'registerd'})
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
            res.send('error:' + err)
        })
})

users.post('/login',(req,res)=>{

    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload={
                        _id:user._id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email
                    }
                    let token=jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send(token)
                }else{
                    //res.json({error:"user dose not exist"})
                    console.log("user dose not exist")
                }
            }else{
                //res.json({error:"user does not exist"})
                console.log("user dose not exist")
            }
        })
        .catch(err=>{
            res.send('error:'+err)
        })
})

users.get('/profile',(req,res)=>{
    var decoded=jwt.verify(req.headers['authorization'],process. env.SECRET_KEY)

    User.findOne({
        _id:decoded._id
    })
        .then(user=>{
            if(user){
                res.json({status:User.email})
            }else{
                // res.send("user does not exist")
                console.log(user)
            }

        }).catch(err=>{
        res.send('error:'+err)
    })

})

module.exports=users*/