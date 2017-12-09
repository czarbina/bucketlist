var burger = require("./models/burger.js");
var express = require("express");
var router = express.Router();
// TODO: Figure out if this will house both frontend
// and backend routes... 

module.exports = function(app) {

// TODO: Need to update to route to handlebars files
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/placeholder.html"));
  });

// TODO: Need to update to route to handlebars files
  app.post("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/placeholder.html"));
  });

};
