import React, { Component } from 'react';
import './App.css';
import AppBar from './component/common/AppBar' 

class App extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
