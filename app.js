var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
const loggedUserDataMiddleware = require('./middlewares/loggedUserDataMiddleware');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const eventosRouter = require('./routes/eventos');
var concertoRouter = require('./routes/concerto');
const userRegisterRouter = require('./routes/users');
var logMiddleware = require('./middlewares/logSite')
const methodOverride = require('method-override');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( {secret: "verdao@15",
resave: false,
saveUninitialized: false,
}));


app.use(loggedUserDataMiddleware);

app.use(logMiddleware)
app.use('/', indexRouter);
app.use('/concerto', concertoRouter);
app.use('/users', usersRouter);
app.use('/evento', eventosRouter);
app.use('/users', userRegisterRouter)
app.use((req, res) =>{
  return res.status(404).render('not-found');
})


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
