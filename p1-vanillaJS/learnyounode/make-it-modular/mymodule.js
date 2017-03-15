var fs = require('fs');
var paht = require('path');

module.exports = function printList(path, extension, callback) {

    fs.readdir(path, function (err, items) {
        // check and return early for error
        if (err) {
            return callback(err);
        };

        var list = [];
        items.forEach(function (element) {
            var parts = element.split('.');
            if (parts[parts.length-1] === extension && parts.length > 1){
                list.push(element);
            }
        });
        return callback(err, list)
    })
}