import React from 'react';
import { connect } from 'react-redux';

import withLoader from '../hocs/withLoader';
import Character from './character';

class ListOfCharacters extends React.Component {

    render() {
        const charactersJSX = this.props.characterList.map( (characterObj, i) =>
            <Character 
                key={characterObj.id} 
                {...characterObj}  
                />
        )
        return (
            <div className="list-of-characters">
                {charactersJSX}
            </div>
        )
    }
}


export default connect(
    state => ({
        characterList: state.characterList
    })
)(withLoader(ListOfCharacters));