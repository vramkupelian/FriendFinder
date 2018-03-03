var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//bodyParser middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//directory to pull html files
app.use(express.static(path.join(__dirname, "./app/public")));

//include these route files and app passing into that function should use express.
var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Friend finder is working on port #" + PORT);
});