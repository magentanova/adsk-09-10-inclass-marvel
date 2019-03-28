import { combineReducers, createStore } from 'redux';

import { reducer } from './reducers.js';

const store = createStore(reducer);

export default store;
