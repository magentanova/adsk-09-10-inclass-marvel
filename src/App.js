import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner'
import CharacterList from './components/CharacterList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <CharacterList />
      </div>
    );
  }
}

export default App;
