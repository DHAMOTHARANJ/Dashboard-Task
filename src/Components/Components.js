import React from 'react'
import Root from '../base/Root'

function Components() {
  return (
    <Root
    title={"This components Navigation"}
    description={"For other document plz navigate through Buttons"}
    >
      <div className='topnav'>
      <input type="text" placeholder="Search.."></input>
    </div>
      <div>Buttons</div>
      <div className='comp-div'>
        <button>search</button>
        <button>Info</button>
        <button>Delete</button>
        <button>FB</button>
        
      </div> 
    </Root>
  )
}

export default Components