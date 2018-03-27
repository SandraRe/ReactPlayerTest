import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'; 

class App extends Component {
  render() {
    return (
      <div className="App">
<div>
 <ReactPlayer url='https://www.youtube.com/watch?v=rnwlWn603g4' className='react-player' playing width='100%' height='100%' /> 
</div> 
      </div>
    );
  }
}

export default App;
