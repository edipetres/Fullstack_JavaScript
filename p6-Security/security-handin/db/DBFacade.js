let connection = require('./db')

module.exports.findUser = function (username, callback) {
    var db = connection.get();

    var collection = db.collection('user');
    collection.findOne({ 'name': username }, function (err, user) {
        if (err) return callback(err)
        return callback(err, user)
    })
}

// If user was successfully added, returns the username
module.exports.addUser = function (username, password, callback) {
    var db = connection.get();

    var users = db.collection('user');
    users.findOne({ name: username }, function (err, data) {

        if (!data) {
            users.insert({ name: username, password: password }, function (err, data) {
                if (err) { return callback(err) }
                if (data.insertedCount === 1) {
                    console.log(data.ops[0]._id)
                    return callback(null, data.ops[0].name)
                }
                return callback({ error: "something went wrong" }, data)
            })
        } else {
            return callback({ error: "User already exists" });
        }
    })
}

module.exports.getBooks = function (callback) {
    books = [
        { id: 1, title: "How to Learn JavaScript", info: "Study hard" },
        { id: 2, title: "How to Learn ES6", info: "Complete all exercises :-)" },
        { id: 3, title: "How to Learn React", info: "Complete all your CA's" },
        { id: 4, title: "How to become a specialist in Computer Science", info: "Don't drink beers, until Friday" },
    ]
    return books;
}