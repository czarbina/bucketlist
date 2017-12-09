var express = require("express");

var router = express.Router();

var bucketlist = require("../models/bucketlist.js");

router.get("/", function(req, res) {
  bucketlist.selectAll(function(data) {
    var hbsObject = {
      list: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;