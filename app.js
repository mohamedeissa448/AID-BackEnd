var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRoute');
var organizationsRouter=require('./routes/organizationsRouter');
var AidedPeopleRouter=require('./routes/AidedePeopleRouter');
var filesRouter=require('./routes/filesRouter');
var servicesRouter=require('./routes/servicesRouter')
const passport = require('passport');
require('./passport');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mongoose=require("mongoose");
mongoose.connect('mongodb+srv://admin:admin@cluster0-f7cep.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true
}).then(()=>{console.log('connected to DB')})
.catch(()=>{console.log('not connected to DB')})
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
//app.options('*', cors()) // enable pre-flight request for DELETE request
/*app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Orign","*")
  res.header("Access-Control-Allow-Headers","*")
  if(req.method=="OPTIONS"){
    res.header("Access-Control-Allow-Methods","*");
    return res.status(200).send({})
  }
})*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/organizations',passport.authenticate('jwt', {session: false}), organizationsRouter);
app.use('/aidedPeople', AidedPeopleRouter);
app.use('/files',filesRouter);
app.use('/services',servicesRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log("errrrror",err)
});

module.exports = app;
