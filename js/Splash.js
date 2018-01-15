import React, {Component} from 'react';
import {AppRegistry, AsyncStorage, Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import url from "./base/url"
import Login from "./login"
import Profile from "./profile"
import PlayList from "./my/PlayList"
import myDj from "./my/myDj"
import myFollows from "./my/myFollows"
import myFans from "./my/myFans"

const deviceHeight = require('Dimensions').get('window').height
const deviceWidth = require('Dimensions').get('window').width

class Splash extends Component {
    componentWillMount() {
        AsyncStorage.getItem(url.login, (err, result) => {
            if (err || !result) {
                setTimeout(() => {
                    this.props.navigation.navigate("login")
                }, 500)
            } else {
                setTimeout(() => {
                    this.props.navigation.navigate("profile")
                }, 500)
            }
        })
    }


    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Image source={require("./res/img/favicon.png")}
                       style={{width: deviceWidth, height: deviceHeight, backgroundColor: "#ffff00"}}/>
            </View>)
    }

}

const App = StackNavigator({
    splash: {
        screen: Splash
    },
    login: {screen: Login},
    profile: {screen: Profile},
    playlist: {screen: PlayList},
    myFollows: {screen: myFollows},
    myFans: {screen: myFans},
    myDj: {screen: myDj}
});

AppRegistry.registerComponent('AwesomeProject', () => App);
