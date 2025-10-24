import previousTodos, { todosChange } from "./data.js";

const mainInpContainer = document.getElementById("main-inp-container");
const tasksContainer = document.getElementById("tasks-container");
const mainElement = document.getElementsByTagName("main")[0];

// Main styles selector function
function setupStyling(todosLength) {
  if (todosLength > 0) {
    // If, there are previously added tasks

    Array.from(document.getElementsByClassName("zero-todos-only")).forEach(
      (element) => {
        element.classList.add("hidden");
      }
    );

    // <main>
    mainElement.classList.add("non-zero-tasks-main");

    // tasks container
    tasksContainer.classList.add("non-zero-tasks-container");

    // main input container
    mainInpContainer.classList.add("non-zero-tasks-main-inp-container");
  } else {
    // If, there are no tasks added previously

    Array.from(document.getElementsByClassName("zero-todos-only")).forEach(
      (element) => {
        element.classList.remove("hidden");
      }
    );

    // <main>
    mainElement.classList.remove("non-zero-tasks-main");

    // tasksContainer
    tasksContainer.classList.remove("non-zero-tasks-container");

    // main input container
    mainInpContainer.classList.remove("non-zero-tasks-main-inp-container");
  }
}

// calling the main styles selector every time the todos change
todosChange.addEventListener("todosChange", (e) => {
  setupStyling(e.details.length);
});

// calling the main styles selector function once initially
setupStyling(previousTodos.length);

// main input animation funciton
export const mainInpAnim = (mainInp, detailsInp, addBtn) => {
  // Make the add button visible once the main input is focused
  mainInp.addEventListener("focus", () => {
    mainInp.parentElement.classList.add("expanded-main-inp-container");
    detailsInp.parentElement.style.height = "20px";
    addBtn.style.height = "20px";
  });

  // Make the add button vanish (collapse the main input container) when user clicks out of the main input container
  document.body.addEventListener("click", (e) => {
    if (
      e.target != mainInp.parentElement &&
      !e.target.closest("#main-inp-container")
    ) {
      addBtn.style.height = "0";
      detailsInp.parentElement.style.height = "0";
      mainInp.parentElement.classList.remove("expanded-main-inp-container");
    }
  });
};

export const animateTodo = (todoElement, delay) => {
  todoElement.classList.add("opacity-0"); // keeping it invisible initially

  setTimeout(() => {
    todoElement.classList.add("task-animate"); // actually shows the task

    // Removing the animation after it has played out so that transitions work on the element
    setTimeout(() => {
      todoElement.classList.remove("opacity-0"); // Ensuring to keep the task element visible

      todoElement.classList.remove("task-animate");
    }, 400);
  }, delay);
};
