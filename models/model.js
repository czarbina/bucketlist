var orm = require("../config/orm.js");

var bucketlist = {
	all: function(cb) {
		orm.all("bucketlist", function(res) {
			cb(res);
		});
	},

	create: function(cols, vals, cb) {
    orm.create("bucketlist", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("bucketlist", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("bucketlist", condition, function(res) {
      cb(res);
    });
  }

};

module.exports = bucketlist;