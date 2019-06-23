const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Instructor=new Schema({

    staffid:{

        type:String

    },

    instructorname:{

        type:String

    },
    instructormobileno:{
      type:String
    },
    instrucoraddress:{

        type:String
    },
    instructordob:{

      type:String
    },
    instructorstate:{

        type:String
    },
    instuctorage:{


        type:String

    },
    instructorgender:{


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



module.exports=mongoose.model('Instructor',Instructor);