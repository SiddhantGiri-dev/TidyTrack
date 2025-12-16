import todos, { todosChange, completedTodos } from "../data.js";

const POST_INIT_PROP_KEY = "post-initialization-class";
const PRE_INIT_PROP_KEY = "pre-initialization-class";
const ZERO_TODOS_PROP_KEY = "zero-todos-class";

const postInitClassElems = Array.from(
  document.querySelectorAll(`[data-${POST_INIT_PROP_KEY}]`)
);
const preInitClassElems = Array.from(
  document.querySelectorAll(`[data-${PRE_INIT_PROP_KEY}]`)
);
const zeroTodosClassElems = Array.from(
  document.querySelectorAll(`[data-${ZERO_TODOS_PROP_KEY}]`)
);


function processClassPropKey(classPropKey) {
  for(let i = 0; i < classPropKey.length; i++) {
    const char = classPropKey[i];

    if(char == "-") {
      classPropKey = classPropKey.replace("-", "");
      classPropKey = classPropKey.split("");
      classPropKey[i] = classPropKey[i].toUpperCase();
      classPropKey = classPropKey.join("");
    }
  }

  return classPropKey;
}

function addClass(classPropKey, elem) {
  classPropKey = processClassPropKey(classPropKey);

  const className = elem.dataset[classPropKey];

  elem.classList.add(className);
}

function removeClass(classPropKey, elem) {
  classPropKey = processClassPropKey(classPropKey);

  const className = elem.dataset[classPropKey];

  elem.classList.remove(className);
}


// Main styles selector function
function setupStyling(todosLength, completedTodosLength) {
  if (todosLength > 0 || completedTodosLength > 0) {
    // If, there are previously added tasks, i.e; the app has been used previously
    postInitClassElems.forEach((element) => addClass(POST_INIT_PROP_KEY, element));

    preInitClassElems.forEach((element) => removeClass(PRE_INIT_PROP_KEY, element));

    if (todosLength == 0) {
      zeroTodosClassElems.forEach((element) => addClass(ZERO_TODOS_PROP_KEY, element));
    } else {
      zeroTodosClassElems.forEach((element) => removeClass(ZERO_TODOS_PROP_KEY, element));
    }
  } else {
    // If, the app hasn't been used previously

    postInitClassElems.forEach((element) => removeClass(POST_INIT_PROP_KEY, element));

    preInitClassElems.forEach((element) => addClass(PRE_INIT_PROP_KEY, element));

    zeroTodosClassElems.forEach((element) => removeClass(ZERO_TODOS_PROP_KEY, element));
  }
}

// calling the main styles selector every time the todos change
todosChange.addEventListener("todosChange", (e) => {
  setupStyling(e.details.length, e.details.completedTodosLength);
});

export default function () {
  // calling the main styles selector funciton once initially
  setupStyling(todos.length, completedTodos.length);
}
