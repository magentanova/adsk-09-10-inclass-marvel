import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';

import { ActionTypes, ICharacter } from '../../state/types';

interface ICharacterItemProps extends ICharacter {
    dispatch: (action:AnyAction) => void;
    selectedCharacterId: number;
  }
  
  class CharacterItem extends React.PureComponent<ICharacterItemProps, {}> {
  
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
      let displayImage = null;
      if (selected) {
          displayImage = (
              <div className="character-item-img-wrapper">
                  <img className ="character-item-img" src={imageSource} />
                  <div>
                      <Link to={`character/detail/${this.props.id}`} >Detail</Link>
                  </div>
              </div>
          )
      }
      // const displayImage = selected ? <img className ="character-item-img" src={imageSource} /> : null;
  
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
  
export default CharacterItem;