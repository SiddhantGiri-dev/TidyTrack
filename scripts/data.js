// constants
const TODOS_KEY = "todos";
const COMPLETED_TODOS_KEY = "completed";

// utility functions
const parseTodos = (todos) => {
  return JSON.parse(todos);
};

const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Todos Array
let todos = localStorage.getItem(TODOS_KEY);

if (todos) {
  todos = parseTodos(todos);
} else {
  todos = [];
}

// Completed Todos Array
let completedTodos = localStorage.getItem(COMPLETED_TODOS_KEY);

if (completedTodos) {
  completedTodos = parseTodos(completedTodos);
} else {
  completedTodos = [];
}

// Event to be triggered on todos change
const todosChangeEvent = new Event("todosChange");

export const todosChange = new EventTarget();

// todoChange event data class:
class TodosChangeEventData {
  constructor(length, completedTodosLength) {
    this.length = length;
    this.completedTodosLength = completedTodosLength;
  }
}

// **operations**
export const addTodo = (todo) => {
  todos.push(todo.todoData);

  save(TODOS_KEY, todos);

  // triggering the todosChangeEvent:
  todosChangeEvent.details = new TodosChangeEventData(
    todos.length,
    completedTodos.length
  );
  todosChange.dispatchEvent(todosChangeEvent);

  return todos;
};

export const deleteTodo = (index) => {
  todos.splice(index, 1);

  save(TODOS_KEY, todos);

  // triggering the todosChangeEvent:
  todosChangeEvent.details = new TodosChangeEventData(
    todos.length,
    completedTodos.length
  );
  todosChange.dispatchEvent(todosChangeEvent);

  return todos;
};

export const markAsDone = (index) => {
  todos[index].checked = true;

  completedTodos.push(todos[index]);

  todos.splice(index, 1);

  save(TODOS_KEY, todos);
  save(COMPLETED_TODOS_KEY, completedTodos);

  // triggering the todosChangeEvent:
  todosChangeEvent.details = new TodosChangeEventData(
    todos.length,
    completedTodos.length
  );
  todosChange.dispatchEvent(todosChangeEvent);

  return { todos, completedTodos };
};

export { completedTodos };
export default todos;
