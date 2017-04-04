import React, { Component } from 'react';
import logo from './logo.svg';
import './Chat.css';
// change messages and the change would be reflected
var messages = [
  {name:'reshabh',msg:'hru?'},
  {name:'shreya',msg:'?'}
];
class Head extends React.Component {
  render() {
    return (
      <div>
        CHAT
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
       {this.props.name} <br />
      
        {this.props.msg}
        
      </div>
      
    );
  }
}
class Scrollable extends React.Component {
  render() {
    var row=[];
    this.props.message.forEach(function(m){
      row.push(<Message name={m.name} msg={m.msg} />);
    });
    return (
      <div>
        {row}
      </div>
    );
  }
}
class InputS extends React.Component {
  render() {
    return (
      <div>
        <input type="text"></input>
          <button>Send</button>
      </div>
    );
  }
}
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg : messages
          };
  }
  
  render() { 
    return (
      <div id="chat">
        <Head />
        <Scrollable message={this.state.msg} />
        <InputS />
      </div>
    );
  }
}

export default Chat;
