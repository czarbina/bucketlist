var orm = require("../config/orm.js");

var thing = {

  selectAll: function(cb) {
    orm.all("list", function(res) {
      cb(res);
    });
  }
  // ,
  // insertOne: function(table, tableCol, valOfCol) {
  //   var queryString = "INSERT INTO ?? (??) VALUES (?)";
  //   console.log(queryString);
  //   connection.query(queryString, [table, tableCol, valOfCol], function(err, result) {
  //     console.log(result);
  //   });
  // },
  // updateOne: function(table, tableCol1, valOfCol1, tableCol2, valOfCol2) {
  //   var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

  //   connection.query(queryString, [table, tableCol1, valOfCol1, tableCol2, valOfCol2], function(err, result) {
  //     console.log(result);
  //   });
  // }
};

module.exports = thing;