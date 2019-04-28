import React from 'react';


const HogSearch = (props) => {

  return (

      <div className='filterWrapper'>
      <label>
      Filter by name:
      <input onClick={props.handleFilterName} type="checkbox" value='name'/>
      </label>
      <label>
      Filter by weight:
      <input onClick={props.handleFilterWeight} type="checkbox" value='weight'/>
      </label>
      <label>
      Filter by Greased:
      <input onClick={props.handleFilterGrease} type="checkbox" value='greased'/>
      </label>
      </div>
  )

}

export default HogSearch;
