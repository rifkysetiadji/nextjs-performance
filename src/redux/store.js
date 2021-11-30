import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const initialSate={};

const middleware=[thunk];

const store= createStore(reducers,initialSate,applyMiddleware(...middleware));

export default store;