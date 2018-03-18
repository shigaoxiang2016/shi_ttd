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

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../actions/index'


class Index extends Component {
    constructor(props) {
        super(props);
        this.gotoPage2 = this.gotoPage2.bind(this);
    }

    gotoPage2(item) {
        const {navigate} = this.props.pageContext.props.navigation;
        navigate('Detail', item);
    }

    render() {
        let {viewspots = [],context}=this.props;
        return (
            <ScrollView>
                <View><Text>{'上海精选'}</Text></View>
                {
                    (viewspots || []).map((item, key)=> {
                        return (<TouchableOpacity key={"views" + key} style={styles.item_container}
                                                  onPress={()=> this.gotoPage2(item)}>
                                <View style={styles.item_left}>
                                    <Image source={{uri: item.cimgurl}} style={{width: 95, height: 95}}/>
                                </View>
                                <View style={styles.item_right}>
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!!!!
                    </Text>
                    <TouchableOpacity onPress={this.gotoPage2} style={styles.topage2button}>
                        <Text>{'To Page 2'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    componentDidMount() {
        this.props.actions.fetchResourceInfo();
    }
}

export default connect(state => ({
    viewspots: state.resource.viewspots
}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(Index);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topage2button: {
        width: 100,
        height: 40,
        backgroundColor: '#19A0F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item_container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 9,
        marginLeft: 9,
        minHeight: 90,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    item_left: {
        width: 95,
        height: 95,
        marginRight: 10
    },
    item_right: {
        flex: 1
    }
});