import allTodos, { addTodo, deleteTodo } from "./data.js";
import { animateTodo } from "./dynamicStyles/dynamicStylesMain.js";

let todos = allTodos;

export class Todo {
  constructor(title, details) {
    this.todoData = {
      title,
      details,
      subTodos: [],
    };

    // updating the localstorage and the local todos array:
    todos = addTodo(this);
  }

  static get length() {
    return todos.length;
  }

  static set length(len) {
    return new Error("Cannot set length directly!");
  }

  static renderOne(todo, index, insertContainer, playAnimation, delay) {
    const element = document.createElement("div");

    element.classList.add("task");
    element.title = "Drag to change order";
    element.innerHTML = `<input type="checkbox" title="Mark as done" />
    <h3>${todo.title}</h3>
    <p>
    ${todo.details}
    </p>
    <div class="btns-container">
    <button class="button-round btn-details">&#128462; Details</button>
    <button class="button-round btn-delete" data-delete="${index}">&#128462; Delete</button>
    </div>`;

    // animation's implementation
    if (playAnimation) {
      animateTodo(element, delay);
    }

    // inserting the task element at the top in the provided contianer
    insertContainer.insertAdjacentElement("afterbegin", element);
  }

  static renderAll(insertContainer, playAnimation) {
    // enptying the todos container
    insertContainer.innerHTML = "";

    // rendering the todos
    todos.forEach((todo, index) => {
      const animationDelay = playAnimation
        ? (todos.length - 1 - index) * 100
        : 0;

      // Render delay logic:
      /*
        In the above code, render delay is ((todos.length - 1) - index) * 100 (if the playAnimation flag is true)
        This is done so that elements at the top (which have the highest index) appear first.
        (todos.length - 1) gives the highest index.

        So, let's say we have 3 elements in the arry, meaning, 2 is the highest index:
        2 (highest index) - 0 (current index) = 2 (so, the renderDelay value will be 200)
        2                 - 1                 = 1 (so, the renderDelay value will be 100)
        2                 - 2                 = 0 (so, there will be no delay in the render of the element with highest index)
      */

      Todo.renderOne(
        todo,
        index,
        insertContainer,
        playAnimation,
        animationDelay
      );
    });
  }

  static deleteOne(index) {
    // updating the local todos while deleting the todo item so that
    todos = deleteTodo(index);
  }
}
