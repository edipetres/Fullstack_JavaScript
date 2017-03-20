var assert = require('assert')
var connection = require("../db/db")
var ObjectId = require('mongodb').ObjectID

module.exports.allJokes = function (callback) {
    var db = connection.get();

    var collection = db.collection("jokes");
    collection.find({}).toArray(function (err, docs) {
        if (err) { return callback(err, docs) };
        console.log("Err: " + err);
        return callback(err, docs);
    });
};

module.exports.findJoke = function (id, callback) {
    var db = connection.get();
    var collection = db.collection('jokes');
    collection.find(ObjectId(id)).toArray(function (err, docs) {
        if (err) {
            return callback(err);
        }
        return callback(err, docs);
    });
};

module.exports.addJoke = function (jokeToAdd, callback) {
    var db = connection.get();
    var collection = db.collection('jokes');
    try {
        collection.insertOne(jokeToAdd);
    } catch (e) {
        console.log(e);
    }
    connection.close();
};

