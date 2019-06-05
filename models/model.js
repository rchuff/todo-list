//jshint esversion: 6
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/list', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.Promise = Promise;

let todoItemSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  complete: Boolean
});


const Item = mongoose.model("Item",todoItemSchema);

module.exports.Item = Item;
