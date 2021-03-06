var express = require('express');
var app = express();
var path = require('path');
var indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;