//jshint esversion: 6
const db = require("../models/model.js"),
  bodyParser = require("body-parser");


//Finds all ToDo List items for list-page
module.exports.findItems = (req, res)=> {
  db.Item.find({complete: false}, function(err, docs){
    res.json(docs);
  });
};

module.exports.createItem = (req,res) => {
  let todo = req.body.todo;
  let promise = db.Item.create({
    todo: todo,
    complete: false
  });
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=> res.send(err));
};

module.exports.updateItem = (req,res) => {
  let id = req.body._id;
  let completed = req.body.complete;
  db.Item.findByIdAndUpdate(id, {complete: completed}, function(err, doc){
    res.json(doc);
  });
};

module.exports.deleteItem = (req,res) => {
  let deleteItem = req.body._id;
  db.Item.findByIdAndRemove(deleteItem, function(err, doc){
    res.json(doc);
  });
};
