import { combineReducers, createStore } from 'redux';

import { reducer } from './reducers.js';

export default createStore(reducer);
