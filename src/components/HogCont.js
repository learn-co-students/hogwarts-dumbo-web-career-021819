import React from 'react'
import HogTile from './HogTile'

class HogCont extends React.Component {

    render() {
        return (
            <div className='ui grid container'>
                {this.props.hogs.map(hog => <HogTile hog={hog}/>)}
            </div>
        )
    }
}

export default HogCont