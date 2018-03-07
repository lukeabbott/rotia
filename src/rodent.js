import React from 'react'

class Rodent extends React.Component {
  constructor (props) {
    super(props)
    this.mouse = '~~~<=>o-'
    this.mouse1 = '~~~>=<o-'
    this.state = {
      step: 0
    }
    this.stats = {
      health: 10,
      strength: 5,
      agility: 5,
      wits: 5
    }
  }
  step () {
    this.setState(function (previousState, props) {
      return {step: previousState.step === 0 ? 1 : 0}
    })
    if (this.encounterMonster()) {
      console.log('fight')
    }
  }
  encounterMonster () {
    return parseInt(Math.random() * 100) < 25
  }
  render () {
    return (
      <fragment>
        <h1>{this.props.children}</h1>
        <div onClick={this.step.bind(this)} >{
          this.state.step === 0 ? this.mouse : this.mouse1
          }
        </div>
      </fragment>
    )
  }
}

export default Rodent
