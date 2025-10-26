import previousTodos, { todosChange } from "../data.js";

const nonZeroTasksStyleElements = Array.from(
  document.querySelectorAll("[data-nonzerotasksclass]")
);
const zeroTasksStyleElements = Array.from(
  document.querySelectorAll("[data-zerotasksclass]")
);

// Main styles selector function
function setupStyling(todosLength) {
  if (todosLength > 0) {
    // If, there are previously added tasks

    nonZeroTasksStyleElements.forEach((element) => {
      element.classList.add(element.dataset.nonzerotasksclass);
    });

    zeroTasksStyleElements.forEach((element) => {
      element.classList.remove(element.dataset.zerotasksclass);
    });
  } else {
    // If, there are no tasks added previously

    zeroTasksStyleElements.forEach((element) => {
      element.classList.add(element.dataset.zerotasksclass);
    });

    nonZeroTasksStyleElements.forEach((element) => {
      element.classList.remove(element.dataset.nonzerotasksclass);
    });
  }
}

// calling the main styles selector every time the todos change
todosChange.addEventListener("todosChange", (e) => {
  setupStyling(e.details.length);
});

export default function () {
  // calling the main styles selector funciton once initially
  setupStyling(previousTodos.length);
}
