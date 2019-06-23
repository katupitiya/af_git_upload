// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
// ending default



//######################################################################### starting 2
// var express= require('express');
// var mongooes =require('mongoose');
// var bodyParser= require('body-parser');
// var cors= require('cors');
// var studentRout=express.Router();
//
// // var Student =require('./S-check/studentSchema');
// var studentRoute=require('./S-check/studentRoute');
//
//
// var app=express();
// var PORT=3000;
//
// app.use(cors());
// app.use(bodyParser.json());
//
// mongooes.connect('mongodb://127.0.0.1:27017/student',{useNewUrlParser:true});
//
// var connection=mongooes.connection;
//
// connection.once('open',function(){
//
//   console.log("Mongo db established successfully");
//
// });
//
//
// // studentRout.route('/:id').get((req,res)=>{
// //
// //   let id=req.params.id;
// //   Student.findById(id,(err,student)=>{
// //
// //     res.json(student);
// //   });
// //
// // });
// //
// // studentRout.route('/add').post((req,res)=>{
// //
// //   let student=new Student(req.body);
// //
// //   student.save()
// //       .then(student=>{
// //
// //         res.status(200).json({'student':'added successfulyy'});
// //       })
// //       .catch(error=>{
// //
// //         res.status(400).send('failed');
// //       });
// // });
//
// app.use('student',studentRout);
//
//
//
//
//
//
// app.listen(PORT,function(){
//
//   console.log("server is running"+PORT);
// })




//##############################################starting 3 tt1.js related

// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// const cors = require('cors');
// var PORT =3000;
// const app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');//jade default
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// /* Use cors and fileUpload*/
// app.use(cors());
// app.use(fileUpload());
// app.use('/public', express.static(__dirname + '/public'));
//
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   console.log("error unknown");
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
//
// app.post('/upload', (req, res, next) => {
//   console.log(req);
//   let imageFile = req.files.file;
//
//   imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//
//     res.json({file: `public/${req.body.filename}.jpg`});
//   });
//
// })
//
// app.listen(PORT,function () {
//
//   console.log("server running on" +PORT);
//
// })
//
// module.exports = app;


//#############################################test4 check3.js related

const port = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /*
      Files will be saved in the 'uploads' directory. Make
      sure this directory already exists!
    */
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    /*
      uuidv4() will generate a random ID that we'll use for the
      new filename. We use path.extname() to get
      the extension from the original file name and add that to the new
      generated ID. These combined will create the file name used
      to save the file on the server and will be available as
      req.file.pathname in the router handler.
    */
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', upload.single('selectedFile'), (req, res) => {
  /*
    We now have a new req.file object here. At this point the file has been saved
    and the req.file.filename value will be the name returned by the
    filename() function defined in the diskStorage configuration. Other form fields
    are available here in req.body.
  */
  res.send();
});

app.listen(port, () => console.log(`Server listening on port ${port}`));