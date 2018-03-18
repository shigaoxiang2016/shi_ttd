/**
 * Created by shigaoxiang on 2018/3/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

export default class Index extends Component {
    render() {
        let info = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        {info.name}
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu2
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

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
});