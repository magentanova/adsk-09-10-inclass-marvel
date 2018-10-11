import React from 'react';

import Banner from '../partials/Banner'
import CharacterList from '../partials/CharacterList'
import store from '../../state/store';

class CharactersPage extends React.Component {
    state = store.getState()
  
    componentDidMount() {
      this.unsubscribe = store.subscribe(
        () => this.setState(store.getState())
      )
    }
  
    componentWillUnmount() {
      this.unsubscribe()
    }
  
    render() {
      return (
        <div className="characters-page">
          <Banner />
          <CharacterList 
            characterData={this.state.characterData}
            dispatch={store.dispatch}
            history={this.props.history}
            selectedCharacter={this.state.selectedCharacter}
          />
        </div>
      );
    }
  }
  
  export default CharactersPage;
  