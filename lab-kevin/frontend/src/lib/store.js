import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import storeReporter from '../middleware/store-reporter';

let store = (process.env.NODE_ENV !== 'production') ? 
  createStore(reducers, applyMiddleware(thunk, storeReporter)) :
  createStore(reducers, applyMiddleware(thunk));

export default store; 