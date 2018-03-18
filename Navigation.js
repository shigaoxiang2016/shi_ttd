/**
 * Created by shigaoxiang on 2018/3/16.
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import Index from './src/index';
import Detail from './src/detail';
import {View, Text} from 'react-native'

//注册导航
export default Navs = StackNavigator({
    Index: {
        screen: Index,
        navigationOptions: {
            headerTitle: '上海',
        },
    },
    Detail: {
        screen: Detail,  // 必须, 其他都是非必须
        path: 'app/Detail', //使用url导航时用到, 如 web app 和 Deep Linking
        navigationOptions: {
            headerTitle: '详情页',
        }  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文
    }
}, {
    initialRouteName: 'Index', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        // header: <View><Text>{'test'}</Text></View>,
        headerBackTitle: '返回',
        headerLeft: <View><Text>{'test'}</Text></View>,
        headerRight: <View><Text>{'test'}</Text></View>,
        headerStyle: {backgroundColor: '#19A0F0'},
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=> { console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=> { console.log('导航栏切换结束'); }  // 回调
});
