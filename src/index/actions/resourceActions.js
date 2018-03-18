'use strict';
import {createAction} from 'redux-actions';
import {fetchData} from '../../../public/fetch';
import * as ACTION_TYPES from '../constants/actionTypes';

const resourceInfoReceive = createAction(ACTION_TYPES.FETCH_RESOURCE_INFO, resourceInfo => {
    return {...resourceInfo, receivedAt: Date.now()};
});

function fetchResourceInfo(params) {
    return dispatch => {
        _fetchResourceService(params).then(res => {
            const action = resourceInfoReceive({
                resourceInfo: res
            });
            dispatch(action);
        }).catch(e => {
        });
    }
}
export {fetchResourceInfo};


function _fetchResourceService() {
    let url = "https://sec-m.ctrip.com/restapi/soa2/10131/json/RecommendProductListV1QOC";
    let params = {
        "ver": "7.10.2.0228180001",
        "limit": 20,
        "size": "C_200_200",
        "gsadistid": 2,
    };
    return fetchData(url, params).then((result)=> {
        return result.data
    })
}