import './App.css';
import Navbar from './components/layout/Navbar';
import React, { Component } from 'react'

class App extends Component{
  render() {
    return (
      <nav className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
      </nav>
    ); 
  }
}

export default App;
