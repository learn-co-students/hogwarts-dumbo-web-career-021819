import React from 'react'

const GreasedForm = (props) => {
    return (
      <div>
        <button onClick={props.handleGreased}>Filter/Unfilter Greased HAWGS!</button>
      </div>
  )
}

export default GreasedForm
