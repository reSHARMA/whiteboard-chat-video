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
  constructor(props){
    super(props)
    this.updateInputValue = this.updateInputValue.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.state = {
      inputValue: ""
    }
  }
  sendMessage(e){
    e.preventDefault()
    if(!window.vClass.isTutor){
      var obj = {name:"stud0"
            }
    }
    else {
      var obj = {name:"tutor0"}
    }
    obj.msg=this.state.inputValue
    console.log('Sending Message:' + JSON.stringify(obj));
    window.vClass.sendChatMsg(obj)
  }
  updateInputValue(evt){
    this.setState({
      inputValue:evt.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}
class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.receiveMsg=this.receiveMsg.bind(this)
    this.state = {
      msg : messages
    };
    if(!window.vClass.isTutor){
      console.log("STUDENT------------------------------");
      window.vClass.studentInit()
      window.vClass.startChat(window.vClass.Tutor,this.receiveMsg)
      window.vClass.answerChat(this.receiveMsg)
    }
    else{
      console.log("TUTOR------------------------------");
      window.vClass.tutorInit()
      window.vClass.answerChat(this.receiveMsg)
    }
  }
  receiveMsg(msg){
    console.log("Received Message:"+JSON.stringify(msg));
    this.setState({
      msg:[...this.state.msg,msg]
    })
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
