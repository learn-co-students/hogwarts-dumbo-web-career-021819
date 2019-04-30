import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogCont from './HogCont'

class App extends Component {

  state = {
    hogs: hogs,
    filtHogs: hogs
  }

  handleChange = (event) => {
    if(event.target.value === 'greased'){
      if(event.target.checked === true){
        let newHogs = this.state.hogs.filter(hog => hog.greased === true)
        this.setState({
          filtHogs: newHogs
        })
      } else {
        this.setState({
          filtHogs: hogs
        })
      }
    }
  }

  handleSort = (event) => {
    if(event.target.value === 'name'){
      if(event.target.checked === true){
        let newHogs = this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        this.setState({
          filtHogs: newHogs
        })
      } else {
        this.setState({
          filtHogs: hogs
        })
      }
    }
    
    if(event.target.value === 'weight'){
      if(event.target.checked === true){
        let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        let newHogs = this.state.hogs.sort((a,b) => (a[weight] > b[weight]) ? 1 : ((b[weight] > a[weight]) ? -1 : 0))
        this.setState({
          filtHogs: newHogs
        })
      } else {
        this.setState({
          filtHogs: hogs
        })
      }
    }
  }

  // componentDidMount() {
  //   fetch('../porkers_data')
  //   .then(r => r.json())
  //   .then(JSON => {
  //     this.setState({
  //       hogs: JSON
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
          < Nav handleSort={this.handleSort} handleChange={this.handleChange} />
          < HogCont hogs={this.state.filtHogs}/>
      </div>
    )
  }
}

export default App;
