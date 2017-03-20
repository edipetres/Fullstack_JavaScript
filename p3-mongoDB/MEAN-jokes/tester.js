var connection = require('../MEAN-jokes/db/db')
var facade  = require('./model/jokes')

var connection_string = "mongodb://localhost/test";
connection.connect(connection_string, function (err, db) {
    facade.addJoke({"joke":" My funniest new joke","type":["short","alcohol","quote"],"reference":{"author":"Someone","link":""}}, function(err, res) {
        console.log("err " + err);
        console.log("res " + res);
    })

});