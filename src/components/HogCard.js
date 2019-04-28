import React from 'react';

// import augustus_gloop from '../hog-imgs/augustus_gloop.jpg';
// import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg';
// import cherub from '../hog-imgs/cherub.jpg';
// import galaxy_note from '../hog-imgs/galaxy_note.jpg';
// import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg';
// import mudblood from '../hog-imgs/mudblood.jpg';
// import piggy_smalls from '../hog-imgs/piggy_smalls.jpg';
// import porkchop from '../hog-imgs/porkchop.jpg';
// import rainbowdash from '../hog-imgs/rainbowdash.jpg';
// import sobriety from '../hog-imgs/sobriety.jpg';
// import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg';
// import trouble from '../hog-imgs/trouble.jpg';
// import truffleshuffle from '../hog-imgs/truffleshuffle.jpg';
// const imgMap = {
  //   'augustus_gloop': augustus_gloop
  //
  // }
  // `../hog-imgs/
  // const imgPath = '../hog-imgs/';
  // console.log(imgFilePath);

import HogsDetails from './HogsDetails.js'

class HogCard extends React.Component {

  state = {
    name: null,
    specialty: null,
    greased: null,
    weight: null,
    medal: null,
    click: false
  }

  handleClick = (event) => {
    // console.log("Pass");
    this.setState({
      click: !this.state.click
    })
  }


  render() {

    const imgFilePath = this.props.hog.name.toLowerCase().replace(/\s/gi,"_");

    return (

    <div className='pigTile' onClick={this.handleClick}>
    <br />
    <h1>{this.props.hog.name}</h1>
    <img src={require(`../hog-imgs/${imgFilePath}.jpg`)} />
    {/*// This in jsx works !!*/}
    {this.state.click && <HogsDetails hog={this.props.hog} /> }
    </div>)
}}

export default HogCard;
