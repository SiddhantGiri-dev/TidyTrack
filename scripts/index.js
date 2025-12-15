"use strict";

// **Modules**
import { Todo } from "./Todo.js";
import { mainInpAnim } from "./dynamicStyles/dynamicStylesMain.js";
import { playfulPop, successTing } from "./soundEffects.js";

// **DOM elements**
const mainInp = document.getElementById("main-input");
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const detailsInp = document.getElementById("details-input");

// **Startup tasks**
// setting up the mainInput animation
mainInpAnim(mainInp, detailsInp, addBtn);

// rendering the todos
Todo.renderAll(tasksContainer, true);

// **event handlers**
const insertTodo = () => {
  const title = mainInp.value.trim();
  const details = detailsInp.value.trim();

  if (title) {
    const newTodo = new Todo(title, details, tasksContainer);

    // rendering the todo with a pop sound:
    playfulPop(() => {
      Todo.renderOne(
        newTodo.todoData,
        Todo.length - 1,
        tasksContainer,
        true,
        0
      );
    });

    // clearing the input fields:
    mainInp.value = "";
    detailsInp.value = "";
  }
};

const deleteTodo = (clickedDeleteBtn) => {
  const index = Number(clickedDeleteBtn.dataset.delete);

  Todo.deleteOne(index);

  Todo.renderAll(tasksContainer, false);
};

const openTodo = (todoElement) => {
  Todo.open(todoElement);
};

const closeTodo = (todoElement) => {
  Todo.close(todoElement);
};

// **operations**
// Adding Todos
addBtn.addEventListener("click", insertTodo);
mainInp.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    insertTodo();
  }
});
detailsInp.addEventListener("keydown", (e) => {
  if (e.code == "Enter" && mainInp.value.trim()) {
    insertTodo();
  }
});

// Actions on Todos
tasksContainer.addEventListener("click", (e) => {
  const element = e.target;

  // Deleting a todo
  if (element.matches(".btn-delete")) {
    deleteTodo(element);
  }
  // Opening the details of a todo
  else if (element.matches(".btn-details")) {
    openTodo(element.closest(".task-base"));
  }

  // closing the details of a todo
  else if (element.matches(".btn-close-task")) {
    closeTodo(element.closest(".task-base"));
  }

  // checking off a todo
  else if (element.matches(`.task input[type="checkbox"]`) || element.matches(`.task-base .btn-mark-done`)) {
    successTing();
  }
});
