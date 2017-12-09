var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;

// Tells express to use public folder for all
// static files
app.use(express.static("public"));

// Helps parse request body information.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// TODO: May not need to require here
var mysql = require("mysql");

// Imports routes and gives our server access to them
var routes = require("./controllers/bucketlist_controller.js");

// Tells express to utilize burgers_controllers.js
// When on home page?
app.use("/", routes);


app.listen(port);
