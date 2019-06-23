const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({

    name:{
        type:String
    },
    address:{
        type:String
    },

    state1:{
        type:String,
        required:true

    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('user',UserSchema)