import React from 'react';

import withLoader from '../hocs/withLoader';
import Character from './character';

class ListOfCharacters extends React.Component {

    render() {
        const charactersJSX = this.props.characterList.map( (characterObj, i) =>
            <Character key={characterObj.id} {...characterObj} />
        )
        return (
            <div className="list-of-characters">
                {charactersJSX}
            </div>
        )
    }
}

export default withLoader(ListOfCharacters);
// React.createElement(Character, {...props}, /*children*/);
// const character = new Character();