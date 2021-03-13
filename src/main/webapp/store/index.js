import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduceReducers from 'reduce-reducers';
import produce from 'immer';

import { initialState } from 'main/webapp/store/initialState';
import JokesReducer from 'main/webapp/store/reducers/JokesReducer';

const withProduce = reducers => reducers.map(reducer => produce((draft, action) => reducer(draft, action)));

const rootReducer = reduceReducers(initialState, ...withProduce([JokesReducer]));

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
