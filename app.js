//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routing.js");

const app = express();



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/api/todo", router);

app.listen(3000, () => console.log("Server now running on port 3000"));
