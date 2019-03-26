import * as React from 'react';
// import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';

import '../App.css';

import { dispatch, store } from '../state/store';
import { ActionTypes, IAppState } from '../state/types';
import CharacterItem from './CharacterItem/CharacterItem';

class CharactersPage extends React.PureComponent<{},IAppState> {

  private unsubscribe: () => void;

  constructor(props:{}) {
    super(props);
    this.state = store.getState()
  }

  public componentDidMount() {
    // any change to the store, i.e. any dispatched action, will trigger the callback 
      // passed in here. 
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })

    fetch('https://marvel-proxy.herokuapp.com/api/characters')
      .then(resp => resp.json())
      .then(resp => {
        store.dispatch({
          payload: resp.data.results,
          type: ActionTypes.CHARACTERS_LOADED
        })
      })
    dispatch({
      type: ActionTypes.CHARACTERS_LOADING
    })
  }

  public componentWillUnmount() {
    this.unsubscribe()
  }

  public render() {

    const containerProps = {
      ...this.state,
      dispatch
    }
    return (
      <div className="characters-page">
        <MarvelHeader />
        <MarvelListContainer {...containerProps} />
      </div>
    )
  }
}

class MarvelHeader extends React.PureComponent {
  public render() {
    return (
      <header>
        <h1>Marvel Characters</h1>
        <img src="" />
      </header>
    );
  }
}

interface IContainerProps extends IAppState {
  dispatch: (action:AnyAction) => void;
}

// functional component. 
// SFE (Stateless functional Component) 
// use when you have no state, and no UI/event handlers
const MarvelListContainer = (props:IContainerProps) =>  {
  const gifClass = props.charactersLoading ? "loading-gif" : "loading-gif hidden"
  return (
      <ul className="characters-list-container">
      <img className={gifClass} src="images/loader.gif" />
       {
         props.characters.map(
           character => <CharacterItem 
                          key={character.id}
                          dispatch={props.dispatch}
                          id={character.id}
                          name={character.name}
                          thumbnail={character.thumbnail}
                          selectedCharacterId={props.selectedCharacterId}
                          />
         ) 
       } 
      </ul>
    )
  }

export default CharactersPage;


