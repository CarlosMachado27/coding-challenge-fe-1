import React from 'react'
import Form from './components/Form';
import RadioButtons from './components/RadioButtons';
import Todos from './components/Todos';

const App = ({todoItems}) => {
  return (
    <div>
      <RadioButtons/>
      <Form />
      <Todos todoItems={todoItems}/>
    </div>
  )
}

export default App
