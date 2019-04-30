import React from 'react'

class NavSort extends React.Component {
    render() {
        return (
            
            <div>
                <br/>
                <input onChange={this.props.handleChange} type="checkbox" name="greased" value="greased"/> Greased?
                <input onChange={this.props.handleSort} type="checkbox" name="name" value="name"/> Sort By Name 
                <input onChange={this.props.handleSort} type="checkbox" name="weight" value="weight"/> Sort By Weight 
            </div>
        )
    }
}

export default NavSort;