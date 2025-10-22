import allTodos, { addTodo } from "./data.js";

export class Todo {
  constructor(title, details) {
    this.todoData = {
      title,
      details,
      subTodos: [],
    };

    // updating the localstorage:
    addTodo(this);
  }

  static render(insertContainer) {
    // enptying the todos container
    insertContainer.innerHTML = "";

    // rendering the todos
    for (const todo of allTodos) {
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
                                 <button class="button-round btn-delete">&#128462; Delete</button>
                                 </div>`;

      insertContainer.insertAdjacentElement("afterbegin", element);
    }
  }
}
