var path = require('path');

// Declare Dependencies
var friend = require('../data/friends.js');

// Export Routes
module.exports = function(app) {
    // Get Friend entry
    app.get('/api/friends', function(req, res) {
        res.json(friend);
    });
// Add friends
    app.post('/api/friends', function(req, res) {
        // Grab user input
        var userInput = req.body;
        var userResponse = userInput.scores;

        // Find best friend
        var friendName = '';
        var friendImage = '';
        // Set difference to record matches
        var totalDifference = 1000;

        // Run through friend list
        for (var i = 0; i < friend.length; i++) {
            var difference = 0;
            for (j = 0; j < userResponse.length; j++) {
                difference += Math.abs(friend[i].scores[j] - userResponse[j]);
            }
            if (difference < totalDifference) {
                totalDifference = difference;
                friendName = friend[i].name;
                friendImage = friend[i].photo;
            }
        }

        // Adding new user
        friend.push(userInput);

        res.json({status: 'OK', friendName: friendName, friendImage: friendImage});



    });


};
