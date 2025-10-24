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
