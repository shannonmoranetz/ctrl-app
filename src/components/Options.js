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
        <button className="reset-button" onClick={this.props.toggleSplash}>finished</button>
      </div>
    )
  }
};

