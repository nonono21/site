import React, { Component } from 'react';
import './App.css';

import Viewer from './Viewer/'; 
import ViewerBg from './components/ViewerBackground'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <ViewerBg />  
      <Viewer />
      </div>
    );
  }
}

export default App;
