import React, { Component } from 'react';
import Splash from './Splash';
import Circle from './Circle';
import Message from './Message';
import Options from './Options';
import '../../src/styles/main.scss';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderSplash: true,
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
          <h1 className="app-title">ctrl</h1>
          <Splash toggleSplash={this.toggleSplash}
                  addClass={this.addClass}/>
          <h2 className="app-subtitle">( control )</h2>
        </div>
      )
    } else {
      return (
        <div className="app-container">
          <Message />
          <Circle />
          <Options toggleSplash={this.toggleSplash}/>
        </div>
      )
    }  
  };
};

