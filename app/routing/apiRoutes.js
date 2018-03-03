var path = require("path");

//import the friends list
var friends = require("../data/friends.js");

module.exports = function (app){
    //list of all friends
    app.get("/api/friends", (req,res)=>{
        res.json(friends);
    })

    // Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userData = req.body;

		var userResponses = userData.scores;

	

		// Add new user
		friends.push(userData);

	// 	// Send appropriate response
	// 	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
}

