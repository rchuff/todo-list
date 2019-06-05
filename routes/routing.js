//jshint esversion: 6

const express = require("express");
const router = express.Router();
const db = require("../models/model.js");
const bodyParser = require("body-parser");


router.route("/")
.get((req,res) => {
  db.Item.find({complete: false}, function(err, docs){
    res.json(docs);
  });
})
.post((req,res) => {
  let todo = req.body.todo;
  let promise = db.Item.create({
    todo: todo,
    complete: false
  });
  promise.then((data)=>{
    res.json(data);
  }).catch(()=> console.log(err));
})
.patch((req, res) => {
  let id = req.body._id;
  let comStatus = req.body.completed;
  console.log(comStatus);
  db.Item.findByIdAndUpdate(id, {complete: false}, function(err, doc){
    res.json(doc);
  });
})
.delete((req, res) => {
  let deleteItem = req.body._id;
  db.Item.findByIdAndRemove(deleteItem, function(err, doc){
    res.json(doc);
  });
});


module.exports = router;
