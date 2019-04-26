import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTileContainer from './HogTileContainer'
import GreasedForm from './GreasedForm'
import NameSort from './NameSort'
import WeightSort from './WeightSort'

class App extends Component {

  state= {
    hogs: hogs,
    greaseCheck: false
  }

  handleGreased = (event) => {
    this.setState({
      greaseCheck: !this.state.greaseCheck
    })
  }

  greaseFilter = () => {
    if (this.state.greaseCheck === true) {
      return this.state.hogs.filter(hog => hog.greased === true)
    } else {
      return this.state.hogs
    }
  }

  handleNameSort = () => {
    let x = hogs.sort(function (a,b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      })
    this.setState({
      hogs: x
    })
  }

  handleWeightSort = () => {
    let y = hogs.sort(function (a,b) {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    })
    this.setState({
      hogs: y
    })
  }

  render() {

    return (
      <div className="App">
          < Nav />
        <GreasedForm handleGreased={this.handleGreased} />
        <NameSort handleNameSort={this.handleNameSort} />
        <WeightSort handleWeightSort={this.handleWeightSort} />
        < HogTileContainer hogs={this.greaseFilter()}/>
      </div>
    )
  }
}

export default App;
