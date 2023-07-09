import {createStore , applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
// eslint-disable-next-line no-unused-vars
import thunkMiddleware from 'redux-thunk';




import rootReducer from './reducer';

const logger = createLogger({collapsed: true});

const middleWare = [logger];


const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;