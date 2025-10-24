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

// Event to be triggered on todos change
const todosChangeEvent = new Event("todosChange");

export const todosChange = new EventTarget();

// todoChange event data class:
class TodosChangeEventData {
  constructor(length) {
    this.length = length;
  }
}

// **operations**
export const addTodo = (todo) => {
  todos.push(todo.todoData);

  save();
  
  // triggering the todosChangeEvent:
  todosChangeEvent.details = new TodosChangeEventData(todos.length);
  todosChange.dispatchEvent(todosChangeEvent);

  return todos;
};

export const deleteTodo = (index) => {
  todos.splice(index, 1);

  save();

  // triggering the todosChangeEvent:
  todosChangeEvent.details = new TodosChangeEventData(todos.length);
  todosChange.dispatchEvent(todosChangeEvent);

  return todos;
};

export default todos;
