"use strict";

// **Modules**
import { mainInpAnim } from "./dynamicStyles.js";
import { Todo } from "./Todo.js";


// **DOM elements**
const mainInp = document.getElementById("main-input");
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const detailsInp = document.getElementById("details-input");

// **Startup tasks**
// setting up the mainInput animation
mainInpAnim(mainInp, detailsInp, addBtn);

// rendering the todos
Todo.render(tasksContainer);


// **event handlers**
const insertTodo = () => {
    const title = mainInp.value.trim();
    const details = detailsInp.value.trim();

    if (title) {
        new Todo(title, details, tasksContainer);

        // rendering the todo:
        Todo.render(tasksContainer);

        // clearing the input fields:
        mainInp.value = "";
        detailsInp.value = "";
    }
}


// **operations**
// Adding Todos
addBtn.addEventListener("click", insertTodo);
mainInp.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        insertTodo();
    }
})