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
      <div className="content">
  <h1 className="heading">
    ok boomer
  </h1>
  <h2 className="subheading">
    jojo va avec les boomer
    jojo va avec les boomer
  </h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <hr/>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
</div>
      </div>
    );
  }
}

export default App;
