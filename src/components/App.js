import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex.js';
import HogSearch from './HogSearch.js';

class App extends Component {

  // Mounting phase

  state = {
    hogs: []
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  handleFilterName = (event) => {
    const search = event.target.value;
    // alert(search);
    const newArray = this.state.hogs.sort( (a, b) => (a.name > b.name) ? 1 : -1 );
    console.log(newArray);
    this.setState({
      hogs: newArray
    })
  }

  handleFilterWeight = (event) => {
    const search = event.target.value;
    // alert(search);
    const newArray = this.state.hogs.sort( (a, b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1 );
    console.log(newArray);
    this.setState({
      hogs: newArray
    })
  }

  handleFilterGrease = (event) => {
    const search = event.target.value;
    // alert(search);
    const newArray = this.state.hogs.filter( hog => hog.greased === true );
    console.log(newArray);
    this.setState({
      hogs: newArray
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <HogSearch handleFilterName={this.handleFilterName} handleFilterWeight={this.handleFilterWeight} handleFilterGrease={this.handleFilterGrease}/>
          <HogIndex hogs={this.state.hogs} />

      </div>
    )
  }
}

export default App;
