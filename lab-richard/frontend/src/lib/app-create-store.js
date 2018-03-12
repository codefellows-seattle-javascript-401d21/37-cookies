import reducer from '../reducers/index'
import thunk from './redux-thunk'
import reporter from './redux-reporter'
import {createStore, applyMiddleware} from 'redux'

let appStoreCreate = () => 
    createStore(reducer, applyMiddleware(thunk, reporter))

export default appStoreCreate