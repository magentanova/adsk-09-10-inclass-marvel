import React from 'react';

// import { marvelEndpointBase, marvelCharacterListEndpoint }  from "../../config";
import * as config from "../../config";
import CharacterDetail from '../partials/characterDetail';
import CharacterListMetadata from '../partials/characterListMetadata';
import ListOfCharacters from '../partials/listOfCharacters';
import TopBar from '../partials/topBar';
import { parseMarvelResponse } from '../../helpers';

export default class CharactersPage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {}
    // }

    // ^^ same as ^^

    state = {
        characterList: [],
        dataLoaded: false,
        detailCharacter: {
            thumbnail: {},
        },
        metadata: {}
    }

    componentDidMount() {

        fetch(`${config.marvelEndpointBase}/${config.marvelCharacterListEndpoint}`)
            .then(resp => resp.json())
            .then(json => {
                const { metadata, characterList } = parseMarvelResponse(json);
                this.setState({
                    characterList,
                    dataLoaded: true,
                    detailCharacter: characterList[0],
                    metadata,
                })
            });
    }

    render() {
        return (
            <div className="page characters-page">
                <TopBar />
                <div className="page-content">
                    <div className="panel left-panel" >
                        <CharacterListMetadata loaded={this.state.dataLoaded} {...this.state.metadata} />
                        <ListOfCharacters loaded={this.state.dataLoaded} characterList={this.state.characterList} />
                    </div>
                    <div className="panel right-panel" >
                        <CharacterDetail loaded={this.state.dataLoaded} {...this.state.detailCharacter}  />
                    </div>
                </div>
            </div>
        )
    }
}