var connection = require("../db/db")
var db = connection.get();

var findJokes = function (db, callback) {
    var collection = db.collection("jokes");

    collection.find({}).toArray(function (err, docs) {
        console.log("found these " + docs);
    });
};

var connection_string = "mongodb://localhost/classdemo";
connection.connect(connection_string, function (err) {
    if (err) {
        console.log("Error with connect: " + err);
    }
    else {
        var conn = connection.get()
        console.log("jokes collection: " + conn.collection('jokes'));
        jokesCollection = conn.collection("jokes");
        jokesCollection.find({}).toArray(function (err, docs) {
            if (err) { console.log("Error: " + err) }
            else {
                console.log("Docs: "+ docs)
            }
        });
    }
})

