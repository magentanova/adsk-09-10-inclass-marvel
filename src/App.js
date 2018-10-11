import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import CharactersPage from './components/pages/CharactersPage';
import CharacterDetailPage from './components/pages/CharacterDetailPage';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends React.Component {
  render() { 
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/characters" component={CharactersPage} />
          <Route path="/detail/:charId" component={CharacterDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App