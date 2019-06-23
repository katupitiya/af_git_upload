const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Course=new Schema({


    coursename:{
        type:String
    },
    modulename:{
        type:String
    },
    moduleid:{
        type:String
    },
    instructorid:{
        type:String
    },
    fee:{
        type:String
    }



});



module.exports=mongoose.model('Course',Course);