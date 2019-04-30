import React from 'react'

class HogTile extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const showDetails = () => {
            if(this.state.clicked === true){
                return (
                    <ul>
                        <li>Specialty: {this.props.hog.specialty}</li>
                        <li>Greased: {this.props.hog.greased.toString()}</li>
                        <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
                        <li>Highest Medal: {this.props.hog['highest medal achieved']}</li>
                    </ul>
                )
            }
        }
           
        return (
            <div className='ui eight wide column'>
                <h1>{this.props.hog.name}</h1>
                <img onClick={this.handleClick} src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}></img>
                {showDetails()}
            </div>
        )
    }
}

export default HogTile;

