var orm = require("./config/orm.js");

var models = {

// Find all the burgers ordering by id.
orm.selectAll("*", burgers", "id");

// Add a new burger to the bucketlist of burgers
// TODO: FIGURE OUT HOW TO GENERALIZE BURGER VALUE 
orm.insertOne("burgers", "burgers_name", "Yummy burger");

// This will probably update the devoured status to true
// TODO: FIGURE OUT HOW TO GENERALIZE ID VALUE 
orm.updateOne("burgers", "devoured", "true", "id","3");
}

module.exports = models;