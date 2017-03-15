
var fs = require("fs");
const path = require("path");

var filepath = process.argv[2];
var extension = process.argv[3]


let dirSearcher = function (pathToDir, ext, callback) {
    fs.readdir(pathToDir, function (err, data) {
        if (err) {
            return callback(err);
        }
        var extension = "." + ext;
        var filtered = data.filter((file) => path.extname(file) === extension);
        var myFiltered = "";
        filtered.forEach(function (item) {
            myFiltered += item + "\n";
        });
        callback(null, myFiltered);
    })
};

module.exports = dirSearcher;
