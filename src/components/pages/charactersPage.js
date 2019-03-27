import React from 'react';

// import { marvelEndpointBase, marvelCharacterListEndpoint }  from "../../config";
import * as config from "../../config";
import TopBar from '../partials/topBar';
import ListOfCharacters from '../partials/listOfCharacters';
import LoadingGif from "../partials/loadingGif";
import CharacterListMetadata from '../partials/characterListMetadata';
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
                    metadata,
                })
            });
    }

    render() {
        return (
            <div className="page characters-page">
                <TopBar />
                <CharacterListMetadata loaded={this.state.dataLoaded} {...this.state.metadata} />,
                <ListOfCharacters loaded={this.state.dataLoaded} characterList={this.state.characterList} />
            </div>
        )
    }
}