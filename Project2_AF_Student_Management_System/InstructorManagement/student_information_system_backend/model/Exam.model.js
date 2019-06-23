const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
    Question1 : {type: String},
    Question2 : {type: String},
    Question3 : {type: String},
});

module.exports=mongoose.model('Exam',examSchema)