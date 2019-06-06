//jshint esversion: 6
let button = document.querySelector("button");
let startSection = document.getElementById("start-page").classList;
let endSection = document.getElementById("list-page").classList;

//Check to see if we need to update page from start to todo list
button.addEventListener("click", function(){
  startSection.toggle("hide");
  startSection.toggle("show");
  endSection.toggle("hide");
  endSection.toggle("show");
  getToDos();
});


document.addEventListener("keypress", (e) => {
  let inputField = document.querySelector("input").value;
    if (e.keyCode === 13) {
      newToDo(inputField);
    }
});

newToDo = (inputField) => {
  $.post("/api/todo", {todo: inputField})
  .done((data) => {
    addToDo(data);
    document.querySelector("input").value = "";
  })
  .fail((err) => alert("Failed to add item"));
};

//Get all to do items not completed and add them onto the page
getToDos = () => {
  $.getJSON("/api/todo")
  .done((data) => {
    data.forEach((item) => {
      addToDo(item);
    });
  });
};

//Add each individual item and add an event listener.
addToDo = (item) => {
  let li = $("<li>"+ item.todo + "<span>X</span></li>");
  $("ul").append(li);
  li.data("id", item._id); //Assign the data property to the id
  li.data("complete", item.complete);
  li.click((e)=> {
    if (e.target.innerHTML === "X"){
      deleteItem(li);
    }
    updateItem(li);
  });
};


//User clicks the X then delete item and remove LI
deleteItem = (li) => {
  $.ajax({
    method: 'DELETE',
    url: "/api/todo",
    data: {
      _id: li.data("id")
    }
  })
  .then(()=> li.remove());
};


//Switch data value of complete and update property in database
updateItem = (li) => {
  let currVal = li.data("complete");
  li.data("complete",!(currVal));
  $.ajax({
    method: 'PATCH',
    url: "/api/todo",
    data: {
      _id: li.data("id"),
      complete: li.data("complete")
    }
  }).then((data)=> {
    li.toggleClass("complete");
  });
};
