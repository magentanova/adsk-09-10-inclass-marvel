import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CharacterDetailPage from './CharacterDetailPage';
import CharactersPage from './CharactersPage';

import '../App.css';

const App = () => (
  <BrowserRouter >
    <Switch >
      <Route path="/characters" component={CharactersPage} />
      <Route path="/character/detail/:id" component={CharacterDetailPage} />
      <Route component={CharactersPage/*NotFoundPage (if it existed) */} />
    </Switch>
  </BrowserRouter>
) 
export default App;


