import React from 'react'
import ReactDOM from 'react-dom'

import Rodent from './rodent'

class Rotia extends React.Component {
  render () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'>
        <Rodent x='5' y='10'>Test</Rodent>
        <Rodent x='400' y='250'>Second Test</Rodent>
      </svg>
    )
  }
}

ReactDOM.render(<Rotia />, document.getElementById('game'))
