var path = require("path");

var friends = require("../data/friends.js");
module.exports = function (app){ 
    //homepage   
    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"../public/home.html")); 
    })    
    //survey
    app.get("/survey",(req,res)=>{
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    //catch-all to home page
    app.use(function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })
}


