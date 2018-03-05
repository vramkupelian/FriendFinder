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
		for(var i =0 ; i< userResponses.length; i++){
			userResponses[i] = parseInt(userResponses[i]);
		}

		var matchName = "";
		var matchImage = "";
		var differences = [];

		for(var i=0; i<friends.length;i++){
			
			var currentDiff= 0 ;
			
			for (var j=0; j<userResponses.length;j++){
				currentDiff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			differences.push(currentDiff);
		}

		//Index of Match
		var indexOfMinDiff = differences.indexOf(Math.min(...differences));
		console.log(indexOfMinDiff);

		matchName = friends[indexOfMinDiff].name;
		matchImage = friends[indexOfMinDiff].photo;
		console.log(matchName);
		// Add new user
		friends.push(userData);

	// 	// Send appropriate response
	// 	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
}

