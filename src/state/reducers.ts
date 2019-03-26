import { AnyAction } from 'redux';

import { ActionTypes, IAppState, ICharacter } from './types';

const initialState:IAppState = {
    // count: 0, // not used, just an example!
    characterDetail: {},
    characters: [],
    charactersLoading: false,
    selectedCharacterId: -1
}

// reducerMap = {
//     selectedCharacterId: selectedCharacterId,
//     otherProp: otherProp
// }

/* tslint:ignore-next-line */
// function dispatch(action) {
//     for key in storeState:
//         storeState.set({
//             key: reducerMap[key](storeState[key],action)
//         })
// }

export const selectedCharacterId = (stateVal=initialState.selectedCharacterId, action:AnyAction):number => {
    switch (action.type) {
        case ActionTypes.SELECT_CHARACTER:
            return action.payload
        default:
            return stateVal
    }
};

export const characterDetail = (state=initialState.characterDetail, action: AnyAction):ICharacter | {} => {
    switch (action.type) {
        case ActionTypes.CHARACTER_DETAIL_LOADED:
            return action.payload
        default: 
            return state 
    }
};

export const characters = (state=initialState.characters, action: AnyAction):ICharacter[] => {
    switch (action.type) {
        case ActionTypes.CHARACTERS_LOADED:
            return action.payload
        default: 
            return state 
    }
};

export const charactersLoading = (state=initialState.charactersLoading, action: AnyAction ) => {
    switch (action.type) {
        case ActionTypes.CHARACTERS_LOADING:
            return true
        case ActionTypes.CHARACTERS_LOADED:
            return false
        default: 
            return state
    }
};

// export const count = (state=initialState.count, action: AnyAction) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1
//         case "DECREMENT":  
//             return state - 1
//         case "SET": 
//             return action.payload
//         case "RESET": 
//             return 0 
//         default:
//             return state
//     }
// }


