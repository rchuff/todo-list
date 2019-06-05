//jshint esversion: 6
let button = document.querySelector("button");
let startSection = document.getElementById("start-page").classList;
let endSection = document.getElementById("list-page").classList;

button.addEventListener("click", function(){
  startSection.toggle("hide");
  startSection.toggle("show");
  endSection.toggle("hide");
  endSection.toggle("show");
  var test = $.getJSON("/api/todo")
  .done((data) => {
    alert(data[0]._id);
  })
  .fail(() => alert("Error"))
  .always(()=> alert("Finished"));
});
