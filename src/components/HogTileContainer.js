import React from 'react'
import HogTile from './HogTile'

const HogTileContainer = (props) => {
    return (
      <div className="ui grid container">
        {props.hogs.map(singleHog => <HogTile hog={singleHog} />)}
      </div>
    )
}

export default HogTileContainer
