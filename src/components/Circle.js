import React, { Component } from 'react';
import '../../src/styles/main.scss';

export default class Circle extends Component {
  constructor() {
    super();
    this.state = {

    };
  }; 

  render() {
    return(
      <div>
        <div className="circle-element">circle</div>
      </div>
    )
  };
};

