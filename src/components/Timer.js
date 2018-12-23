import React, { Component } from 'react';
import '../../src/styles/main.scss';

export default class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 1,
      prompt: 'inhale'
    }
  }

  componentWillMount() {
    this.startTimer()
    this.setPrompt()
  }
    
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      count: (this.state.count + 1),
    })

    if (this.state.count < 5) {
      this.setState({
        prompt: 'inhale'
      })
    }
    else if (this.state.count > 4 && this.state.count < 11) {
      this.setState({
        prompt: 'hold'
      })
    }
    else {
      this.setState({
        prompt: 'exhale'
      })
    }
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  setPrompt() {

  }

  render () {
    return (
      <div className='counter-container'>
        <h2 className='breathing-instructions'>{this.state.prompt}</h2>        
        <h1 className='second-display'>{this.state.count}</h1>
      </div>   
    )
  }
}