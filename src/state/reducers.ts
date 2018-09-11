import { ActionTypes, IAppState, ICharacter } from './types';

const initialState:IAppState = {
    // count: 0, // not used, just an example!
    selectedCharacterId: -1,
    characters: []
}

export const selectedCharacterId = (state=initialState.selectedCharacterId, action:any):number => {
    switch (action.type) {
        case ActionTypes.SELECT_CHARACTER:
            return action.payload
        default:
            return state 
    }
};

export const characters = (state=initialState.characters, action: any):ICharacter[] => {
    switch (action.type) {
        case ActionTypes.CHARACTERS_LOADED:
            return action.payload
        default: 
            return state 
    }
}

// export const count = (state=initialState.count, action: any) => {
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

// combinedReducers = {
//     selectedCharacterId: selectedCharacterId,
//     otherProp: otherProp
// }

// for (let prop in state) {
//     combinedReducers[prop](initialState[prop], action)
// }
