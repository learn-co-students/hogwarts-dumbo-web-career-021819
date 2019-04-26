import React from 'react'

export default class HogSearch extends React.Component {

    // test = (event) => {
    //     console.log(event.target.innerText)
    // }

    render(){
        return(
            <div onClick={this.props.sortCallback}>
                <h5>Sort by: </h5>
                <button>Name</button>
                <button>Weight</button>
                <button>Greased</button>
                <button>Not Greased</button>
            </div>
        )
    }
}