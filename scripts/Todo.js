import allTodos, { addTodo } from "./data.js";

export class Todo {
  constructor(title, details) {
    this.todoData = {
      title,
      details,
      subTodos: [],
    };

    // updating the localstorage:
    this.todoData.index = addTodo(this);
  }

  static renderOne(todo, insertContainer, renderDelay) {
    const element = document.createElement("div");
    element.classList.add("task");
    element.classList.add("opacity-0"); // keeping it invisible initially
    element.title = "Drag to change order";
    element.innerHTML = `<input type="checkbox" title="Mark as done" />
                                 <h3>${todo.title}</h3>
                                 <p>
                                 ${todo.details}
                                 </p>
                                 <div class="btns-container">
                                 <button class="button-round btn-details">&#128462; Details</button>
                                 <button class="button-round btn-delete">&#128462; Delete</button>
                                 </div>`;

    // inserting the task element at the top in the provided contianer
    insertContainer.insertAdjacentElement("afterbegin", element);
  
    setTimeout(() => {
      element.classList.add("task-animate"); // actually shows the task

      // Removing the animation after it has played out so that transitions work on the element
      setTimeout(() => {
        element.classList.remove("opacity-0"); // Ensuring to keep the task element visible 

        element.classList.remove("task-animate");
      }, 400);
    }, renderDelay);
  }

  static renderAll(insertContainer) {
    // enptying the todos container
    insertContainer.innerHTML = "";

    // rendering the todos
    allTodos.forEach((todo, index) => {
      Todo.renderOne(todo, insertContainer, ((allTodos.length - 1) - index) * 100);

      // Render delay logic:
      /*
        In the above code, render delay is ((allTodos.length - 1) - index) * 100.
        This is done so that elements at the top (which have the highest index) appear first.
        (allTodos.length - 1) gives the highest index.

        So, let's say we have 3 elements in the arry, meaning, 2 is the highest index:
        2 (highest index) - 0 (current index) = 2 (so, the renderDelay value will be 200)
        2                 - 1                 = 1 (so, the renderDelay value will be 100)
        2                 - 2                 = 0 (so, there will be no delay in the render of the element with highest index)
      */
    });
  }
}
