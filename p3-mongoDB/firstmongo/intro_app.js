var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection url
var url = "mongodb://localhost:27017/classdemo";

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents')

  // Find some documents
  collection.find({ 'a': 3 }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

var insertDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    { a: 1 }, { b: 2 }, { c: 3 }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var updateDocument = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function (err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
};

MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Conneceted successfully to the server!")
  insertDocuments(db, function () {
    updateDocument(db, function () {
      findDocuments(db, function () {
        db.close();
      })
    });
  });
});

console.log("Git update");

