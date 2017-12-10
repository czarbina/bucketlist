var express = require("express");
var router = express.Router();
var bucketlist = require("../models/model.js");

// router.get("*", function(req,res){
// 	res.redirect("/")
// })

router.get("/", function(req, res) {
  bucketlist.all(function(data) {
    var hbsObject = {
      bucketlist: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/bucketlist", function(req, res) {
  bucketlist.create([
    "item", "accomplished"
  ], [
    req.body.item, req.body.accomplished
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/bucketlist/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bucketlist.update({
    accomplished: req.body.accomplished
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/bucketlist/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  bucketlist.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;