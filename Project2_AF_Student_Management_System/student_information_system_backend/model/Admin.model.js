const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Admin=new Schema({

    staffid:{

        type:String

    },

    name:{

        type:String

    },
    mobileno:{
        type:String
    },
    address:{

        type:String
    },
    dob:{

        type:String
    },
    state:{

        type:String
    },
    age:{


        type:String

    },
    gender:{


        type:String

    },
    email:{


        type:String,
        required: true

    },
    password:{

        type:String,
        required: true

    }


});



module.exports=mongoose.model('Admin',Admin);