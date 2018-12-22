import React, { Component } from 'react';
import Splash from './Splash'
import Circle from './Circle'
import Message from './Message'
import Options from './Options'
import '../../src/styles/main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderSplash: true
    };
  }; 

  toggleSplash = () => {
    this.setState({
      renderSplash: !this.state.renderSplash
    });
  };

  render() {
    if (this.state.renderSplash) {
      return (
        <div className="splash-container">
          <Splash toggleSplash={this.toggleSplash}/>
          <h1 className="app-title">app</h1>
        </div>
      )
    } else {
      return(
        <div className="app-container">
          <Message />
          <Circle />
          <Options toggleSplash={this.toggleSplash}/>
        </div>
      )
    }  
  };
};

