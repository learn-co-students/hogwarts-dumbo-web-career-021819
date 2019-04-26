import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
// import hogs from '../porkers_data';
import HogSearch from './HogSearch'
import HogData from '../porkers_data.js'

import HogContainer from './HogContainer';

class App extends Component {

  state = {
    hogs: HogData
  }

  name = (a,b) => { // HogData.sort(this.name)
    if (a.name < b.name) {
      return -1
    }else if (a.name > b.name) {
      return 1;
    }
    return 0
  }

  sortCallback = (event) => {
    
    if (event.target.innerText === "Name"){
      this.setState({
        hogs: HogData.sort(this.name)
      })
    }
    if (event.target.innerText === "Weight"){
      this.setState({
        hogs: HogData.sort(this.weight)
      })
    }
    if (event.target.innerText === "Greased"){
      this.setState({
        hogs: HogData.filter(hog => hog.greased)
      })
    }
    if (event.target.innerText === "Not Greased"){
      this.setState({
        hogs: HogData.filter(hog => !hog.greased)
      })
    }
    // console.log(event.target.innerText)
  }

  weight = (a,b) => { // HogData.sort(this.weight)
    const what = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (a[what] < b[what]) {
      return 1
    }else if (a[what] > b[what]) {
      return -1;
    }
    return 0
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogSearch sortCallback={this.sortCallback}/>
          < HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
