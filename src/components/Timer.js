import React, { Component } from 'react';
import '../../src/styles/main.scss';

export default class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 1,
      prompt: ''
    }
  }

  componentWillMount () {
    this.startTimer()
    this.setPrompt()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      count: (this.state.count + 1)
    })
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer () {
    clearInterval(this.timer)
  }

  setPrompt() {
    if (this.state.timer === 4) {
      this.setState({
        prompt: 'hold'
      })
    }
    else if (this.state.timer === 7) {
      this.setState({
        prompt: 'exhale'
      })
    }
    else {
      this.setState({
        prompt: 'inhale'
      })
    }
  }

  render () {
    return (
      <div className='breathing-instructions'>
        <h2 className='breathing-instructions'>{this.state.prompt}</h2>        
        <h1 className='second-display'>{this.state.count}</h1>
      </div>   
    )
  }
}