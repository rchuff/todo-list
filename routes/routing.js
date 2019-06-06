//jshint esversion: 6

const express = require("express"),
  router = express.Router(),
  db = require("../models/model.js"),
  bodyParser = require("body-parser"),
  routeLogic = require("./logic.js");

//routes for CRUD API requests

router.route("/")
.get((req,res) => {
  routeLogic.findItems(req,res);
})
.post((req,res) => {
  routeLogic.createItem(req,res);
})
.patch((req, res) => {
  routeLogic.updateItem(req,res);
})
.delete((req, res) => {
  routeLogic.deleteItem(req,res);
});


module.exports = router;
