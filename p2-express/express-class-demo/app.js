const express = require("express");
const app = express();

app.listen(3333, () => console.log("Server started."));

app.use(function(req,res, next){
    console.log("Time: "+Date.now());
    process.argv.forEach(arg => console.log("arg: "+arg));
    next();
})

app.use(function(req,res,next){
    req.status = "SuperUser";
    next();
})

app.get("/", (req,res) => {
    const status = req.status;
    res.send("Hello there! " + status);
});

app.get("/world", (req,res) => {
    res.send("World!");
});
