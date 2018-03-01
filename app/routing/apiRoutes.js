var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

function apiRoutes(){
    app.get("api/friends", (req,res)=>{
        var allFriends = req.params.friends;

        if(allFriends){
            res.json(friends.allFriendsArray);
            return;
        }

    })

    app.post("/api/friends",(req,res)=>{
        var newFriend = req.body;

    })
}

module.exports.apiRoutes = apiRoutes();