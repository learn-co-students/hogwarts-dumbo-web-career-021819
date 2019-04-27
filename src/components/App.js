import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter'

import HogContainer from './HogContainer'


class App extends Component {

state = {
	hogsArray: hogs,
  hogsNewArray : hogs //copy to be used for filtered data
}

hogsChange = (filterHog) => {
this.setState ({
  hogsNewArray : filterHog //after first use of filter this value changes
})
}
	
  render() {
    return (
      <div className="App">

          <Nav />
          <Filter hogChange={this.hogsChange} hogArray={this.state.hogsArray} />
        {/*Wow how ridiculos is react for comments! Anyway,
        Filter takes in the original state hogsArray and returns into the function hogsChange which then
        sets a new state for hosNewArray, on first run it is hogs but then changes to sorted by name */}
          <HogContainer hogArray={this.state.hogsNewArray} />
          

          
      </div>
    )
  }
}

export default App;
