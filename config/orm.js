
var connection = require("./connection.js");

var orm = {
  selectAll: function(whatToSelect, table, tableCol) {
    var queryString = "SELECT ? FROM ?? ORDER BY ?? DESC";
    connection.query(queryString, [whatToSelect, table, tableCol], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(table, tableCol, valOfCol) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, tableCol, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, tableCol1, valOfCol1, tableCol2, valOfCol2) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [table, tableCol1, valOfCol1, tableCol2, valOfCol2], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;