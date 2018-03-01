var path = require("path");

//import the friends list
var friends = require("../data/friends.js");

module.exports = function (app){
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

