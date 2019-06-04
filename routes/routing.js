//jshint esversion: 6

const express = require("express");
const router = express.Router();

router.route("/")
.get((req,res) => {
  res.json({user: "Ryan"});
})
.post((req,res) => {
  res.send("Post request on the router side.");
});


module.exports = router;
