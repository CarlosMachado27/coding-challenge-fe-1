import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <li className={`todos__item todos__item_${todo.completed && 'checked'}`}>
      <input type="checkbox" data-element="toggleTodo" data-id={todo.id} defaultChecked={todo.completed ? ' checked' : ''} />
      {todo.title}
    </li>
  )
}

export default TodoItem
