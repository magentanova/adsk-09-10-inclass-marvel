import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const store = createStore(combineReducers(reducers))

export default store;

// function updateStore() {
//     for (let key in reducersObj) {
//         store._state[key] = reducersObj[key](oldState, action)
//     }
// }