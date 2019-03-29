import React from 'react';
import { connect } from 'react-redux';

import actionTypes from "../../state/actionTypes";
import * as config from "../../config";
import CharacterDetail from '../partials/characterDetail';
import CharacterListMetadata from '../partials/characterListMetadata';
import ListOfCharacters from '../partials/listOfCharacters';
import TopBar from '../partials/topBar';
import { parseMarvelResponse } from '../../helpers';

class CharactersPage extends React.Component {
    componentDidMount() {
        fetch(`${config.marvelEndpointBase}/${config.marvelCharacterListEndpoint}`)
            .then(resp => resp.json())
            .then(this.props.onFetchResolve);
        this.props.onFetchStart();        
    }

    render() {
        return (
            <div className="page characters-page">
                <TopBar />
                <div className="page-content">
                    <div className="panel left-panel" >
                        <CharacterListMetadata 
                            loaded={!this.props.metadataLoading} 
                            />
                        <ListOfCharacters 
                            loaded={!this.props.characterListLoading} 
                            />
                    </div>
                    <div className="panel right-panel" >
                        <CharacterDetail 
                            loaded={!this.props.characterListLoading} 
                            />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characterListLoading: state.characterListLoading,
        metadataLoading: state.metadataLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchStart: () => {
            dispatch({
                type: actionTypes.METADATA_REQUESTED
            })
            dispatch({
                type: actionTypes.CHARACTERS_REQUESTED
            })
        },
        onFetchResolve: json => {
            const { metadata, characterList } = parseMarvelResponse(json);
            // input to dispatch is an "action".
            //     one mandatory property: type
            //     optional property: payload
            // this is just convention
            dispatch({
                type: actionTypes.METADATA_LOADED,
                payload: metadata               
            })
            dispatch({
                type: actionTypes.CHARACTERS_LOADED,
                payload: characterList
            })
            dispatch({
                type: actionTypes.DETAIL_CHARACTER_SELECTED,
                payload: characterList[0]
            })
        }
    }
}

const ConnectedPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersPage)

export default ConnectedPage;