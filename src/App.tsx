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

interface IContainerState {
  selectedCharacterId: number;
}

class MarvelListContainer extends React.PureComponent<IAppState, IContainerState> {
  public readonly state:IContainerState;

  constructor(props:IAppState) {
    super(props)
    this.state = {
      selectedCharacterId: -1
    }
    this.toggleSelectedImage = this.toggleSelectedImage.bind(this)
  }

  public toggleSelectedImage(id:number) {
    this.setState({
      selectedCharacterId: id
    })
  }

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
                          selectedCharacterId={this.state.selectedCharacterId}
                          toggleSelectedImage={this.toggleSelectedImage}
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

interface ICharacterItemProps extends ICharacter {
  selectedCharacterId: number;
  toggleSelectedImage: (id:number) => void;
}

class MarvelCharacterItem extends React.PureComponent<ICharacterItemProps,ICharacterItemState> {

  constructor(props:ICharacterItemProps){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  public clickHandler() {
    this.props.toggleSelectedImage(this.props.id)
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


export default Page;


