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

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differences for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            
			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userData);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
}

