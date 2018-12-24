import React, { Component } from 'react';
import messageData from '../../src/messageData.js';
import '../../src/styles/main.scss';

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
    this.createMsgArray()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  createMsgArray() {
    let messageArray = Object.keys(messageData).map((msg) => {
      return msg.message;
    })
    this.setState({
      allMessages: messageArray
    });
  }









  tick() {
    this.setState({
      count: (this.state.count + 1),
    })
  }

  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  


  
  // generateRandomMessage() {
  //   const newMessage = this.state.messageData[Math.floor(Math.random() * this.state.messageData.length)];
  //   this.updateMessage(newMessage)
  // }

  // updateMessage(message) {
  //   this.setState({
  //     currentMessage: message
  //   });
  // }

  render() {
    return(
      <div className="message-container">
        <h2 className="message-text">joajwoopawje</h2>
      </div>
    )
  };
};

