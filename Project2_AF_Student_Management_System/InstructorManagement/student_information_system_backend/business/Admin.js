

const express=require("express")
const users=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")



const User=require('../model/Student.model')
users.use(cors())

process.env.SECRET_KEY='secret'

users.post('/register',(req,res)=>{
    const userData={
        name:req.body.name,
        address:req.body.address,
        state1:req.body.state1,
        gender:req.body.gender,
        dob:req.body.dob,
        course:req.body.course,

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
                        res.json({status:user.email+'registerd'})

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

users.route('/').get(function (req,res) {
    User.find(function (err, instructor) {

        if (err) {

            console.log(err);

        } else {


            res.json(instructor);


        }

    });

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
                        name:user.name,
                        address:user.address,
                        state1:user.state1,
                        gender:user.gender,
                        dob:user.dob,
                        course:user.course,
                        email:user.email,
                        password:user.password

                    }
                    let token=jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send("correct")
                }else{
                    //res.json({error:"user dose not exist"})
                    console.log("user dose not exist")


                    res.send("error");

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


module.exports=users