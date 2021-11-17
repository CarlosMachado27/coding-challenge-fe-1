import store from '../store';
import * as todoActions from '../store/todoActions';

import React from 'react'

const RadioButtons = () => {
  return (
    <div>
      <input onClick={(e) => store.dispatch(todoActions.filter(e.target.value))} type="radio" value="all" name="filter"/>
     <label htmlFor="all">Show All</label><br/>
     <input onClick={(e) => store.dispatch(todoActions.filter(e.target.value))}  type="radio" value="open" name="filter"/>
     <label htmlFor="open">Show open</label><br/>
     <input onClick={(e) => store.dispatch(todoActions.filter(e.target.value))}  type="radio" value="closed" name="filter"/>
     <label htmlFor="closed">Show closed</label><br></br>
    </div>
  )
}

export default RadioButtons
