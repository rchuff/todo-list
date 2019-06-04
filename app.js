//jshint esversion: 6

let button = document.querySelector("button");
let startSection = document.getElementById("start-page").classList;
let endSection = document.getElementById("list-page").classList;

button.addEventListener("click", function(){
  startSection.toggle("hide");
  startSection.toggle("show");
  endSection.toggle("hide");
  endSection.toggle("show");
});
