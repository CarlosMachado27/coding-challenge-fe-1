import React from 'react';

import TodoItem from './TodoItem'

const Todos = ({todoItems}) => {
  const renderTodoItems = todoItems.map(todo =>(
    <TodoItem todo={todo} key={todo.id}/>
  ))
  return (
    <ul className="todos">
      {renderTodoItems}
    </ul>
  )
}

export default Todos
