// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express Configurations
var app = express();
var PORT = 8000;

// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Listener
app.listen(PORT, function() {
    console.log("You are now listening on PORT " + PORT);
});
