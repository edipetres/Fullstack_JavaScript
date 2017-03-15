
let myDirSearcher = require("./learnyounode_6");

myDirSearcher(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        return console.log(err);    
    }
    console.log(data);
})