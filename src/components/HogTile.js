import React from 'react'
// import piggy from '../hog-imgs'

export default class HogTile extends React.Component{

    state = {
        clicked: false
    }

    handleClick = (event) => {
        console.log('butt')
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        const clicked = this.state.clicked ? 'inline' : 'none'
        // this.nameToPic('Piggy smalls')
        return(
            <div onClick={this.handleClick}>
                {/* <h1>HogTile</h1> */}
                <h2>Name: {this.props.hog.name}</h2>
                {/* <img src={require({this.nameToPic(this.props.hog.name)})} /> */}
                {/* <img src={require(`${this.nameToPic(this.props.hog.name)}`)} /> */}
                <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)}></img>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased.toString()}</p>
                <div style={{display: clicked}}>
                <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water:  {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']},</p>
                <p>Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
                </div>
            </div>
        )
    }

}