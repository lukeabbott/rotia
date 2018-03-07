import React from 'react'

import BaseStats from './baseStats'

function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
class Rodent extends React.Component {
  constructor (props) {
    super(props)
    this.mouse = '~~~<=>o-'
    this.mouse1 = '~~~>=<o-'
    this.look = {
      color: getRandomColor()
    }
    this.state = {
      step: 0,
      position: {
        x: props.x,
        y: props.y
      },
      stats: {
        health: parseInt(70 * Math.random()) + BaseStats.health,
        strength: parseInt(7 * Math.random()) + BaseStats.strength,
        agility: parseInt(7 * Math.random()) + BaseStats.agility,
        wit: parseInt(7 * Math.random()) + BaseStats.wit
      }
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
      <svg width='50' height='20' x={this.state.position.x} y={this.state.position.y}>
        <rect width='20' height='5' x='0' y='10' fill={this.look.color} />
        <rect width='15' height='15' x='20' y='3' fill={this.look.color} />
        <rect width='5' height='20' x='35' y='0' fill={this.look.color} />
        <rect width='10' height='5' x='40' y='10' fill={this.look.color} />
      </svg>
    )
  }
}

export default Rodent
