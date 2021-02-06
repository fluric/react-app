import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import produce from 'immer';
import thunkMiddleware from 'redux-thunk';
import reduceReducers from 'reduce-reducers';

import { initialState } from './initialState';

const withProduce = reducers => reducers.map(reducer => produce((draft, action) => reducer(draft, action)));

const rootReducer = reduceReducers(initialState, ...withProduce([]));

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
