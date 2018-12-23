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
  }
    
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      count: (this.state.count + 1)
    })
    if (this.state.count < 5) {
      this.setState({
        prompt: 'inhale'
      })
    } else if (this.state.count > 4 && this.state.count < 12) {
      this.setState({
        prompt: 'hold'
      })
    } else if (this.state.count > 11 && this.state.count < 20) {
      this.setState({
        prompt: 'exhale'
      })
    } else {
      this.setState({
        prompt: 'inhale',
        count: 1
      })
    }
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
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