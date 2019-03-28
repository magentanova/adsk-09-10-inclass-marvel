import React from 'react';

// import { marvelEndpointBase, marvelCharacterListEndpoint }  from "../../config";
import actionTypes from "../../state/actionTypes";
import * as config from "../../config";
import CharacterDetail from '../partials/characterDetail';
import CharacterListMetadata from '../partials/characterListMetadata';
import ListOfCharacters from '../partials/listOfCharacters';
import TopBar from '../partials/topBar';
import { parseMarvelResponse } from '../../helpers';
import store from '../../state/store';

export default class CharactersPage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {}
    // }

    // ^^ same as ^^

    state = store.getState();

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState( store.getState() )
        })
        // vv works something like this... vv
        // store.subscribe = function(callbackFunc) {
        //     changeSubscribers.push(callbackFunc)
        // }

        // store.setState = function(newState) {
        //     store.mergeNewState(newState)
        //     for (subscriber in changeSubscribers) {
        //         subscriber()
        //     }
        // }

        fetch(`${config.marvelEndpointBase}/${config.marvelCharacterListEndpoint}`)
            .then(resp => resp.json())
            .then(json => {
                const { metadata, characterList } = parseMarvelResponse(json);
                // input to dispatch is an "action".
                    // one mandatory property: type
                    // optional property: payload
                // this is just convention
                store.dispatch({
                    type: actionTypes.METADATA_LOADED,
                    payload: metadata               
                })
                store.dispatch({
                    type: actionTypes.CHARACTERS_LOADED,
                    payload: characterList
                })
                store.dispatch({
                    type: actionTypes.DETAIL_CHARACTER_SELECTED,
                    payload: characterList[0]
                })
            });
        store.dispatch({
            type: actionTypes.METADATA_REQUESTED
        })
        store.dispatch({
            type: actionTypes.CHARACTERS_REQUESTED
        })
            
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="page characters-page">
                <TopBar />
                <div className="page-content">
                    <div className="panel left-panel" >
                        <CharacterListMetadata 
                            loaded={!this.state.metadataLoading} 
                            {...this.state.metadata} />
                        <ListOfCharacters 
                            dispatch={store.dispatch.bind(store)} 
                            loaded={!this.state.characterListLoading} 
                            characterList={this.state.characterList} />
                    </div>
                    <div className="panel right-panel" >
                        <CharacterDetail 
                            loaded={!this.state.characterListLoading} 
                            {...this.state.detailCharacter}  />
                    </div>
                </div>
            </div>
        )
    }
}