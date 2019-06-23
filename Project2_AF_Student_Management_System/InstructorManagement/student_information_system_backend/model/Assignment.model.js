const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    SubjectName : {type: String},
    AssignmentName : {type : String},
    date : {type : Date}
});

mongoose.model('Assignment',assignmentSchema)