let http = require("http");


let server = http.createServer(function (req, res) {
    res.setHeader("Content-type", "text/html");
    res.end('<h1> Hello world </h1>');
});

server.listen(1234, "localhost", ()=> console.log("Server started listening on port: "+ 1234);