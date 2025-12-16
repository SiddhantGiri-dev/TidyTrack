import allTodos, {
  addTodo,
  deleteTodo,
  completedTodos,
  markAsDone,
} from "./data.js";
import { animateTodo } from "./dynamicStyles/dynamicStylesMain.js";

let lists = {
  todos: allTodos,
  checkedTodos: completedTodos,
};

export class Todo {
  constructor(title, details) {
    this.todoData = {
      title,
      details,
      checked: false,
      subTodos: [],
    };

    // updating the localstorage and the local todos array:
    lists.todos = addTodo(this);
  }

  static get length() {
    return lists.todos.length;
  }

  static set length(len) {
    return new Error("Cannot set length directly!");
  }

  static renderOne(todo, index, insertContainer, playAnimation, delay) {
    const element = document.createElement("div");

    element.classList.add("task-base");
    element.classList.add("task");
    element.title = "Drag to change order";
    element.dataset.index = index;

    if (todo.checked) {
      element.innerHTML = `
      <button class="btn-close-task open-task-only">
      <span></span>
      <span></span>
      </button>
      <h3>${todo.title}</h3>
      <p>
      ${todo.details}
      </p>
      <div class="btns-container">
      <button class="button-round btn-details closed-task-only">&#128462; Details</button>
      </div>`;
    } else {
      element.innerHTML = `<input type="checkbox" class="closed-task-only" title="Mark as done" />
      <button class="btn-close-task open-task-only">
      <span></span>
      <span></span>
      </button>
      <h3>${todo.title}</h3>
      <p>
      ${todo.details}
      </p>
      <div class="btns-container">
      <button class="button-round btn-details closed-task-only">&#128462; Details</button>
      <button class="button-round btn-delete" data-delete="${index}">&#128465; Delete</button>
      <button class="button-round btn-mark-done open-task-only">&check; Mark as done</button>
      </div>`;
    }

    // animation's implementation
    if (playAnimation) {
      animateTodo(element, delay);
    }

    // inserting the task element at the top in the provided contianer
    insertContainer.insertAdjacentElement("afterbegin", element);
  }

  static renderAll(
    todosRenderContainer,
    checkedTodosRenderContainer,
    playAnimation
  ) {
    if (todosRenderContainer) {
      // enptying the todos container
      todosRenderContainer.innerHTML = "";

      // rendering the todos
      lists.todos.forEach((todo, index) => {
        const animationDelay = playAnimation
          ? (lists.todos.length - 1 - index) * 100
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
          todosRenderContainer,
          playAnimation,
          animationDelay
        );
      });
    }

    if (checkedTodosRenderContainer) {
      // enptying the todos container
      checkedTodosRenderContainer.innerHTML = "";

      // rendering the todos
      lists.checkedTodos.forEach((todo, index) => {
        const animationDelay = playAnimation
          ? (lists.todos.length - 1 - index) * 100
          : 0;

        Todo.renderOne(
          todo,
          index,
          checkedTodosRenderContainer,
          playAnimation,
          animationDelay
        );
      });
    }
  }

  static deleteOne(index) {
    // updating the local todos while deleting the todo item so that
    lists.todos = deleteTodo(index);
  }

  static open(todoElement) {
    // opening the todo element
    todoElement.classList.add("task-expanded");
    todoElement.classList.remove("task");

    // adding the dark background behind the opened todo element to ensure user doesn't click something bhind it attidently
    const taskExpandedBg = document.createElement("div");
    taskExpandedBg.classList.add("task-expanded-bg");
    todoElement.insertAdjacentElement("afterend", taskExpandedBg);
  }

  static close(todoElement) {
    // removing the dark background behind the opened todo element
    document.querySelector(".task-expanded-bg").remove();

    // closing the todo element
    todoElement.classList.add("task");
    todoElement.classList.remove("task-expanded");
  }

  static markAsDone(index) {
    const result = markAsDone(index);

    lists.todos = result.todos;
    lists.checkedTodos = result.completedTodos;
  }
}
