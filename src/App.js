import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import React, { Component } from 'react'

class App extends Component{
  render() {
    return (
      <nav className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
        <Users/>
      </nav>
    ); 
  }
}

export default App;
