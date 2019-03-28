import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ConnectedCharactersPage from './components/pages/charactersPage';
import HomePage from './components/pages/homePage';
import './App.css';
import store from './state/store';



// in contactPage.js

// export default PageWithTopBar(ContactPage)


// const Header = () => <h1>Welcome to Bit Canvas!</h1>

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router >
          <div>
            <Route path="/characters" component={ConnectedCharactersPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/" exact component={ConnectedCharactersPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
