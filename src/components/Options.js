import React, { Component } from 'react';
import '../../src/styles/main.scss';

export default class Options extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div className="options-container">
        <button onClick={this.props.toggleSplash}>reset</button>
      </div>
    )
  }
};

