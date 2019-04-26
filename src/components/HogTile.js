import React from 'react'

class HogTile extends React.Component {
  state = {
    clicked: false,
    isHidden: false,
    pigGifs: []
  }

 pigUrl = "https://api.giphy.com/v1/gifs/search?api_key=E9xvzwY9YM4BtKsoly1PNwyW1AKRHW34&q=pigs&limit=14&offset=0&rating=G&lang=en"

  componentDidMount = () => {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=E9xvzwY9YM4BtKsoly1PNwyW1AKRHW34&q=pigs&limit=14&offset=0&rating=G&lang=en")
    .then(response => response.json())
    .then(pigGifsData => {
      this.setState({
        pigGifs: pigGifsData.data.map(pig => pig.images.fixed_width.url)
      })
    })
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  hideEvent = (event) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  showInfo = () => {
    if (this.state.clicked === true) {
        return( <ul>
            <li>specialty: {this.props.hog.specialty} </li>
            <li>greased: {this.props.hog.greased} </li>
            <li>weight as ratio to a fridge: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </li>
            <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']} </li>
            </ul>
          )
    }
      return null
  }

  render() {

  const slugify = (string) => {
    return string.toLowerCase().replace(/\s+/g, '_')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '_')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
  }

  return (
     <div className="ui eight wide column pigTile">
      <button onClick={this.hideEvent}>HIDE/UNHIDE HAWG</button>
      {!this.state.isHidden && <div>
        <h2>{this.props.hog.name}</h2>
        <img onClick={this.handleClick} alt={this.props.hog.name} src={this.state.pigGifs[Math.floor(Math.random()*this.state.pigGifs.length)]} />
      {this.showInfo()}
      </div>}

    </div>
  )
}
}

export default HogTile
