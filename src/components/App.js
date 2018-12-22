import React, { Component } from 'react';
import Splash from './Splash'
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
        <h1>hi</h1>
        <Splash />
      </div>
    )
  };
};

