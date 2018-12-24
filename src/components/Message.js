import React, { Component } from 'react';
import '../../src/styles/main.scss';
var data = require('../../src/messageData.json');

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      currentMessage: '',
      allMessages: []
    }
  };

  componentWillMount() {
    this.startTimer()
    this.createAllMessages()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  createAllMessages() {
    let messageArray = data.map((currentMessage) => {
      return currentMessage.message;
    })
    this.setState({
      allMessages: messageArray
    });
  }

  generateRandomMessage() {
    let newMessage = this.state.allMessages[Math.floor(Math.random() * this.state.allMessages.length)];
    return newMessage;
  }

  tick() {
    this.setState({
      count: (this.state.count + 1),
    })
  }

  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 19000)
  }

  render() {
    return(
      <div className="message-container">
        <h2 className="message-text">{this.generateRandomMessage()}</h2>
      </div>
    )
  };
};

