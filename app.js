var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listingsRouter = require('./routes/listings');
const servicesRouter = require('./routes/services');
const eventsRouter = require('./routes/events');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listings', listingsRouter);
app.use('/services', servicesRouter);
app.use('/events', eventsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // Provide error details to the template (only show stack/details in development)
  const isDev = req.app.get('env') === 'development';
  const errorLocals = isDev ? err : {};

  // render the error page with explicit locals so the template won't see undefined values
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err && err.message ? err.message : 'An error occurred',
    error: errorLocals
  });
});

module.exports = app;
