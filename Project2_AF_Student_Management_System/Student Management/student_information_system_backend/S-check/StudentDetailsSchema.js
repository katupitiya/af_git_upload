var mongoose=require('mongoose');
var Schema=mongoose.Schema;

let StudentDtls=new Schema({

    student_name:{
        type:String
    },
    student_address:{

        type: String
    },
    student_state:{

        type:String
    },
    student_gender:{

        type:String
    },
    student_bday:{

        type:Number
    },
    student_course:{

        type:String
    },
    student_email:{

        type:String
    }
});

mongoose.exports=mongoose.model('StudentDtls',StudentDtls);