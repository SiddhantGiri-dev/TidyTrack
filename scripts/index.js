"use strict";

import { mainInpAnim } from "./dynamicStyles.js";
import { Todo } from "./todo.js";

const mainInp = document.getElementById("main-input");
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const detailsInp = document.getElementById("details-input");

mainInpAnim(mainInp, detailsInp, addBtn);

const insertTodo = () => {
    const title = mainInp.value.trim();
    const details = detailsInp.value.trim();

    if (title) {
        const todo = new Todo(title, details, tasksContainer);

        // clearing the input fields:
        mainInp.value = "";
        detailsInp.value = "";
    }
}

// Adding Todos
addBtn.addEventListener("click", insertTodo);
mainInp.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        insertTodo();
    }
})