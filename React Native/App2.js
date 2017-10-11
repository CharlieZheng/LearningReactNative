import React from 'react';
import {Button,} from 'react-native';

import {TabNavigator} from "react-navigation";

var MainScreenNavigator = require('./test5_and.js');

class RecentChatsScreen extends React.Component {
    render() {
        return <Button
            onPress={() => this.props.navigation.navigate('Chat_whatever_name', {user: 'Lucy'})}
            title="Chat with Lucy"
        />

    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Button
            onPress={() => this.props.navigation.navigate('Chat_whatever_name', {user: 'Lucy'})}
            title="Chat with Lucy"
        />

    }
}

var MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

module.exports = MainScreenNavigator;
