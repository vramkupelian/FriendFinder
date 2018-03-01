var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

//bodyParser middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//directory to pull html files
app.use(express.static(path.join(__dirname, "./app/public")));

var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app);

app.listen(port, function(){
    console.log("Friend finder is working on port #" + port);
});