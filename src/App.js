import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {

  render() {
    return (
      <nav className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          />
        <Users loading={ this.state.loading } users={ this.state.users } />
      </nav>
    );
  }

  state = {
    users: [],
    loading: false
  };

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({ users: res.data.items, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

}

export default App;
