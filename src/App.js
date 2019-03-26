import React from 'react';

import CharactersPage from './components/pages/charactersPage';
import logo from './logo.svg';
import './App.css';



// in contactPage.js

// export default PageWithTopBar(ContactPage)


// const Header = () => <h1>Welcome to Bit Canvas!</h1>

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharactersPage />
        {/* Canvas
        {Canvas} */}
      </div>
    );
  }
}

export default App;
