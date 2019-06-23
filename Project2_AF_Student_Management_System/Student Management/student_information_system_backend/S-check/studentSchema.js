var mongoose=require('mongoose');
var Schema=mongoose.Schema;

let Student=new Schema({

    student_id:{
        type:String
    },
    Subject_code:{

        type: String
    },
    date:{

        type:Date
    }
});

mongoose.exports=mongoose.model('Student',Student);