var favicon = require('serve-favicon');
var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser')

var app = express();

app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", function(req,res) { res.send('Hello world!') });

var names = ['Edmond','Edd','Eddie'];
app.get('/form', function (req, res) {
    res.send("Hi: "+names.join(",")+"<form method='post'><input name='name'></form>");
});

app.post('/form', function (req, res) {
    names.push(req.body.name);
    console.log("Req body: " + req.body)
    res.redirect('/form');
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);  //Make sure you understand this line
});

if (app.get('env') === 'development') {
    console.log("In here!!!");
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send("<h1>Sorry there was a problem: " + err.message + "</h1>");
        throw new Error("UPPS!");
        next();
    });
}

module.exports = app;

