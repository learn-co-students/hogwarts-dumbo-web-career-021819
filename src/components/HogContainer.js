import React, { Component } from  'react';
import HogCard from './HogCard'



class HogContainer extends Component {

handleClick(event) {
	event.target.parentElement.hidden = true
}
reRender = (event) =>{
	console.log("clicked");
    let hogDivList = event.target.parentNode.children[3].children
    for (var i = 0; i < hogDivList.length; i++) {
    	console.log(hogDivList[i])
    	hogDivList[i].hidden = false
    }
}


	render () {
		return (
		     <div>
		     <button onClick={this.reRender}>Unhide</button><br/><br/>
		     <div className="ui grid contain">

		     
		     {this.props.hogArray.map( (hog) => {
			    return 	(
			    	<div>
			    <HogCard hog={hog}/>
			    <button onClick={this.handleClick}>Hide</button>
			    </div>)
		              })
	               }
		  
		     </div></div>
		)
	}
}
	

export default HogContainer