import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnyAction } from 'redux';

import './App.css';
import ControlledForm from './ControlledForm';
import { dispatch, store } from './state/store';
import { ActionTypes, IAppState, ICharacter } from './state/types';

// const fakeApiResults = [
//   {
//     name: "batman",
//     power: "hardware"
//   },
//   {
//     name: "superman",
//     power: "everything"
//   }
// ]


class Page extends React.PureComponent<{},IAppState> {

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

    fetch('http://7cb45804.ngrok.io/api/characters')
      .then(resp => resp.json())
      .then(resp => {
        store.dispatch({
          payload: resp.data.results,
          type: ActionTypes.CHARACTERS_LOADED
        })
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
const MarvelListContainer = (props:IContainerProps) =>  (
      <ul className="characters-list-container">
       {
          // [<MarvelCharacterItem />,<MarvelCharacterItem /> ]
         props.characters.map(
           character => <MarvelCharacterItem 
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


interface ICharacterItemProps extends ICharacter {
  dispatch: (action:AnyAction) => void;
  selectedCharacterId: number;
}

class MarvelCharacterItem extends React.PureComponent<ICharacterItemProps, {}> {

  constructor(props:ICharacterItemProps){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  public clickHandler() {
    // what do i do?
    this.props.dispatch({
      payload: this.props.id,
      type: ActionTypes.SELECT_CHARACTER
    })
  }

  public render() {

    const imageSource = this.props.thumbnail.path + `.` + this.props.thumbnail.extension;
    const selected = this.props.id === this.props.selectedCharacterId;
    const classes = selected ? 'character-item selected' : 'character-item';
    const displayImage = selected ? <img className ="character-item-img" src={imageSource} /> : null;

    return (
      <li onClick={this.clickHandler} className={classes}>
        <h2 className="character-name">
          name: {this.props.name}
        </h2>
        {displayImage}
      </li>
    )
  }
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/controlled-form" component={ControlledForm} />
      <Route path="/" component={Page} />
    </Switch>
  </BrowserRouter>
)
export default App;


