'use strict';

import {handleActions} from 'redux-actions';
import * as ACTION_TYPES from '../constants/actionTypes';
const initialState = {
    viewspots: [],
    loading: false
};

const resourceReducer = handleActions({
    [ACTION_TYPES.FETCH_RESOURCE_INFO]: (state, action) => {
        let result= {
            ...state,
            viewspots: action.payload.resourceInfo.viewspots
        }
        return result;
    }

}, initialState);

export default resourceReducer;
