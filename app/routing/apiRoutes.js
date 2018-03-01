var path = require("path");

//import the friends list
var friends = require("../data/friends.js");

module.exports = function (app){
    
    app.get("/api/friends", (req,res)=>{
        res.json(friends.allFriendsArray);

    })

    app.post("/api/friends",(req,res)=>{
        var userData = req.body;

    })
}

