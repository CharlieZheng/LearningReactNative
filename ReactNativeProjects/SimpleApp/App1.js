import React from 'react';
import {AppRegistry, Button, Text, View,} from 'react-native';
import {StackNavigator} from 'react-navigation';

var MainScreenNavigator = require('./App2.js');
var FadeInView = require('./FadeInView.js');

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}


class ChatScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Chat with Lucy',
    // };

    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
        )
    }
}

class NavigatorWrappingScreen extends React.Component {
    render() {
        return (
            <MainScreenNavigator navigation={this.props.navigation}/>
        );
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;

export const SimpleApp = StackNavigator({
    Home: {screen: NavigatorWrappingScreen},
    Chat_whatever_name: {screen: ChatScreen},
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

