var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Look in this folder for the html files that will be sent.
app.use(express.static(path.join(__dirname, "./app/public")));

function htmlRoutes(){
    //Want homepage to be catch-all, except for /survey
    app.get("*", (req,res)=>{

        if(req.url !== "/survey"){
            res.sendFile(path.join(__dirname,"./app/public/home.html"));
        }
        else{
            //route for survey page
            app.get("/survey",(req,res)=>{
                res.sendFile(path.join(__dirname, "./app/public/survey.html"));
            })
        }
    });  
}

module.exports.htmlRoutes = htmlRoutes();
