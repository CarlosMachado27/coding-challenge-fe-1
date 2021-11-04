function renderApp(radio,input, todoList) {
  return `<div>${radio}${input}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderRadioButtons() {
  return `
    <input type="radio" value="all" name="filter">
    <label for="all">Show All</label><br>
    <input type="radio" value="open" name="filter">
    <label for="open">Show open</label><br>
    <input type="radio" value="closed" name="filter">
    <label for="closed">Show closed</label><br>
  `;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

export default (element, state) => {
  let todoItems
  if (state.todos_filter) {
    todoItems = state.todos_filter.map(renderTodoItem).join('');
  }
  else 
      todoItems = state.todos.map(renderTodoItem).join('');

  
  element.innerHTML = renderApp(
    renderRadioButtons(),
    renderForm(),
    renderTodos(todoItems)
  );
}
