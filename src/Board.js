import React, { Component } from 'react';
import './Board.css';
import ReactDOM from 'react-dom';
var draw_data = [];
var temp = [];
var drawing = [];
var canvas,ctx;

class Grid extends React.Component {

   constructor() {
    super();
    this.updateDrawing = this.updateDrawing.bind(this)
    this.sendDrawing = this.sendDrawing.bind(this)
    this.receiveDrawing=this.receiveDrawing.bind(this)
    this.state = {
      draw : false,
      data : draw_data,
          };
   }
      if(!window.vClass.isTutor){
      console.log("STUDENT------------------------------");
      window.vClass.studentInit()
      window.vClass.startDraw(window.vClass.Tutor,this.receiveDrawing)
      window.vClass.answerDraw(this.receiveDrawing)
    }
    else{
      console.log("TUTOR------------------------------");
      window.vClass.tutorInit()
      window.vClass.answerDraw(this.receiveDrawing)
    }
  }
    updateDrawing(){
	var temp = this.state.data[this.state.data.length-1];
	 ctx.moveTo(temp[0][0], temp[0][1]);

        for (var i = 1; i < temp.length - 2; i += 1){

        var xc = (temp[i][0] + temp[i+1][0]) / 2;
        var yc = (temp[i][1] + temp[i+1][1]) / 2;
        ctx.quadraticCurveTo(temp[i][0],temp[i][1], xc, yc);
        ctx.stroke();
        }
}
    receiveDrawing(drawing){
    console.log("Received Drawing:"+drawing);
    this.setState({
      data:[...,drawing]
    })
    this.updateDrawing
    }
    sendDrawing(e){
    e.preventDefault()
    let temp = this.state.data;
    console.log('Sending Draw Data' + temp[temp.length-1]);
    window.vClass.sendDrawMsg(temp[temp.length-1]);
   }
   componentDidMount() {
      canvas = ReactDOM.findDOMNode(this.refs.Canvas);
      
    ctx = canvas.getContext('2d');  
     ctx.fillStyle = 'rgb(200,0,0)';   
    }

    handleMouseMove = (e) => {
        if(this.state.draw===true){
        
        var x = e.clientX;
        var y = e.clientY;
        temp.push([x,y]);
        
        ctx.moveTo(temp[0][0], temp[0][1]);
        
        for (var i = 1; i < temp.length - 2; i += 1){
        
        var xc = (temp[i][0] + temp[i+1][0]) / 2;
        var yc = (temp[i][1] + temp[i+1][1]) / 2;
        ctx.quadraticCurveTo(temp[i][0],temp[i][1], xc, yc);
        ctx.stroke();
        }
       
         
        
        //ctx.quadraticCurveTo(temp[i][0],temp[i][1], temp[i+1][0],temp[i+1][1]);
        
     
        }
    }
   
    handleMouseDown = () => {
            this.setState({
                draw : true
            });
    }
        
    handleMouseUp = () => {
           draw_data.push(temp);
           this.setState({
                draw : false,
                data : draw_data
           })
	   this.sendDrawing;
           temp = [];
           }
    render(){
       return <div id="board"><canvas width="1000px" height="630px" ref="Canvas" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}></canvas></div> 
    }
  
}
export default Grid;
