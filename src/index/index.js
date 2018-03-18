/**
 * Created by shigaoxiang on 2018/3/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import {fetchData} from '../../public/fetch';
import {Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import configureStore from './store';
import ResourceIndex from './component/ResourceIndex';
import actions from './actions'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: configureStore()
        };
        let {dispatch}=this.state.store;
        this.actions = bindActionCreators(actions, dispatch)
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <ResourceIndex pageContext={this}/>
            </Provider>
        );
    }

}