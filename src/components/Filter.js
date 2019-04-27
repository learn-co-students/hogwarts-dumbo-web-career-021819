import React, { Component } from  'react';


class filter extends Component {

state = {
	namechecked :false,
	weightchecked :false,
	greasechecked :false,
	changed: [],
	original: [],
	grabbed: []
}
//original and changed are set to blank arrays

filterArray = (sortBy) => {
let hog = this.props.hogArray //declaring hog to equal the original hogArray data from App
for (let i = 0; i < hog.length; i++) {
		this.state.changed.push(hog[i]);
		} //pushes hog data into changed state
		this.state.changed.sort(function(a, b) {
  var A = a[sortBy]
  var B = b[sortBy]
  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0;
});
	this.props.hogChange(this.state.changed) //sets the changedArray state 
		//passes in the changed state to the hogChange function of App
		this.setState({
		grabbed: this.state.changed,
		original: hog 
	    })

}


handleChange = (event) => {
	console.log("clicked box")// on click make sure that original and changed are set back to blank arrays
switch(event.target.name) {
	case "namefilter" :
    console.log("clicked on namefilter", this.state.changed)
    this.setState({
		namechecked: !this.state.namechecked, //this changes the checked value
		changed : [],
		// original: []
	})
    if (!this.state.namechecked) {

    	this.filterArray("name")

	}
	else if (this.state.namechecked) {
		//if the checkbox is checked this passes in original array state
		this.props.hogChange(this.state.original)
	}
    break;
    case "weightfilter" :
    this.setState({
		weightchecked: !this.state.weightchecked, //this changes the checked value
		changed : [],
		original: []
	})
	if (!this.state.weightchecked) {

    	this.filterArray("weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water")

	}
	else if (this.state.weightchecked) {
		//if the checkbox is checked this passes in original array state
		this.props.hogChange(this.state.original)
	}

    break;
    case "greasefilter" :
    this.setState({
		greasechecked: !this.state.greasechecked, //this changes the checked value
	})
	if (!this.state.greasechecked) {
		if (this.state.grabbed.length < 1){

           console.log("hogArray", this.props.hogArray.filter(hog => hog.greased))
           this.props.hogChange(this.props.hogArray.filter(hog => hog.greased))
		}
        else {
        	this.props.hogChange(this.state.grabbed.filter(hog => hog.greased))
        }

	}
	else if (this.state.greasechecked) {
	// this.props.hogChange(this.props.hogArray)
	if (this.state.grabbed.length < 1){
           console.log("hogArray", this.props.hogArray.filter(hog => hog.greased))
           this.props.hogChange(this.props.hogArray)
		}
        else {
        	this.props.hogChange(this.state.grabbed)
        }

	}

}


}

	render(){


		return (

             <div >

             <label>Sort by name</label>
             <input name="namefilter" type="checkbox" checked={this.state.namechecked} onClick={this.handleChange}/>
             <label>Sort by weight</label>
             <input name="weightfilter" type="checkbox" checked={this.state.weightchecked} onClick={this.handleChange}/>
             <label>Filter by greased</label>
             <input name="greasefilter" type="checkbox" checked={this.state.greasechecked} onClick={this.handleChange}/>
             <br /><br /><br />
             </div>
			)

	}
}

export default filter