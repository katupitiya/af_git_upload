require('./model/db');
const express = require('express');
const fileUpload = require('express-fileupload');

const assignmentRouter = require('./routes/Assignment.routes');
const examRouter = require('./routes/Exam.routes');
const app = express();
// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/StudentManagementSystem', {userNewUrlParser: true},(err)=>{
//     if(!err){console.log('MongoDB connection succeeded')}
//     else{console.log('Failed: ' +err)}
// });


app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`../student_information_system_frontend/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

app.listen(5000, () => console.log('Server Started...'));

app.use('/assignment', assignmentRouter);
app.use('/exam', examRouter);
/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'trainbook0123@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'trainBOOK12' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'trainbook0123@gmail.com', // TODO: email sender
    to: 'kalpaniomalka@gmail.com', // TODO: email receiver
    subject: 'Assignments',
    text: 'New Assignment Added!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});