import React, { Component } from 'react';
import request from 'superagent';

import CharacterItem from './CharacterItem';

// const characterData = [
//     {
//         name: 'Wolverine',
//         power: 'grumpy'
//     },
//     {
//         name: 'Venom',
//         power: 'slimy'
//     },
//     {
//         name: 'Spiderman',
//         power: 'sticky'
//     }
// ]

class CharacterList extends Component {

    componentDidMount() {
        request
            .get('https://marvel-proxy.herokuapp.com/api/characters')
            .set({
                'Accept': 'application/json'
            })
            .then(
                resp => {
                    const characters = resp.body.data.results
                    this.props.dispatch({
                        type: "CHARACTERS_LOADED",
                        payload: characters
                    })
                }
            )
    }

    render() {
        return (
            <div className="character-list-wrapper" >
                <ul className="character-list" >
                    {this.props.characterData.map( 
                        charObj => 
                            <CharacterItem 
                                {
                                    ...charObj
                                }
                                key={charObj.id}
                                dispatch={this.props.dispatch}
                                history={this.props.history}
                                selectedCharacter={this.props.selectedCharacter}
                                />
                    )}
                </ul>
            </div>
        )
    }
}

export default CharacterList;

// function() {
//     return (
//         5
//         2
//     )
// }