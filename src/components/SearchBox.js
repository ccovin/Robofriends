import React from 'react';

const searchBox = ({searchChange}) => {
  return (
   <div>
     <input
        aria-label="Search Robots"
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
     />
   </div>
    
  )
}

export default searchBox;