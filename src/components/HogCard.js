import React, { Component } from  'react';


class HogCard extends Component {

state = {
    clicked: false
      }

handleClick = (event) => {
    // I want to change when I click
    console.log("clicked")
    this.setState({
      clicked: !this.state.clicked
      
    })
  }

	render () {
        if (this.state.clicked) {
        return (
			<div className="ui card" >
		   <ul>{this.props.hog.name}</ul>
		    <img className="image" alt={this.props.hog.name}src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} onClick={this.handleClick} />
		    <div className="description">
		    <ul>Specialty :{this.props.hog.specialty}</ul>
		    <ul>Greased :{this.props.hog.greased.toString()}</ul>
            <ul>Weight : {(this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]*309).toFixed()}</ul>
            <ul>Highest Medal : {this.props.hog["highest medal achieved"]}</ul></div>
		    </div>
		  )

        
           }
        else {
        return (
			<div className="ui card">
		   <ul>{this.props.hog.name}</ul>
		    <img className="image" alt={this.props.hog.name}src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} onClick={this.handleClick} />
		    </div>
		  )

		}
		
	}
	

}
export default HogCard