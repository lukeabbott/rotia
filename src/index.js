import React from 'react'
import ReactDOM from 'react-dom'

import Rodent from './rodent'

class Rotia extends React.Component {
  render () {
    return (
      <fragment>
        <h1>Enjoy the game</h1>
        <Rodent>Test</Rodent>
        <Rodent>Second Test</Rodent>
      </fragment>
    )
  }
}

ReactDOM.render(<Rotia />, document.getElementById('game'))
