import React from 'react';
import { Provider } from 'react-redux';

import ConnectedCharactersPage from './components/pages/charactersPage';
import './App.css';
import store from './state/store';



// in contactPage.js

// export default PageWithTopBar(ContactPage)


// const Header = () => <h1>Welcome to Bit Canvas!</h1>

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <ConnectedCharactersPage />
          {/* Canvas
          {Canvas} */}
        </div>
      </Provider>
    );
  }
}

export default App;
