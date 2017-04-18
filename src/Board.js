import React, { Component } from 'react';
import './Board.css';
import ReactDOM from 'react-dom';
var draw_data = [];
var draw_rdata = [];
var temp = [];
var drawing = [];
var canvas,ctx;

class Grid extends React.Component {

   constructor() {
    super();
    this.state = {
      draw : false,
      data : draw_data,
      r_data : draw_rdata;
          };
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
           temp = [];
           }
    render(){
       return <div id="board"><canvas width="1000px" height="630px" ref="Canvas" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}></canvas></div> 
    }
  
}
export default Grid;