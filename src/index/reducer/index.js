/**
 * Created by shigaoxiang on 2018/3/16.
 */
'use strict';
import {combineReducers} from 'redux';
import resourceReducer from './resourceReducer';


const reducer = combineReducers({
    resource: resourceReducer
});

export default reducer;


