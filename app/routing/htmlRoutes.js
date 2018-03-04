// Dependencies
var path = require('path');

// Routing
module.exports = function(app) {
    // Survey
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    // Home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
