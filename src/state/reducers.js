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

export const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHARACTERS_LOADED:
            return {
                ...oldState,
                characterList: action.payload,
                characterListLoading: false
            }
        case actionTypes.CHARACTERS_REQUESTED:
            return {
                ...oldState,
                characterListLoading: true
            }
        case actionTypes.DETAIL_CHARACTER_SELECTED:
            return {
                ...oldState,
                detailCharacter: action.payload
            }
        case actionTypes.METADATA_LOADED:
            return {
                ...oldState,
                metadata: action.payload,
                metadataLoading: false
            }
        case actionTypes.METADATA_REQUESTED:
            return {
                ...oldState,
                metadataLoading: true
            }
        default: 
            return oldState 
    }
}