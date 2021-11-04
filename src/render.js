import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';



export default (element, state) => {
  let todoItems
  todoItems = state.todos_filter ? state.todos_filter : state.todos;
  ReactDOM.render(
    <App todoItems={todoItems} />,
    element
  )
  } 
