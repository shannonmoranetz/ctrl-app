import React, { Component } from 'react';
import '../../src/styles/main.scss';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <button className="start-button" onClick={this.props.toggleSplash}>
        breathe</button>
      </div>
    )
  }
};

