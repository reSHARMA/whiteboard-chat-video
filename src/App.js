import React from 'react';
//import ReactDOM from 'react-dom';
import Chat from './Chat.js';
import Grid from './Board.js';
import vid from './vid.js';
class App extends React.Component {
  render() { 
    return (
<div>
    <Chat />
    <Grid  width="1000" height="500" x="40" y="40" />
    <vid />
</div>	
    );
  }
}

export default App;
