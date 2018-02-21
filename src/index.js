import React from 'react'
import ReactDOM from 'react-dom'

import Rodent from './rodent'

class Rotia extends React.Component {
  render () {
    return (
      <>
        <h1>Enjoy the game</h1>
        <Rodent>Test</Rodent>
      </>
    )
  }
}

ReactDOM.render(<Rotia />, document.getElementById('game'))
