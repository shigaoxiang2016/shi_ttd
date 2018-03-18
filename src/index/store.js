/**
 * Created by shigaoxiang on 2018/3/16.
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const middleWares = [thunkMiddleware];
const createLogger = require('redux-logger');
const logger = createLogger();
middleWares.push(logger);


const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}