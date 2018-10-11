const initialState = {
    characterData: [],
    charactesrLoading: false,
    selectedCharacter: null
}

export const characterData = (state=initialState.characterData, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADED': 
            return action.payload
        // case 'ADD_CHARACTER': 
        //     // DO NOT
        //     let newState = state
        //     state.push(action.payload)

        //     // DO
        //     let newState = [...state, action.payload]
        //     return newState
        default:
            return state
    }
}

export const selectedCharacter = (state=initialState.selectedCharacter, action) => {
    switch (action.type) {
        case 'SELECT_CHARACTER': 
            return action.payload 
        case 'UNSELECT_CHARACTER':
            return null 
        default: 
            return state 
    }
}

// // store built from our reducers
// store._state = {
//     characterData: [],
//     selectedCharacter: null
// }