var path = require("path");

var friends = require("../data/friends.js");
module.exports = function (app){
    //Want homepage to be catch-all, except for /survey and /api/friends
    app.get("/survey",(req,res)=>{
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
  
    // app.get("*", (req,res)=>{

    //     if(req.url !== "/api/friends"){
            app.get("/",(req,res)=>{
                res.sendFile(path.join(__dirname,"../public/home.html")); 
            })
    //     }
    // })
}


