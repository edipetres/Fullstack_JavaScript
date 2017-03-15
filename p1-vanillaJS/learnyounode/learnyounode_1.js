/*var fs = require("fs");

var filepath = process.argv[2];

var buffer = fs.readFileSync(filepath);
var str = buffer.toString();

var stringsArray = str.split("\n");

console.log(stringsArray.length - 1);
*/

var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath,'utf8', function (err, data) {
    if(!err) {
        var lines = data.split("\n").length - 1;
        console.log(lines);
    }
    else {
        console.log("Error.");
    }
})