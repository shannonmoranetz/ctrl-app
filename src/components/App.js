import React, { Component } from 'react';
import Splash from './Splash'
import Button from './Button'
import Message from './Message'
import '../../src/styles/main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }; 

  render() {
    return(
      <div>
        <h1 className="app-title">app</h1>
        <Splash />
        <Button />
        <Message />
      </div>
    )
  };
};

