import React from 'react'

import HogTile from './HogTile'

class HogContainer extends React.Component{
    render(){
    {console.log(this.props.hogs)}
        return(
            <div>
                {this.props.hogs.map(hog => {
                    console.log(hog)
                    return <HogTile hog={hog}/>}
                )}
            </div>
        )
    } 
}

export default HogContainer
