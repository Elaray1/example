//подключение всех библиотек
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


//создание ссылок
app.get('/', function(req, res) {
  res.render('mainpage');
});
app.get('/registration', function(req, res) {
  res.render('registration');
});
app.get('/aboutme', function(req, res) {
  res.render('aboutme');
});
app.get('/contacts', function(req, res) {
  res.render('contacts');
});


app.listen(3000);
