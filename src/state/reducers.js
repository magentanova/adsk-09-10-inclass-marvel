const initialState = {
    characterList: [],
    dataLoaded: false,
    detailCharacter: {
        thumbnail: {},
    },
    metadata: {}
}

export const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case "DATA_LOADING":
            return {
                ...oldState,
                dataLoaded: false
            }
        case "DATA_LOADED":
            return {
                ...oldState,
                dataLoaded: true
            }
        case "SELECT_DETAIL_CHARACTER":
            return {
                ...oldState,
                detailCharacter: action.payload
            }
        default: 
            return oldState 
    }
}