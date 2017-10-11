import React, {Component} from 'react';
import {StackNavigator,} from 'react-navigation';
import {AppRegistry, Button, Image, Text, View,FlatList} from 'react-native';

class MainScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Main Profile</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Profile')
                    }
                />
                <Image source={require("./img/favicon.png")}
                       style={{width: undefined, height: 300, borderTopLeftRadius: 100}}/>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                    renderItem={({item}) => <Text style={{}}>{item.key}</Text>}
                />
            </View>
        );
    }
}

class ProfileScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Screen Profile</Text>
            </View>
        );
    }
}

export const App = StackNavigator({
    Main_Whatever: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

class AwesomeProject extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
