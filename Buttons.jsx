import React from 'react'


const Buttons = ({filterItem, resetStt}) => {
  
  
  
  return (
    <div className='menu-tabs-container '>
        <div className='menu-tab d-flex justify-content-around'>
          <button className='btn btn-warning' onClick={()=>filterItem('Breakfast')}>Breakfast</button>
          <button className='btn btn-success' onClick={()=>filterItem('Lunch')}>Lunch</button>
          <button className='btn btn-danger' onClick={()=>filterItem('Dinner')}>Dinner</button>
          <button className='btn btn-primary' onClick={resetStt}>All</button>
        </div>
      
    </div>
  )
}

export default Buttons
