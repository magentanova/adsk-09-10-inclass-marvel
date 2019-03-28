import actionTypes from './actionTypes';

const initialState = {
    characterList: [],
    characterListLoading: false,
    detailCharacter: {
        thumbnail: {},
    },
    metadata: {},
    metadataLoading: false
}

export const characterList = ( oldState = initialState.characterList, action ) => {
    switch (action.type) {
        case actionTypes.CHARACTERS_LOADED:
            return action.payload
        default: 
            return oldState
    }
}

export const characterListLoading = ( oldState = initialState.characterListLoading, action ) => {
    switch (action.type) {
        case actionTypes.CHARACTERS_LOADED:
            return false
        case actionTypes.CHARACTERS_REQUESTED:
            return true
        default: 
            return oldState
    }
}

export const detailCharacter = ( oldState = initialState.detailCharacter, action ) => {
    switch (action.type) {
        case actionTypes.DETAIL_CHARACTER_SELECTED:
            return action.payload
        default: 
            return oldState
    }
}

export const metadata = ( oldState = initialState.metadata, action ) => {
    switch (action.type) {
        case actionTypes.METADATA_LOADED:
            return false
        case actionTypes.METADATA_REQUESTED:
            return true
        default: 
            return oldState
    }
}

export const metadataLoading = ( oldState = initialState.metadataLoading, action ) => {
    switch (action.type) {
        case actionTypes.METADATA_LOADED:
            return false
        case actionTypes.METADATA_REQUESTED:
            return true
        default: 
            return oldState
    }
}