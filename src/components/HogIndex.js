import React from 'react';

import HogCard from './HogCard.js';


const HogIndex = (props) => {

  return (
    <div>
    {props.hogs.map( hog => {

    return <HogCard hog={hog} />
    })}
    </div>
  )
}

export default HogIndex;
