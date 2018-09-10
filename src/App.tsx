import * as React from 'react';
import './App.css';

const fakeApiResults = [
  {
    name: "batman",
    power: "hardware"
  },
  {
    name: "superman",
    power: "everything"
  }
]


class Page extends React.Component {
  public render() {
    return (
      <div className="characters-page">
        <MarvelHeader />
        <MarvelListContainer characters={fakeApiResults} />
      </div>
    )
  }
}

class MarvelHeader extends React.Component {
  public render() {
    return (
      <header>
        <h1>Marvel Characters</h1>
        <img src="" />
      </header>
    );
  }
}

interface IListContainerProps {
  characters: ICharacterProps[];
}

class MarvelListContainer extends React.Component<IListContainerProps, {}> {
  public render() {
    return (
      <ul className="characters-list-container">
       {
          // [<MarvelCharacterItem />,<MarvelCharacterItem /> ]
         this.props.characters.map(
           character => <MarvelCharacterItem 
                          key={character.name}
                          name={character.name}
                          power={character.power}/>
         ) 
       } 
      </ul>
    )
  }
}

interface ICharacterProps {
  name: string;
  power: string;
}

class MarvelCharacterItem extends React.Component<ICharacterProps, {}> {
  public render() {
    return (
      <li className="character-item">
        <h2 className="character-name">
          {this.props.name}
        </h2>
        <p className="character-power">
          {this.props.power}
        </p>
      </li>
    )
  }
}


export default Page;


