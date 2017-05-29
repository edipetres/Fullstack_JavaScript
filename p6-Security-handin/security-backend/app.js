
var _ = require("lodash");
var express = require('express');
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var http = require('http')
var https = require('https');
var fs = require('fs');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var config = require('./prefs/config')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')

let connection = require('./db/db');
var mongoURI = config.mongoURI;

let DBFacade = require('./db/DBFacade')

var bcrypt = require('bcrypt');
const saltRounds = 10;

connection.connect(config.mongoURI, function (err) {
    if (err) throw err;
});

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.JWTSecret;

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // make database call to get user
    DBFacade.findUser(jwt_payload.name, function (err, user) {
        if (err) { next(err) };
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    })
});
passport.use(strategy);

var app = express();
app.use(passport.initialize());

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.json({ message: 'Express is up!' });
});

app.post("/login", function (req, res) {
    if (req.body.name && req.body.password) {
        var name = req.body.name;
        var password = req.body.password;
    }
    // database call to get user
    DBFacade.findUser(name, function (err, user) {
        if (err) throw err;
        if (!user) { return res.status(401).json({ message: "No such user found." }) }

        // Load hash from your password DB. 
        bcrypt.compare(password, user.password, function (err, pwd_res) {
            if (pwd_res) {
                var payload = { name: user.name };
                var token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ message: "ok", token: token, username: user.name });
            } else {
                return res.status(401).json({ message: "passwords did not match" });
            }
        });

    })

});

app.get("/api/books", function (req, res) {
    res.json(DBFacade.getBooks())
});

app.post("/register", function (req, res) {
    if (req.body.name && req.body.password) {
        let name = req.body.name;
        let password = req.body.password;
        bcrypt.hash(password, saltRounds, function (err, hash) {
            // Store hash in your password DB. 
            DBFacade.addUser(name, hash, function (err, data) {
                if (err) {
                    return res.json(err)
                }
                return res.json(data + " was successfully added.")
            });
        });
    } else {
        res.json({ message: "No name and/or password found" })
    }
})

app.get("/secret", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json("Success! You can not see this without a token");
});


// app.listen(3001, function () {
//     console.log('Express is running.');
// });

var sslOptions = {
    key: fs.readFileSync('./prefs/key.pem'),
    cert: fs.readFileSync('./prefs/cert.pem'),
    passphrase: config.pemPassphrase
};

// http.createServer(app).listen(8080)
https.createServer(sslOptions, app).listen(3001);

