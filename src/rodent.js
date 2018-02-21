import React from 'react'

class Rodent extends React.Component {
  constructor (props) {
    super(props)
    this.mouse = '~~~<=>o-'
    this.mouse1 = '~~~>=<o-'
    this.state = {
      step: 0
    }
  }
  step () {
    this.setState(function (previousState, props) {
      return {step: previousState.step === 0 ? 1 : 0}
    })
  }
  render () {
    return (
      <div onClick={this.step.bind(this)} >{
        this.state.step === 0 ? this.mouse : this.mouse1
        }
      </div>
    )
  }
}

export default Rodent
