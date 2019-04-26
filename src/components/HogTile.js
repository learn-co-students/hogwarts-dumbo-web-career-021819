import React from 'react'

class HogTile extends React.Component {
  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
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
    <div className="ui eight wide column">
      <h2>{this.props.hog.name}</h2>
      <img onClick={this.handleClick} alt={this.props.hog.name} src={require(`../hog-imgs/${slugify(this.props.hog.name)}.jpg`)} />
      {this.showInfo()}
    </div>
  )
}
}

export default HogTile
