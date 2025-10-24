// **utility functions**
const parseTodos = (todos) => {
  return JSON.parse(todos);
};

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Todos Array
let todos = localStorage.getItem("todos");

if (todos) {
  todos = parseTodos(todos);
} else {
  todos = [];
}

// **operations**
export const addTodo = (todo) => {
  todos.push(todo.todoData);

  save();

  return todos;
};

export const deleteTodo = (index) => {
  todos.splice(index, 1);

  save();

  return todos;
};

export default todos;
