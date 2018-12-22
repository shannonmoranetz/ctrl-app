import React, { Component } from 'react';
import Splash from './Splash'
import Button from './Button'
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
          <h1 className="app-title">app</h1>
          <Splash toggleSplash={this.toggleSplash}/>
        </div>
      )
    } else {
      return(
        <div className="app-container">
          <Message />
          <Button />
          <Options toggleSplash={this.toggleSplash}/>
        </div>
      )
    }  
  };
};

