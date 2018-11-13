var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var category=require('./routes/category_route');
var category1=require('./routes/category1_route');
var employee=require('./routes/employee_route');
var employee1=require('./routes/employee1_route');
var updatewithemployeeprofile=require('./routes/updateEmployeeProfile');
var items=require('./routes/item_route');
var deleteallitems=require('./routes/deleteAllItem_route');
var stock=require('./routes/stock_route');
var items1=require('./routes/item1_route');
var getstockbyin=require('./routes/GetstockByin_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());

app.use('/category',category);
app.use('/category1',category1);
app.use('/employee',employee);
app.use('/employee1',employee1);
app.use('/updateWithImage',updatewithemployeeprofile);
app.use('/item',items);
app.use('/item1',items1);
app.use('/deleteallitem',deleteallitems);
app.use('/stock',stock);
app.use('/getstockbyin',getstockbyin);
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
});

module.exports = app;
