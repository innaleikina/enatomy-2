var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// var path = require("path");
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/enatomy2";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Routes
require("./routes/frontend")(app);
// require("./routes/articlesRoutes")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
