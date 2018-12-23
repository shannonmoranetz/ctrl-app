import React, { Component } from 'react';
import Timer from './Timer';
import '../../src/styles/main.scss';

export default class Circle extends Component {
  constructor() {
    super();
    this.state = {
    };
  }; 

  render() {
    return(
      <div className="circle-container">
        <Timer />
      </div>
    )
  };
};

