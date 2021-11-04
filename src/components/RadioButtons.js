import React from 'react'

const RadioButtons = () => {
  return (
    <div>
      <input type="radio" value="all" name="filter"/>
     <label htmlFor="all">Show All</label><br/>
     <input type="radio" value="open" name="filter"/>
     <label htmlFor="open">Show open</label><br/>
     <input type="radio" value="closed" name="filter"/>
     <label htmlFor="closed">Show closed</label><br></br>
    </div>
  )
}

export default RadioButtons
