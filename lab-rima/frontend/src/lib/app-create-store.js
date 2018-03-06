import reducer from '../reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import {createStore, applyMiddleware} from 'redux';

let appStoreCreate = () => {
  createStore(reducer, appluMiddleware(thunk, reporter));
}

export default appStoreCreate;
