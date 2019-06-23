

const express=require("express")
const users=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const nodemailer = require("nodemailer");
const Admin=require('../model/Admin.model')

users.use(cors())

process.env.SECRET_KEY='secret'
users.route('/add').post(function (req,res) {


    const userData={
        staffid:req.body.staffid,
        name:req.body.name,
        mobileno:req.body.mobileno,
        address:req.body.address,
        dob:req.body.dob,
        state:req.body.state,
        age:req.body.age,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password
    }


    Admin.findOne({
        email:req.body.email
    })


        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    userData.password=hash
                    Admin.create(userData).then(user=>{
                        res.json({status:user.staffid+'registerd'})




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



    Admin.find(function (err,admin) {

        if(err)
        {

            console.log(err);

        }
        else{


            res.json(admin);

        }

    });



});

users.post('/login',(req,res)=>{

    Admin.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload={

                        _id:user._id,
                        staffid:user.staffid,
                        name:user.name,
                        mobileno:user.mobileno,
                        address:user.address,
                        dob:user.dob,
                        state:user.state,
                        age:user.age,
                        gender:user.gender,
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
                res.send("error")
                //res.json({error:"user does not exist"})
                console.log("user dose not exist")
            }
        })
        .catch(err=>{
            res.send('error:'+err)
        })
})

/*
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
*/
module.exports=users