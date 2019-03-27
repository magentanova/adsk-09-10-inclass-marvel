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
        let toRender = <LoadingGif />
        if (this.state.dataLoaded) {
            toRender = [
                <CharacterListMetadata {...this.state.metadata} />,
                <ListOfCharacters characterList={this.state.characterList} />
            ]
        }
        return (
            <div className="page characters-page">
                <TopBar />
                {toRender}
            </div>
        )
    }
}