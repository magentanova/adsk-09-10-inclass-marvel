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

    constructor(props) {
        super(props) 
        this.state = {
            characterData: [],
            selectedCharacter: null
        }
        this.updateSelection = this.updateSelection.bind(this)
    }

    componentDidMount() {
        request
            .get('https://marvel-proxy.herokuapp.com/api/characters')
            .set({
                'Accept': 'application/json'
            })
            .then(
                resp => {
                    const characters = resp.body.data.results
                    this.setState({
                        characterData: characters
                    })
                }
            )
    }

    updateSelection(charId) {
        this.setState({
            selectedCharacter: charId
        })
    }

    render() {
        return (
            <div className="character-list-wrapper" >
                <ul className="character-list" >
                    {this.state.characterData.map( 
                        charObj => 
                            <CharacterItem 
                                name={charObj.name} 
                                thumbnail={charObj.thumbnail}
                                id={charObj.id}
                                selectedCharacter={this.state.selectedCharacter}
                                {
                                    ...charObj
                                }
                                updateSelection={this.updateSelection}

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