import * as React from 'react';
import './App.css';

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

interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface IAppState {
  characters: ICharacter[]
}

class Page extends React.PureComponent<{},IAppState> {

  constructor(props:{}) {
    super(props);
    this.state = {
      characters: []
    }
  }

  public componentDidMount() {
    fetch('https://f8852929.ngrok.io/api/characters')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          characters: resp.data.results
        })
      })
  }

  public render() {
    return (
      <div className="characters-page">
        <MarvelHeader />
        <MarvelListContainer characters={this.state.characters} />
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

class MarvelListContainer extends React.PureComponent<IAppState, {}> {
  public render() {
    return (
      <ul className="characters-list-container">
       {
          // [<MarvelCharacterItem />,<MarvelCharacterItem /> ]
         this.props.characters.map(
           character => <MarvelCharacterItem 
                          key={character.id}
                          id={character.id}
                          name={character.name}
                          thumbnail={character.thumbnail}
                          />
         ) 
       } 
      </ul>
    )
  }
}

interface ICharacterItemState {
  selected: boolean;
}

class MarvelCharacterItem extends React.PureComponent<ICharacter,ICharacterItemState> {
  public boundClicker:() => void;

  constructor(props:ICharacter){
    super(props);
    this.state = {
      selected: false
    };
    this.boundClicker = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      selected: !this.state.selected
    })
  }

  public render() {

    const classes = this.state.selected ? 'character-item selected' : 'character-item';

    return (
      <li onClick={this.boundClicker} className={classes}>
        <h2 className="character-name">
          name: {this.props.name}
        </h2>
      </li>
    )
  }
}


export default Page;


